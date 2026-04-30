import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import configsIndex from './configs';
import type { WizardConfig, Question, ShortCircuitCondition } from './configs/types';

type AnswerValue = string | number | boolean | Array<string | number | boolean>;
type Answers = Record<string, AnswerValue>;

type WizardContextType = {
  config?: WizardConfig;
  currentQuestionIndex: number;
  currentQuestion?: Question;
  answers: Answers;
  isFinished: boolean;
  outcome?: { eligible: boolean; reasonCode?: string } | null;
  setAnswer: (key: string, value: AnswerValue) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
  getPayload: () => { benefit_code: string; facts: Record<string, unknown>; context: { source: string } };
  submit: (opts?: { endpoint?: string }) => Promise<Response>;
};

const WizardContext = createContext<WizardContextType | undefined>(undefined);

const policyCodeMap: Record<string, string> = {
  homeCare: 'TR_HOME_CARE_ALLOWANCE',
  oldAgePension: 'TR_OLD_AGE_PENSION',
  disabilityPension: 'TR_DISABILITY_PENSION',
  birthGrant: 'TR_BIRTH_GRANT',
  gss: 'TR_GSS',
};

function evaluateOp(left: AnswerValue, op: string, right: AnswerValue | undefined): boolean {
  if (op === 'in') {
    if (!Array.isArray(right)) return false;
    return (right as AnswerValue[]).includes(left as unknown as string | number | boolean);
  }

  switch (op) {
    case '>':
      return Number(left) > Number(right);
    case '<':
      return Number(left) < Number(right);
    case '>=':
      return Number(left) >= Number(right);
    case '<=':
      return Number(left) <= Number(right);
    case '===':
      return left === right;
    case '!==':
      return left !== right;
    default:
      return false;
  }
}

export const WizardProvider: React.FC<{
  wizardKey: string;
  children?: React.ReactNode;
  thresholds?: Record<string, string | number | Array<string | number>>;
  apiEndpoint?: string;
}> = ({ wizardKey, children, thresholds = {}, apiEndpoint = '/api/v1/eligibility-check' }) => {
  const config = useMemo<WizardConfig | undefined>(() => {
    // allow both named imports and index mapping
    return (configsIndex as unknown as Record<string, WizardConfig>)[wizardKey] ?? undefined;
  }, [wizardKey]);

  const [answers, setAnswers] = useState<Answers>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);
  const [outcome, setOutcome] = useState<{ eligible: boolean; reasonCode?: string } | null>(null);

  useEffect(() => {
    // reset when config changes — schedule as microtask to avoid synchronous cascading renders
    const t = setTimeout(() => {
      setAnswers(() => ({}));
      setCurrentQuestionIndex(() => 0);
      setIsFinished(() => false);
      setOutcome(() => null);
    }, 0);

    return () => clearTimeout(t);
  }, [config]);

  const questions = config?.questions ?? [];

  const currentQuestion = questions[currentQuestionIndex];

  function setAnswer(key: string, value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function resolveRef(valueRef?: string) {
    if (!valueRef) return undefined;
    return thresholds[valueRef];
  }

  function evaluateShortCircuits(localAnswers: Answers): { matched?: boolean; outcome?: ShortCircuitCondition['outcome'] } {
    if (!config?.shortCircuits) return {};

    for (const sc of config.shortCircuits) {
      const when = sc.when;
      const left = localAnswers[when.key] as AnswerValue | undefined;
      const right = when.valueRef ? resolveRef(when.valueRef) : (when.value as AnswerValue | undefined);

      // if left is undefined, can't evaluate (skip)
      if (left === undefined) continue;

      if (evaluateOp(left, when.op, right)) {
        return { matched: true, outcome: sc.outcome };
      }
    }

    return {};
  }

  function next() {
    // evaluate short-circuit with current answers first
    const sc = evaluateShortCircuits(answers);
    if (sc.matched) {
      setIsFinished(true);
      setOutcome(sc.outcome ?? { eligible: false });
      return;
    }

    const nextIndex = currentQuestionIndex + 1;
    if (!config) return;

    if (nextIndex >= questions.length) {
      setIsFinished(true);
      setOutcome({ eligible: true });
      return;
    }

    setCurrentQuestionIndex(nextIndex);
  }

  function prev() {
    setIsFinished(false);
    setOutcome(null);
    setCurrentQuestionIndex((i) => Math.max(0, i - 1));
  }

  function reset() {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsFinished(false);
    setOutcome(null);
  }

  function getPayload() {
    const policyCode = policyCodeMap[wizardKey] ?? wizardKey;
    const payload = {
      benefit_code: policyCode,
      facts: { ...answers, jurisdiction: 'TR' },
      context: { source: 'web-wizard' },
    };

    return payload;
  }

  async function submit(opts?: { endpoint?: string }) {
    const endpoint = opts?.endpoint ?? apiEndpoint;
    const payload = getPayload();

    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return resp;
  }

  const value: WizardContextType = {
    config,
    currentQuestionIndex,
    currentQuestion,
    answers,
    isFinished,
    outcome,
    setAnswer,
    next,
    prev,
    reset,
    getPayload,
    submit,
  };

  return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>;
};

export function useWizard() {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error('useWizard must be used within WizardProvider');
  return ctx;
}

export default WizardProvider;
