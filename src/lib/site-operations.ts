export type WorkStreamKey = "frontend" | "backend" | "admin";

export type WorkStream = {
  key: WorkStreamKey;
  title: string;
  summary: string;
  responsibilities: string[];
  output: string;
};

export const siteOperations: {
  mission: string;
  vision: string;
  trafficModel: string[];
  publishingRules: string[];
  workStreams: WorkStream[];
} = {
  mission:
    "Sosyal hak bilgisini sade, güven veren ve kolay anlaşılır bir rehber deneyimine dönüştürmek.",
  vision:
    "Sosyal hak rehberini tekil içerik değil, kullanıcıyı doğru adıma taşıyan güvenilir bir yol gösterici haline getirmek.",
  trafficModel: [
    "Aranan konuları net, kısa ve doğrudan sayfalara dönüştürürüz.",
    "Kullanıcıya ilk ekranda açıklık, güven ve sonraki adım veririz.",
    "Tekrarlanan soruları azaltarak akışı sadeleştiririz.",
  ],
  publishingRules: [
    "Her sayfa tek bir soruya net cevap vermeli.",
    "İlk bölüm kısa cevap, ikinci bölüm açıklama, son bölüm yönlendirme olmalı.",
    "Aşırı iddia yok; kaynak, gerekçe ve sınır açık olmalı.",
    "Yeni konu, kontrollü ve tekrar kullanılabilir bir içerik bileşeni olmalı.",
  ],
  workStreams: [
    {
      key: "frontend",
      title: "Görünür yüz",
      summary: "Ziyaretçinin ilk gördüğü deneyim, okunabilirlik ve rehber akışı.",
      responsibilities: [
        "Ana sayfa, rehber sayfaları ve sonuç ekranlarının sade tasarımı",
        "Okunabilirlik, erişilebilirlik ve net başlık standardı",
        "Hızlı yönlendirme, güven notu ve aksiyon butonları",
      ],
      output: "Okunaklı, net ve güven veren kullanıcı yüzeyi",
    },
    {
      key: "backend",
      title: "Sonuç akışı",
      summary: "Karar mantığı, veri doğrulama ve sonuç güveni.",
      responsibilities: [
        "Hak kuralları, veri şemaları ve karar açıklaması",
        "Yapısal veri saklama ve doğrulama kayıtları",
        "Tekrarlanabilir ve test edilebilir üretim akışı",
      ],
      output: "Tutarlı ve denetlenebilir sonuç altyapısı",
    },
    {
      key: "admin",
      title: "Yayın paneli",
      summary: "İçerik paylaşımı, sayfa düzeni ve onay kontrolü.",
      responsibilities: [
        "İçerik taslağı oluşturma ve düzenleme",
        "Sayfa düzeni, CTA ve trust notu güncelleme",
        "Yayın öncesi onay ve içerik kuyruğu yönetimi",
      ],
      output: "Kontrollü ve sürdürülebilir içerik yönetimi",
    },
  ],
};
