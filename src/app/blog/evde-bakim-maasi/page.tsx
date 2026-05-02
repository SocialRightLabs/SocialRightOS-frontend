import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evde Bakım Maaşı Ana Rehberi",
  description: "Evde bakım maaşı şartları, başvuru süreci ve gerekli belgeler hakkında kapsamlı rehber.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="mb-8 flex items-center justify-between">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 font-medium">
            <span>←</span> Rehber Listesine Dön
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Evde Bakım Maaşı Ana Rehberi</h1>
          <div className="prose lg:prose-xl text-slate-800 space-y-6">
            <p>Evde bakım maaşı, ağır engelli bireylerin bakımını üstlenen yakınlarına verilen bir sosyal destektir. Bu rehberde başvuru şartlarını ve sürecini bulabilirsiniz.</p>
            <h2 className="text-2xl font-bold mt-8">Başvuru Şartları</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Ağır engelli ibareli sağlık raporu</li>
              <li>Hane halkı gelir kriterine uygunluk</li>
              <li>Bakıma muhtaçlık tespiti</li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
}
