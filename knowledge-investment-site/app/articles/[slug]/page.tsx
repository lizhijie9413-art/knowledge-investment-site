import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

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
        <Link href="/articles" className="text-amber-400">
          ← Back to Articles
        </Link>

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

