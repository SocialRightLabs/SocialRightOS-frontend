import type { Metadata } from "next";
import Link from "next/link";
import {
  homepageChooseItems,
  homepageGuideLinks,
  homepageHero,
  homepageTrustNotes,
} from "@/lib/homepage-entry-content";
import { siteProfile } from "@/lib/site-profile";

export const metadata: Metadata = {
  title: "Dijital Sosyal Hak Rehberi",
  description:
    "Sosyal hak testleri, rehberler ve sonraki adım yönlendirmeleri için sade, güven veren ve editoryal bir başlangıç sayfası.",
  alternates: {
    canonical: "/",
  },
};

const heroStats = [
  {
    label: "Canlı akış",
    value: "Evde bakım",
    detail: "Ana ön değerlendirme yüzeyi doğrudan rehber deneyimine açılır.",
  },
  {
    label: "Rehber yaklaşımı",
    value: "Sade dil",
    detail: "Karmaşık mevzuatı anlaşılır ön değerlendirme diline çevirir.",
  },
  {
    label: "Güven ilkesi",
    value: "Az veri",
    detail: "Gereksiz kişisel veri istemeden yol gösterir.",
  },
];

const trustCards = [
  {
    title: "Ne yapar?",
    body:
      "Ziyaretçiyi ilgili uygunluk testine taşır, sonucu sadeleştirir ve başvuruya giden yolu netleştirir.",
  },
  {
    title: "Ne yapmaz?",
    body:
      "Resmî karar vermez, kurumsal yerini almaz ve kullanıcıyı gereksiz veri toplamaya zorlamaz.",
  },
  {
    title: "Neden farklı?",
    body:
      "Yalnızca bir form değil; içerik, yönlendirme ve güven katmanını birlikte çalışan bir rehberdir.",
  },
];

const liveExperienceCards = [
  {
    title: "Karar motoru",
    body:
      "Değerlendirme, kanonik uygunluk sözleşmesine göre çalışır. Sonuçlar açıklanabilir şekilde ELIGIBLE, NOT_ELIGIBLE veya NEEDS_INFO olarak sunulur.",
  },
  {
    title: "Kapsam",
    body:
      "Canlı öncelikli akış evde bakım yönünden başlar; GSS, 65 yaş aylığı ve doğum yardımı için de doğrudan girişler korunur.",
  },
  {
    title: "Veri minimizasyonu",
    body:
      "Kimlik numarası, açık adres ve belge yükleme istemeden yalnızca ön değerlendirme için gerekli bilgiler alınır.",
  },
];

const servicePillars = [
  {
    title: "Engelli hakları rehberliği",
    body:
      "Haklara erişimi sadeleştiren, mevzuat temelli ve açıklamalı yönlendirme yaklaşımı.",
  },
  {
    title: "Sosyal yardım başvuru desteği",
    body:
      "Başvuru adımlarını anlaşılır hale getirir, eksik bilgiyi önceden görünür kılar.",
  },
  {
    title: "Mevzuat ve yöntem şeffaflığı",
    body:
      "Sonuçların sınırlarını, dayanaklarını ve rehber niteliğini açıkça anlatır.",
  },
];

const whatsappChannel = siteProfile.contactChannels.find((channel) => channel.kind === "whatsapp");

