import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">Article Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
<a
  href="https://knowledge-investment-site.vercel.app/articles"
  className="text-amber-400 inline-block mb-6 hover:text-yellow-300 transition cursor-pointer relative z-50"
>
  ← Back to Articles
</a>

        <h1 className="mt-8 text-5xl font-bold text-amber-400">
          {article.title}
        </h1>

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="mt-10 w-full rounded-3xl"
          />
        )}

        <div className="mt-10 whitespace-pre-wrap text-xl leading-9 text-white/80">
          {article.content}
        </div>
      </div>
    </main>
  );
}

