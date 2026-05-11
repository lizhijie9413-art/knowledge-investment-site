import { supabase } from "@/lib/supabase";

export default async function ArticlePage({ params }: any) {
  const { slug } = await params;

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Article Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <a href="/articles" className="text-amber-400">
          ← Back to Articles
        </a>

        <h1 className="mt-8 text-5xl font-bold text-amber-400">
          {article.title}
        </h1>

        <img
          src={article.image}
          alt={article.title}
          className="mt-10 w-full rounded-3xl"
        />

        <div className="mt-10 whitespace-pre-wrap text-xl leading-9 text-white/80">
          {article.content}
        </div>
      </div>
    </div>
  );
}
