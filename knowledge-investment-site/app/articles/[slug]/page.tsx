import { articles } from "@/lib/articles";

export default async function ArticlePage({ params }: any) {

  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );
  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Article Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white px-6 py-20">
      <div className="mx-auto max-w-4xl">

        <a
          href="/articles"
          className="text-amber-400 hover:text-amber-300"
        >
          ← Back to Articles
        </a>

        <h1 className="mt-8 text-5xl font-bold text-amber-400">
          {article.title}
        </h1>

        <p className="mt-10 text-xl leading-9 text-white/80">
          {article.content}
        </p>

      </div>
    </div>
  );
}
