export type MethodologySection = {
  title: string;
  body: string[];
};

export type MethodologyLink = {
  href: string;
  label: string;
};

export type MethodologyContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: MethodologySection[];
  links: MethodologyLink[];
  disclaimer: string;
};

export const homeCareMethodologyContent: MethodologyContent = {
  eyebrow: "Yöntem ve Sınırlar",
  title: "Evde bakım maaşı ön değerlendirmesi nasıl çalışır?",
  subtitle:
    "Bu sayfa aracın ne yaptığını, neyi yapmadığını ve sonucun neden ön değerlendirme niteliğinde olduğunu açıklar.",
  sections: [
    {
      title: "Bu sayfa ne yapar?",
      body: [
        "Hesaplama akışında girdiğiniz temel gelir, hane ve bakım ihtiyacı bilgilerini toplar.",
        "Sonucu ve açıklama alanlarını arka plandaki kontrol akışından alır.",
        "Durum, gerekçeler ve eksik bilgileri ekranda anlaşılır biçimde sunar.",
      ],
    },
    {
      title: "Bu sayfa neyi yapmaz?",
      body: [
        "Resmî kayıtları doğrudan göremez.",
        "Belge doğrulaması yapmaz.",
        "Girilmeyen veya eksik bırakılan bilgileri kendisi tamamlamaz.",
      ],
    },
    {
      title: "Neden ön değerlendirme?",
      body: [
        "Nihai uygunluk kararı ilgili kurumun belge incelemesi ve güncel uygulamasıyla verilir.",
        "Gelir, hane yapısı veya bakım ihtiyacı değişirse sonuç da değişebilir.",
      ],
    },
    {
      title: "Sonuçlar nereden gelir?",
      body: [
        "Kurallar ve açıklamalar arka planda oluşturulur.",
        "Ekran, bu çıktıyı kullanıcı dostu bir biçimde gösterir; hesabı kendi başına yapmaz.",
      ],
    },
  ],
  links: [
    {
      href: "/evde-bakim-maasi/hesaplama",
      label: "Hesaplama aracına dön",
    },
    {
      href: "/evde-bakim-maasi",
      label: "Evde bakım maaşı rehberini aç",
    },
  ],
  disclaimer:
    "Bu araç resmî karar vermez. Sonuçlar ön değerlendirme niteliğindedir ve mutlaka resmî kanallardan doğrulanmalıdır.",
};
