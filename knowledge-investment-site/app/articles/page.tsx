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
      {/* Back Button */}
   <a 
  href="/"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition mb-12"
>
  ← Back Home
</a>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-3 gap-10 mt-8">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition duration-300"
          >
            {/* Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded-2xl mb-8"
            />

            {/* Title */}
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              {article.title}
            </h2>

            {/* Description */}
            <p className="text-zinc-300 text-lg mb-8 leading-8">
              {article.description}
            </p>

            {/* Button */}
            <a
              href={`/articles/${article.slug}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
            >
              Read Article →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
