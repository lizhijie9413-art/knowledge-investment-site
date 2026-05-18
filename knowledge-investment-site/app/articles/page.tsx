const articles = [
  {
    title: "The Future of Artificial Intelligence",
    description:
      "Explore how AI is transforming industries, productivity, and the future of humanity.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    slug: "future-of-ai",
  },
  {
    title: "AI Productivity Revolution",
    description:
      "Discover how AI tools are changing work, automation, and digital creation worldwide.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    slug: "ai-productivity",
  },
  {
    title: "Why AI Will Dominate The Next Decade",
    description:
      "Understand the long-term growth potential of AI infrastructure and intelligent systems.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    slug: "ai-next-decade",
  },
];
export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <a href="/" className="text-blue-400 text-xl">
  ← Back Home
</a>

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded-2xl mb-8"
            />

            <h2 className="text-4xl font-bold mb-6">
              {article.title}
            </h2>

            <p className="text-zinc-300 text-lg mb-8">
              {article.description}
            </p>

           <a href={`/articles/${article.slug}`} className="text-blue-400 text-xl">
  Read article →
</a>
          </div>
        ))}
      </div>
    </main>
  );
}
