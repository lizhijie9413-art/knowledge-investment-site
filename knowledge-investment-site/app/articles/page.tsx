"use client";
import { supabase } from "@/lib/supabase";

export default async function ArticlesPage() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("id", { ascending: false });

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles?.map((article) => (
          <a
            key={article.id}
            href={`/articles/${article.slug}`}
            className="rounded-3xl border border-white/10 bg-[#111] p-6"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full rounded-2xl"
            />

            <h2 className="mt-6 text-4xl font-bold">
              {article.title}
            </h2>

            <p className="mt-4 text-white/70">
              {article.desc}
            </p>

            <div className="mt-6 text-yellow-400">
              Read article →
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
