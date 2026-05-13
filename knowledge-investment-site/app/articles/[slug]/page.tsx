import { supabase } from "@/lib/supabase";

export default async function ArticlePage({ params }: any) {
  const slug = params.slug;

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Article Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <a
          href="/articles"
          className="text-amber-400"
        >
          ← Back to Articles
        </a>

    
        <h1 className="mt-8 text-5xl font-bold text-amber-400">
  {article.title}
</h1>

<div className="mt-10 text-lg leading-9 text-white/80 whitespace-pre-wrap">
  {article.content}
</div>
        <img
          src={article.image}
          alt={article.title}
          className="mt-10 w-full rounded-3xl"
        />

      </div>
    </div>
  );
}

