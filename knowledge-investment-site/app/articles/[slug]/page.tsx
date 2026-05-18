const articleContent: any = {
  "future-of-ai": {
    title: "The Future of Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/G2fqAlgmoPo",
    content: `
Artificial intelligence is rapidly transforming the world.

From healthcare and automation to robotics and intelligent systems,
AI is becoming one of the most powerful technologies in human history.

Companies worldwide are investing billions into AI infrastructure,
large language models, and next-generation computing power.

The next decade may completely reshape how humans work, create,
communicate, and innovate.
`,
  },

  "ai-productivity": {
    title: "AI Productivity Revolution",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1400&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/SVcsDDABEkM",
    content: `
AI productivity tools are changing modern work.

Writers, designers, developers, and businesses can now automate
many repetitive tasks using artificial intelligence.

AI assistants improve efficiency, creativity, and digital workflows.

This revolution is only beginning.
`,
  },

  "ai-next-decade": {
    title: "Why AI Will Dominate The Next Decade",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/2ePf9rue1Ao",
    content: `
AI may become the defining technology of the next decade.

From autonomous systems to intelligent robotics and advanced computing,
AI infrastructure is expanding rapidly worldwide.

Many experts believe AI could become as important as the internet itself.
`,
  },
};

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articleContent[params.slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center text-6xl font-bold">
        Article Not Found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO IMAGE */}
      <div className="w-full h-[500px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <a
          href="/articles"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition mb-12"
        >
          ← Back Articles
        </a>

        <h1 className="text-6xl font-bold leading-tight mb-10">
          {article.title}
        </h1>

        <p className="text-zinc-300 text-2xl leading-10 whitespace-pre-line mb-16">
          {article.content}
        </p>

        {/* VIDEO */}
        <div className="rounded-3xl overflow-hidden border border-zinc-800">
          <iframe
            width="100%"
            height="600"
            src={article.video}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
