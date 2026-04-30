export type QuestionType = 'number' | 'boolean' | 'select' | 'date' | 'currency' | 'text';

export type Option = { value: string; label: string };

export type Question = {
  key: string;
  label: string;
  type: QuestionType;
  options?: Option[];
};

export type ShortCircuitCondition = {
  when: { key: string; op: '>' | '<' | '>=' | '<=' | '===' | '!==' | 'in'; value?: string | number | boolean | Array<string | number>; valueRef?: string };
  outcome: { eligible: boolean; reasonCode?: string };
};

export type WizardConfig = {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
  shortCircuits?: ShortCircuitCondition[];
};

export default {} as WizardConfig;