export default function Home() {
  return (
    <main className="min-h-screen pb-12">
      <section className="hero-shell">
        <div className="hero-grid">
          <article className="hero-copy">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="hero-kicker">Dijital Sosyal Hak Rehberi</p>
                <h1 className="hero-title max-w-3xl text-[clamp(2.9rem,5vw,5.8rem)] text-slate-950">
                  {homepageHero.title}
                </h1>
                <p className="hero-lead max-w-2xl">
                  {homepageHero.body} {siteProfile.mission}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/start" className="primary-link">
                  Evde bakım testini başlat
                </Link>
                <Link href="/hakkimizda" className="secondary-link">
                  Rehberin vizyonunu gör
                </Link>
              </div>
            </div>

            <div className="hero-note-grid mt-10">
              {trustCards.map((card) => (
                <article key={card.title} className="hero-note">
                  <p className="hero-note-title">{card.title}</p>
                  <p className="hero-note-body">{card.body}</p>
                </article>
              ))}
            </div>
          </article>

          <aside className="hero-aside">
            <div className="panel-soft">
              <span className="status-pill">Canlı değerlendirme ve rehberlik yüzeyi</span>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Sitede önce doğru yönlendirme, sonra sade açıklama gelir. Bu yapı sosyal hak
                bilgisini tek bakışta kullanılabilir hale getirmek için kuruldu.
              </p>
            </div>

            <div className="metric-grid mt-4">
              {heroStats.map((stat) => (
                <article key={stat.label} className="metric-card">
                  <p className="metric-label">{stat.label}</p>
                  <p className="metric-value">{stat.value}</p>
                  <p className="metric-small">{stat.detail}</p>
                </article>
              ))}
            </div>

            <div className="panel mt-4">
              <p className="section-label">Bu sayfada ne var?</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <p>Canlı ön değerlendirme girişleri</p>
                <p>Ön değerlendirme ve rehber açıklaması</p>
                <p>Sonraki adım için güvenli yönlendirme</p>
              </div>
            </div>

            <div className="panel mt-4">
              <p className="section-label">Güven çerçevesi</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                {homepageTrustNotes.map((note) => (
                  <p key={note} className="rounded-2xl bg-white/70 px-4 py-3">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="canli-rehberlik" className="section-shell">
        <div className="panel-strong">
          <div className="section-header">
            <div>
              <p className="section-label">Canlı değerlendirme</p>
              <h2 className="section-heading mt-3">
                Ön değerlendirme, şeffaflık ve yönlendirme aynı yüzeyde birleşir
              </h2>
            </div>
            <p className="section-copy max-w-2xl">
              Canlı sitedeki yaklaşım doğrultusunda kullanıcı önce birkaç temel bilgi verir,
              sonra açıklamalı sonuç görür ve gerekirse rehberlik talebine yönelir. Bu sayfa da
              aynı mantığı giriş seviyesinde görünür kılar.
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {liveExperienceCards.map((card) => (
              <article key={card.title} className="tool-card">
                <p className="status-pill">Şeffaf katman</p>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="primary-link">
              Canlı ön değerlendirmeye git
            </Link>
            {whatsappChannel ? (
              <Link href={whatsappChannel.href} className="secondary-link">
                Uzman desteği iste
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section id="durumunu-sec" className="section-shell">
        <div className="panel-strong">
          <div className="section-header">
            <div>
              <p className="section-label">Değerlendirme alanları</p>
              <h2 className="section-heading mt-3">
                En ilgili uygunluk testine tek adımda girin
              </h2>
            </div>
            <p className="section-copy max-w-2xl">
              Hangi başlık size daha yakınsa oradan başlayın. Her kart sizi doğrudan ilgili ön
              değerlendirme veya rehber yüzeyine taşır.
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {homepageChooseItems.map((item) => (
              <article key={item.title} className="tool-card">
                <p className="status-pill">Hızlı giriş</p>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.body}</p>
                <Link href={item.href} className="secondary-link mt-5 inline-flex">
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="guven-ve-rehberler" className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="panel-strong">
            <p className="section-label">Mevzuat ve şeffaflık</p>
            <h2 className="section-heading mt-3 text-[2rem]">Ne sağlarız, ne sağlamayız?</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              {homepageTrustNotes.map((note) => (
                <p key={note} className="rounded-2xl bg-white/70 px-4 py-3">
                  {note}
                </p>
              ))}
            </div>
          </aside>

          <article className="panel-strong">
            <p className="section-label">Hak bilgilendirme modülleri</p>
            <h2 className="section-heading mt-3 text-[2rem]">
              Testten önce veya sonra açılabilecek temel rehberler
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {homepageGuideLinks.map((guide) => (
                <article key={guide.href} className="panel-soft">
                  <h3 className="text-lg font-semibold text-slate-950">{guide.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{guide.body}</p>
                  <Link href={guide.href} className="secondary-link mt-4 inline-flex">
                    Rehberi aç
                  </Link>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="proje-bilgisi" className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article className="panel-strong">
            <p className="section-label">Danışmanlık yaklaşımı</p>
            <h2 className="section-heading mt-3 text-[2rem]">
              Bu yüzey, sosyal hizmet odaklı bir dijital rehberlik projesidir
            </h2>
            <p className="section-copy mt-4">
              {siteProfile.trustPoints[0]} {siteProfile.professionalSummary}
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {servicePillars.map((pillar) => (
                <article key={pillar.title} className="panel-soft text-sm leading-7 text-slate-700">
                  <p className="font-semibold text-slate-950">{pillar.title}</p>
                  <p className="mt-2">{pillar.body}</p>
                </article>
              ))}
            </div>
          </article>

          <aside className="panel-strong">
            <p className="section-label">Hızlı bağlantılar</p>
            <h2 className="section-heading mt-3 text-[2rem]">Daha fazla bilgi</h2>
            <div className="mt-5 flex flex-col gap-3">
              <Link href="/hakkimizda" className="secondary-link">
                Hakkımızda sayfasını aç
              </Link>
              <Link href="/blog" className="secondary-link">
                Blog ve rehberleri gör
              </Link>
              <Link href="/methodology" className="secondary-link">
                Yöntem ve sınırları oku
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

