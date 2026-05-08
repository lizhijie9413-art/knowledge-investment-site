"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Bitcoin, LineChart, ShieldCheck, Mail, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function KnowledgeInvestmentWebsite() {
  const categories = [
  {
    icon: <LineChart className="h-7 w-7" />,
    title: "Stock Investing",
    desc: "Learn long-term investing, value investing, and risk management."
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Fund Investing",
    desc: "Simple portfolio strategies for stable long-term growth."
  },
  {
    icon: <Bitcoin className="h-7 w-7" />,
    title: "Bitcoin Insights",
    desc: "Understand digital assets, market cycles, and future trends."
  },
  {
    icon: <BookOpen className="h-7 w-7" />,
    title: "Wealth Mindset",
    desc: "Build discipline, compound growth thinking, and financial awareness."
  },
];

const articles = [
  "Why Long-Term Investing Beats Short-Term Trading",
  "How Beginners Can Build a Simple Fund Portfolio",
  "What Is the Real Value of Bitcoin?",
];

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold tracking-wide text-amber-400">Knowledge Capital</div>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#home" className="hover:text-amber-400">Home</a>
            <a href="#about" className="hover:text-amber-400">About</a>
            <a href="#knowledge" className="hover:text-amber-400">Investing</a>
            <a href="#articles" className="hover:text-amber-400">Articles</a>
            <a href="#contact" className="hover:text-amber-400">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden px-6 py-28 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 inline-block rounded-full border border-amber-400/30 px-4 py-2 text-sm text-amber-300">
              Knowledge • Investment • Growth
            </p>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Enhance cognition with knowledge，<br />Build Knowledge, Build Wealth
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Learn about stocks, funds, Bitcoin, and long-term investing strategies. Making financial knowledge simple, clear, and actionable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/articles">
               <Button className="rounded-full bg-amber-400 px-7 py-6 text-black hover:bg-amber-300">
               Start Reading <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
                </a>
              <a href="#about">
               <Button variant="outline" className="rounded-full border-white/20 px-7 py-6 text-white hover:bg-white/10">
               About Me
                 </Button>
                </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <Card className="rounded-3xl border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm text-white/50">Portfolio Mindset</span>
                  <span className="rounded-full bg-amber-400/15 px-3 py-1 text-sm text-amber-300">Long-Term</span>
                </div>
                <div className="space-y-5">
                  {[
                    ["Risk Management", "92%"],
                    ["Long-Term Allocation", "86%"],
                    ["Market Awareness", "78%"],
                    ["Wealth Discipline", "95%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm text-white/70">
                        <span>{label}</span><span>{value}</span>
                      </div>
                      <div className="h-3 rounded-full bg-white/10">
                        <div className="h-3 rounded-full bg-amber-400" style={{ width: value }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-white/60">
                  Investing is not about getting rich overnight, but about the compounding effect of knowledge, discipline, and time.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">About Me</p>
          <h2 className="mt-4 text-4xl font-bold">A knowledge sharer focused on long-term investing</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            I am passionate about finance, reading, sports, and long-term investing. Here, I will share insights on stocks, funds, Bitcoin, asset allocation, and wealth management, hoping to help more people develop a clear, rational, and sound investment mindset.
          </p>
        </div>
      </section>

      <section id="knowledge" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Knowledge</p>
              <h2 className="mt-4 text-4xl font-bold">Investment Knowledge Section</h2>
            </div>
            <p className="max-w-xl text-white/60">From basic knowledge to asset allocation, we explain the investment logic in simple language.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {categories.map((item) => (
              <Card key={item.title} className="rounded-3xl border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <CardContent className="p-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/60">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Latest Articles</p>
          <h2 className="mt-4 text-4xl font-bold">Latest articles</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.map((title, index) => (
              <Card key={title} className="rounded-3xl border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03]">
                <CardContent className="p-7">
                  <span className="text-sm text-amber-300">article 0{index + 1}</span>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">{title}</h3>
                  <p className="mt-5 text-sm text-white/50">2026 · Investment Insights · 5-Minute Read</p>
                  <button className="mt-7 flex items-center text-sm text-amber-300 hover:text-amber-200">
                    Read the full article <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-amber-400/20 bg-amber-400/10 p-10 text-center md:p-16">
          <h2 className="text-4xl font-bold">My investment philosophy</h2>
          <p className="mx-auto mt-6 max-w-3xl text-2xl leading-10 text-white/80">“Investing is not gambling, but the compounding effect of knowledge, discipline, and time.。”</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-amber-200">
            <span className="rounded-full bg-black/30 px-4 py-2">Don't chase trends</span>
            <span className="rounded-full bg-black/30 px-4 py-2">Controlling risks</span>
            <span className="rounded-full bg-black/30 px-4 py-2">Long-termism</span>
            <span className="rounded-full bg-black/30 px-4 py-2">Keep learning</span>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.04] p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Contact</p>
              <h2 className="mt-4 text-4xl font-bold">Contact and Cooperation</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/60">We welcome exchanges on investment knowledge, content collaboration, community building, or brand cooperation.。</p>
            </div>
            <div className="space-y-4 text-white/70">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-300" /> your@email.com</div>
              <div className="flex items-center gap-3"><Send className="h-5 w-5 text-amber-300" /> Instagram / X</div>
              <div className="flex items-center gap-3"><Send className="h-5 w-5 text-amber-300" /> Telegram community</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/40">
        © 2026 Knowledge Capital. The content on this website is for knowledge sharing purposes only and does not constitute any investment advice.
      </footer>
    </div>
  );
}
