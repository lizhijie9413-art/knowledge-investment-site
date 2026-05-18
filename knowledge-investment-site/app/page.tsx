"use client";

import {
  Brain,
  Cpu,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const cards = [
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "AI Intelligence",
      desc: "Discover how artificial intelligence is transforming the future of humanity and global industries.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: "Future Technology",
      desc: "Explore the rise of automation, robotics, computing power, and AI infrastructure.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-pink-500" />,
      title: "Long-Term Vision",
      desc: "Understand the long-term value and opportunities created by the AI revolution.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <header className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wider">
            XENOVATE AI
          </h1>

    <nav className="hidden md:flex gap-10 text-sm text-zinc-300">      
         <a href="/">Home</a>
<a href="/articles">Research</a>
<a href="/ai-giants">Technology</a>
<a href="/articles/ai-next-decade">Future</a>
<a href="/about">About</a>
</nav>
         <a
  href="/articles"
  className="bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-xl font-medium hover:opacity-90"
>
  Get Started
</a>
          
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-purple-400 mb-4">
            AI Future Platform
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            THE NEXT ERA OF
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              INTELLIGENCE
            </span>
            BEGINS HERE
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-8 max-w-xl">
            Explore the future of artificial intelligence,
            intelligent systems, AI productivity,
            innovation, and long-term technological growth.
          </p>

         <a
  href="/articles"
   className="inline-flex bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-4 rounded-2xl font-semibold items-center gap-2 hover:opacity-90"
>
  Explore Research
  <ArrowRight size={18} />
</a>

<a
  href="/about"
  className="inline-flex border border-zinc-700 px-7 py-4 rounded-2xl hover:bg-zinc-900"
  >
  Learn More
</a>

          <div className="mt-16 flex gap-16">
            <div>
              <h3 className="text-4xl font-bold text-purple-400">
                180K+
              </h3>
              <p className="text-zinc-500 mt-2">
                AI insights generated
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                900K+
              </h3>
              <p className="text-zinc-500 mt-2">
                Future innovators worldwide
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>

          <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
              alt="AI"
              className="rounded-2xl object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <p className="text-purple-400 uppercase tracking-[0.2em] mb-3">
            Built For The Future
          </p>

          <h2 className="text-5xl font-bold">
            AI-Powered Tools
            <span className="text-blue-400">
              {" "}For Intelligent Minds
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition"
            >
              <div className="mb-6">{card.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              <p className="text-zinc-400 leading-7">
                {card.desc}
              </p>

              <a
  href={
    index === 0
      ? "/articles/future-of-ai"
      : index === 1
      ? "/articles/ai-productivity"
      : "/articles/ai-next-decade"
  }
  className="mt-8 text-purple-400 inline-flex items-center gap-2 hover:text-blue-400 transition"
>
  Learn More
  <ArrowRight size={16} />
</a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between text-zinc-500">
          <p>© 2026 Xenovate AI. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
