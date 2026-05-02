import sys
import os

def add_post(title, summary, content_file):
    # Bu script, statik bir site olduğu için manuel olarak bir sayfa oluşturur
    slug = title.lower().replace(" ", "-").replace("ç", "c").replace("ğ", "g").replace("ı", "i").replace("ö", "o").replace("ş", "s").replace("ü", "u").replace("?", "").replace("!", "").replace(":", "").replace(".", "")
    
    post_dir = f"frontend_repo/src/app/blog/{slug}"
    os.makedirs(post_dir, exist_ok=True)
    
    with open(content_file, 'r') as f:
        content = f.read()

    page_content = f"""
import type {{ Metadata }} from "next";
import Link from "next/link";

export const metadata: Metadata = {{
  title: "{title}",
  description: "{summary}",
}};

export default function Page() {{
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>{title}</h1>
        <div className="mt-8 text-slate-700 leading-relaxed">
          {content}
        </div>
        <div className="mt-12">
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Blog listesine dön
          </Link>
        </div>
      </article>
    </main>
  );
}}
"""
    with open(f"{post_dir}/page.tsx", 'w') as f:
        f.write(page_content)
    
    print(f"Blog yazısı oluşturuldu: /blog/{slug}")

if __name__ == "__main__":
    if len(sys.argv) > 3:
        add_post(sys.argv[1], sys.argv[2], sys.argv[3])
