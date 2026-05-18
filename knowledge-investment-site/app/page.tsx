"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Bitcoin,
  Cpu,
  BookOpen,
} from "lucide-react";

export default function HomePage() {
  const categories = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Revolution",
      desc: "Explore how artificial intelligence is reshaping the future of humanity and industries.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Productivity",
      desc: "Discover how AI tools create leverage and productivity for ordinary people.",
    },
    {
      icon: <Bitcoin className="h-8 w-8" />,
      title: "Digital Assets",
      desc: "Understand Bitcoin, blockchain, and the future financial system.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Future Wealth",
      desc: "Long-term thinking about capital, technology, and wealth creation.",
    },
  ];

  const articles = [
    "Why AI Will Change Human Civilization",
    "The Future Relationship Between AI and Bitcoin",
    "How AI Productivity Creates New Wealth",
    "Why Long-Term Thinkers Win in the AI Era",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between mb-24">
          <h1 className="text-2xl font-bold text-amber-400">
            Future Intelligence Capital
          </h1>

          <div className="flex gap-6 text-sm text-white/70">
            <Link href="/articles" className="hover:text-amber-400">
              Articles
            </Link>

            <Link href="/about" className="hover:text-amber-400">
              About
            </Link>

            <Link href="/admin" className="hover:text-amber-400">
              Admin
            </Link>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-400 font-semibold mb-4">
              AI • Future • Capital • Digital Intelligence
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              The Future of AI,
              <br />
              Wealth & Human Productivity
            </h2>

            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Researching the long-term impact of artificial intelligence,
              digital assets, productivity leverage, and future capital trends.
            </p>

            <Link
              href="/articles"
              className="inline-flex items-center gap-3 bg-amber-400 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-amber-300 transition"
            >
              Explore Articles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-6">
            {categories.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 bg-[#111] rounded-3xl p-8 hover:border-amber-400/40 transition"
              >
                <div className="text-amber-400 mb-4">{item.icon}</div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-32">
          <h3 className="text-4xl font-bold mb-10 text-amber-400">
            Featured Research
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-amber-400/40 transition"
              >
                <h4 className="text-2xl font-bold leading-relaxed">
                  {article}
                </h4>
              </div>
            ))}
          </div>
        </section>
      </section>
  

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/50">
        © 2026 Knowledge Capital. Investment education only. Not financial advice.
      </footer>
    </main>
  );
}
