import React, { useState } from "react";
import AccessibleButton from "./AccessibleButton";

export type WizardQuestion = {
  id: string | number;
  text: string;
  type?: "text" | "boolean";
};

export interface WizardEngineProps {
  questions?: WizardQuestion[];
}

const DEFAULT_QUESTIONS: WizardQuestion[] = [
  { id: 1, text: "What is your full name?", type: "text" },
  { id: 2, text: "How many people live in your household?", type: "text" },
  { id: 3, text: "Do you need home care support?", type: "boolean" },
];

function speakText(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "tr-TR";
    utter.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  } catch {
    // ignore
  }
}

export default function WizardEngine({ questions = DEFAULT_QUESTIONS }: WizardEngineProps) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number | string, string>>({});

  const goNext = () => setIndex((i) => Math.min(questions.length - 1, i + 1));
  const goBack = () => setIndex((i) => Math.max(0, i - 1));

  const onChange = (key: number | string, value: string) => {
    setAnswers((s) => ({ ...s, [key]: value }));
  };

  return (
    <section aria-roledescription="wizard" className="max-w-2xl mx-auto">
      <div className="relative min-h-28">
        {questions.map((q, i) => (
          <div
            key={q.id}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity transition-transform duration-300 ${
              i === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
            }`}
          >
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium mb-3">{q.text}</h3>
                <AccessibleButton
                  onClick={() => speakText(q.text)}
                  variant="turquoise"
                  aria-label={`Soruyu seslendir: ${q.text}`}
                >
                  🔊 Soruyu Seslendir
                </AccessibleButton>
              </div>

              {q.type === "boolean" ? (
                <div className="flex gap-3 mt-4">
                  <AccessibleButton
                    onClick={() => onChange(q.id, "yes")}
                    variant={answers[q.id] === "yes" ? "turquoise" : "orange"}
                  >
                    Evet
                  </AccessibleButton>
                  <AccessibleButton
                    onClick={() => onChange(q.id, "no")}
                    variant={answers[q.id] === "no" ? "turquoise" : "orange"}
                  >
                    Hayır
                  </AccessibleButton>
                </div>
              ) : (
                <input
                  type="text"
                  value={answers[q.id] ?? ""}
                  onChange={(e) => onChange(q.id, e.target.value)}
                  className="w-full p-3 border rounded-md mt-3"
                  aria-label={q.text}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-3 items-center">
        <AccessibleButton onClick={goBack} disabled={index === 0} variant="turquoise">
          Geri
        </AccessibleButton>
        <AccessibleButton onClick={goNext} variant="orange">
          {index === questions.length - 1 ? "Bitir" : "İleri"}
        </AccessibleButton>
        <div className="ml-auto text-sm text-gray-600">Adım {index + 1} / {questions.length}</div>
      </div>
    </section>
  );
}
