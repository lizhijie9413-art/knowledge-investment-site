export default function ArticlesPage() {
  const articles = [
    {
      title: "Why Long-Term Investing Wins",
      desc: "Learn why patience and compound growth outperform short-term trading.",
    },
    {
      title: "Bitcoin and Financial Freedom",
      desc: "Understanding Bitcoin as a long-term digital asset.",
    },
    {
      title: "Simple Fund Portfolio Guide",
      desc: "A beginner-friendly strategy for building wealth steadily.",
    },
  ];

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
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition"
            >
              <h2 className="text-2xl font-semibold text-white">
                {article.title}
              </h2>

              <p className="mt-4 text-white/70 leading-7">
                {article.desc}
              </p>

              <button className="mt-8 rounded-full bg-amber-400 px-6 py-3 text-black font-medium hover:bg-amber-300">
                Read Article
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
