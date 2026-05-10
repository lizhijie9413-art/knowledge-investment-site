"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
export default function ArticlesPage() {

  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    const { data } = await supabase
      .from("articles")
      .select("*");
     

    if (data) {
      setArticles(data);
    }
  }
  return (
    <div className="min-h-screen bg-[#070707] text-white px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-5xl font-bold text-amber-400">
          Articles
        </h1>

        <p className="mt-6 text-lg text-white/70">
          Investment knowledge, Bitcoin insights, and long-term wealth strategies.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
  {articles.map((article, index) => (
    <div
      key={index}
      className="rounded-3xl border border-white/10 bg-white/5 p-8"
    >
      <img
        src={article.image}
        alt={article.title}
        className="h-48 w-full object-cover rounded-2xl"
      />

      <h2 className="mt-6 text-3xl font-bold">
        {article.title}
      </h2>

      <p className="mt-4 text-white/70">
        {article.desc}
      </p>

      <a
        href={`/articles/${article.slug}`}
        className="mt-6 inline-block text-amber-400"
      >
        Read article →
      </a>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
