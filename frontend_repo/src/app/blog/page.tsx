
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sosyal Hak Rehber Kütüphanesi",
  description: "Güncel sosyal haklar, mevzuat değişiklikleri ve başvuru rehberleri.",
};

const posts = [
  {
    "slug": "vatandaslik-maasi-2026-kimler-yararlanacak-basvuru-sartlari-ve-tutarlar-belli-oldu",
    "title": "Vatandaşlık Maaşı 2026: Kimler Yararlanacak? Başvuru Şartları ve Tutarlar Belli Oldu!",
    "summary": "Cumhurbaşkanı Yardımcısı Cevdet Yılmaz'ın duyurduğu Vatandaşlık Maaşı için başvuru şartları ve ödenecek tutarlar netleşiyor. Kimler, ne zaman ve nasıl başvuracak? İşte 2026'da başlayacak yeni sosyal yardım modelinin tüm detayları!",
    "category": "Rehber",
    "date": "2026-05-02"
  },
  {
    "slug": "sed-yardimi-2026-guncel-tutarlari-aciklandi-cocugunuz-i̇cin-9723-tl-destek-nasil-alinir",
    "title": "SED Yardımı 2026 Güncel Tutarları Açıklandı: Çocuğunuz İçin 9.723 TL Destek Nasıl Alınır?",
    "summary": "2026 SED yardımı güncel tutarları belli oldu! Çocuk başına ortalama 9.723 TL destek. Kimler faydalanabilir, başvuru şartları nelerdir? Detaylı rehberimizle öğrenin.",
    "category": "Rehber",
    "date": "2026-05-02"
  },
  {
    "slug": "2026-sosyal-yardim-zamlari-evde-bakim-ve-65-yas-ayligi",
    "title": "2026 Sosyal Yardım Zamları: Evde Bakım ve 65 Yaş Aylığı",
    "summary": "2026 yılı sosyal yardım zamları açıklandı. Yeni tutarlar ve başvuru detayları.",
    "category": "Mevzuat",
    "date": "2026-02-12"
  }
];

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Rehber Kütüphanesi</h1>
          <p className="text-lg text-slate-600">Sosyal haklarınızla ilgili en güncel bilgilere ve başvuru rehberlerine buradan ulaşabilirsiniz.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <time className="text-sm text-slate-400">{post.date}</time>
                </div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-6 flex-grow">
                  {post.summary}
                </p>
                <div className="text-blue-600 font-medium flex items-center gap-2">
                  Rehberi Oku <span>→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
