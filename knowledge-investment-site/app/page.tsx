"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Bitcoin, LineChart, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between mb-24">
          <h1 className="text-2xl font-bold text-amber-400">Knowledge Capital</h1>

          <div className="flex gap-6 text-sm text-white/70">
            <Link href="/articles" className="hover:text-amber-400">Articles</Link>
            <Link href="/about" className="hover:text-amber-400">About</Link>
            <Link href="/admin" className="hover:text-amber-400">Admin</Link>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-400 font-semibold mb-4">
              Investing Knowledge for Long-Term Wealth
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Build smarter wealth with clear investment insights.
            </h2>

            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Learn about Bitcoin, ETFs, funds, stocks, risk management, and long-term wealth strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/articles"
                className="bg-amber-400 text-black px-7 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-amber-300"
              >
                Read Articles <ArrowRight size={20} />
              </Link>

              <Link
                href="/about"
                className="border border-white/20 px-7 py-4 rounded-xl font-bold hover:border-amber-400"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black rounded-2xl p-6 border border-white/10">
                <Bitcoin className="text-amber-400 mb-4" size={36} />
                <h3 className="font-bold text-xl mb-2">Bitcoin</h3>
                <p className="text-white/60">Digital assets and long-term financial freedom.</p>
              </div>

              <div className="bg-black rounded-2xl p-6 border border-white/10">
                <LineChart className="text-amber-400 mb-4" size={36} />
                <h3 className="font-bold text-xl mb-2">Markets</h3>
                <p className="text-white/60">Stocks, ETFs, trends, and market cycles.</p>
              </div>

              <div className="bg-black rounded-2xl p-6 border border-white/10">
                <ShieldCheck className="text-amber-400 mb-4" size={36} />
                <h3 className="font-bold text-xl mb-2">Risk</h3>
                <p className="text-white/60">Protect capital and avoid emotional decisions.</p>
              </div>

              <div className="bg-black rounded-2xl p-6 border border-white/10">
                <BookOpen className="text-amber-400 mb-4" size={36} />
                <h3 className="font-bold text-xl mb-2">Education</h3>
                <p className="text-white/60">Simple investing lessons for beginners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-amber-400">
          What You Can Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Long-term investing strategy",
            "Bitcoin and crypto education",
            "ETF and fund portfolio ideas",
            "Risk management principles",
            "Wealth mindset and discipline",
            "Market cycle understanding",
          ].map((item) => (
            <div key={item} className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-amber-400 text-black rounded-3xl p-10 md:p-16">
          <h2 className="text-4xl font-bold mb-4">
            Start building your investment knowledge today.
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            Read beginner-friendly articles about investing, Bitcoin, funds, and long-term wealth.
          </p>

          <Link
            href="/articles"
            className="inline-flex items-center gap-2 bg-black text-white px-7 py-4 rounded-xl font-bold"
          >
            Explore Articles <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/50">
        © 2026 Knowledge Capital. Investment education only. Not financial advice.
      </footer>
    </main>
  );
}
