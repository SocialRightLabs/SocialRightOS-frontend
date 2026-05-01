export type StartChecklistItem = {
  title: string;
  body: string;
};

export type StartContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  checklistHeading: string;
  checklist: StartChecklistItem[];
  durationHeading: string;
  durationBody: string[];
  disclaimerHeading: string;
  disclaimerBody: string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export const homeCareStartContent: StartContent = {
  eyebrow: "Başlangıç",
  title: "Evde bakım maaşı başvuru öncesi kısa kontrol",
  subtitle:
    "Birkaç temel bilgiyle sonucu, kısa gerekçeleri ve sonraki adımı görebilirsiniz.",
  checklistHeading: "Hazır tutmanız iyi olur",
  checklist: [
    {
      title: "Hane bilgisi",
      body: "Evde kimlerin yaşadığını ve toplam kişi sayısını netleştirin.",
    },
    {
      title: "Gelir özeti",
      body: "Yaklaşık hane gelir kaynaklarını ve aylık toplamı not edin.",
    },
    {
      title: "Bakım ihtiyacı",
      body: "Tam bağımlı bakım ihtiyacını yüksek seviyede nasıl tarif edeceğinizi düşünün.",
    },
  ],
  durationHeading: "Bu akış ne kadar sürer?",
  durationBody: [
    "Genelde 3–6 dakika sürer.",
    "Tahmini bilgilerle başlayabilirsiniz; resmî inceleme için belge gerekebilir.",
  ],
  disclaimerHeading: "Önemli not",
  disclaimerBody: [
    "Bu araç resmî karar vermez.",
    "Girdiğiniz bilgilere dayalı ön bakış ve yönlendirme sunar.",
  ],
  primaryHref: "/evde-bakim-maasi/hesaplama",
  primaryLabel: "Kontrole başla",
  secondaryHref: "/methodology",
  secondaryLabel: "Nasıl çalıştığını gör",
};
