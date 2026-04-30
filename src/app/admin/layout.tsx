import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin",
  description: "İç yönetim, içerik taslağı, onay ve yayın akışı.",
  robots: {
    index: false,
    follow: false,
  },
};

const sections = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/studio", label: "Studio" },
  { href: "/admin/content", label: "Content Registry" },
  { href: "/admin/analytics", label: "Analytics Registry" },
  { href: "/admin/approval", label: "Approval Queue" },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="panel-strong">
          <p className="section-label">Internal</p>
          <div className="section-header mt-4">
            <div>
              <h1 className="section-heading text-[clamp(2rem,3vw,3.2rem)]">
                Sosyal Hak Rehberi Admin
              </h1>
              <p className="section-copy mt-3 max-w-3xl">
                İçerik taslağı, sayfa düzeni, yayın onayı ve analitik kaydının toplandığı yönetim
                yüzeyi.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {sections.map((section) => (
                <Link key={section.href} href={section.href} className="secondary-link compact-link">
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {children}
      </div>
    </main>
  );
}
