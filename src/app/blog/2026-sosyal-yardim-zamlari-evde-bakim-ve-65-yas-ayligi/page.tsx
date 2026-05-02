import type { Metadata } from &rdquo;next&rdquo;;
import Link from &rdquo;next/link&rdquo;;

export const metadata: Metadata = {
  title: "2026 Sosyal Yardım Zamları Evde Bakım ve 65 Yaş Aylığı",
  description: "2026 yılı sosyal yardım zamları açıklandı. Evde bakım maaşı ve 65 yaş aylığı tutarlarındaki yeni artışlar ve başvuru detayları rehberimizde.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Üst Navigasyon */}
        <nav className="mb-8 flex items-center justify-between">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 font-medium">
            <span>←</span> Rehber Listesine Dön
          </Link>
          <div className="flex gap-3">
            <span className="text-sm text-slate-500">Paylaş:</span>
            <button className="text-blue-600 hover:opacity-80 transition-opacity">WhatsApp</button>
            <button className="text-blue-600 hover:opacity-80 transition-opacity">Facebook</button>
          </div>
        </nav>

        {/* Makale Kartı */}
        <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <header className="mb-10">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Güncel Mevzuat
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                2026 Sosyal Yardım Zamları: Evde Bakım ve 65 Yaş Aylığı Ne Kadar Oldu?
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                2026 yılı sosyal yardım zamları açıklandı. Evde bakım maaşı ve 65 yaş aylığı tutarlarındaki yeni artışlar ve başvuru detayları rehberimizde.
              </p>
            </header>

            <div className="space-y-8 text-slate-800 leading-loose">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">
                  2026 Sosyal Yardım Zamları Belli Oldu: Destek Ödemelerinde %25 Artış!
                </h2>
                <p>
                  Türkiye&rsquo;de sosyal yardım alan milyonlarca vatandaş için sevindirici haber geldi! 2026 yılı için belirlenen sosyal yardım ödemelerinde <strong>%25 oranında büyük bir artışa</strong> gidildi. Bu zamlarla birlikte, özellikle evde bakım maaşı ve 65 yaş aylığı alan vatandaşların yaşam kalitesini artıracak önemli iyileştirmeler yapıldı.
                </p>
              </section>

              <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Evde Bakım Maaşı 2026: Yeni Tutar 12.500 TL!</h3>
                <p className="mb-4">
                  Engelli ve yaşlı bireylerin evde bakımı için ailelerine verilen <strong>Evde Bakım Maaşı</strong>, yapılan %25&rsquo;lik artışla birlikte 2026 yılında tam <strong>12.500 TL&rsquo;ye</strong> yükseltildi.
                </p>
                <div className="bg-white p-4 rounded-lg text-sm italic border border-blue-100">
                  <strong>Nedir?</strong> Ağır engelli raporu olan ve başkasının bakımına muhtaç kişilerin ailelerine sağlanan bir sosyal yardımdır.
                </div>
              </section>

              <section className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">65 Yaş Aylığı 2026: Yeni Tutar 6.000 TL!</h3>
                <p className="mb-4">
                  Sosyal güvencesi olmayan 65 yaş üstü vatandaşlara yönelik sağlanan <strong>65 Yaş Aylığı</strong>, 2026 yılı itibarıyla <strong>6.000 TL</strong> olarak belirlendi.
                </p>
                <div className="bg-white p-4 rounded-lg text-sm italic border border-emerald-100">
                  <strong>Nedir?</strong> Sosyal güvencesi olmayan ve gelir kriterini sağlayan 65 yaş üstü vatandaşlara ödenen maaştır.
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Başvurular e-Devlet Üzerinden Devam Ediyor!</h2>
                <p className="mb-4 text-slate-600">Başvuru adımlarını takip ederek işlemlerinizi hızlandırabilirsiniz:</p>
                <ul className="space-y-3 list-decimal list-inside bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <li><strong>e-Devlet Girişi:</strong> T.C. kimlik numaranızla giriş yapın.</li>
                  <li><strong>Hizmet Arama:</strong> &lsquo;Sosyal yardım başvurusu&rsquo; anahtar kelimesini kullanın.</li>
                  <li><strong>Form Doldurma:</strong> Bilgilerinizi eksiksiz ve doğru girin.</li>
                  <li><strong>Belge Yükleme:</strong> Gerekli raporları sisteme yükleyin.</li>
                  <li><strong>Onay:</strong> Başvurunuzu tamamlayıp takip numaranızı alın.</li>
                </ul>
              </section>

              <section className="border-t pt-8">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h4>
                <div className="space-y-4">
                  <details className="group border border-slate-200 rounded-lg p-4 cursor-pointer">
                    <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                      Zamlar ne zamandan itibaren geçerli?
                      <span className="group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-3 text-slate-600">Bu artışlar 2026 yılı Ocak ayı itibarıyla geçerli olacaktır.</p>
                  </details>
                  <details className="group border border-slate-200 rounded-lg p-4 cursor-pointer">
                    <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                      Vefat durumunda maaş kesilir mi?
                      <span className="group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-3 text-slate-600">Evet, hak sahibinin vefatı durumunda en kısa sürede bildirim yapılmalı ve maaş durdurulmalıdır.</p>
                  </details>
                </div>
              </section>
            </div>
          </div>
          
          <footer className="bg-slate-50 border-t border-slate-200 p-8 text-center">
            <p className="text-slate-500 text-sm mb-4">
              Bu içerik bilgilendirme amaçlıdır. Kesin sonuçlar için resmi kurumlara başvurunuz.
            </p>
            <Link href="/blog" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Tüm Rehberleri Gör
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
}
