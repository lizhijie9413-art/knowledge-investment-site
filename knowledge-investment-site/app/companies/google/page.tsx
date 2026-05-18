export default function GooglePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-8 py-20">
        <a
          href="/ai-giants"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:opacity-90 mb-12"
        >
          ← Back AI Giants
        </a>

        <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
          GOOGLE AI ECOSYSTEM
        </p>

        <h1 className="text-6xl font-bold leading-tight mb-8">
          Google And The Future Of
          <span className="text-purple-400"> Artificial Intelligence</span>
        </h1>

        <p className="text-zinc-300 text-xl leading-10 max-w-5xl mb-16">
          Google is one of the most influential technology companies in the AI
          revolution. Through Gemini AI, DeepMind, TPU chips, cloud computing,
          and advanced research, Google is helping shape the future of
          artificial intelligence worldwide.
        </p>

        <img
          src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1600&auto=format&fit=crop"
          alt="Google AI"
          className="w-full h-[500px] object-cover rounded-3xl mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Gemini AI</h2>

            <p className="text-zinc-300 leading-8">
              Gemini is Google’s next-generation AI model designed for advanced
              reasoning, multimodal intelligence, and future AI applications.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">DeepMind</h2>

            <p className="text-zinc-300 leading-8">
              DeepMind focuses on advanced AI research, scientific discovery,
              reinforcement learning, and artificial general intelligence.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Cloud AI</h2>

            <p className="text-zinc-300 leading-8">
              Google Cloud provides AI infrastructure, data platforms, and
              machine learning tools for enterprises worldwide.
            </p>
          </div>
        </div>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-20">
          <h2 className="text-4xl font-bold mb-6">
            Why Google Is Important In AI
          </h2>

          <p className="text-zinc-300 text-lg leading-9 mb-6">
            Google has invested heavily into AI research for years. Its
            ecosystem combines massive data infrastructure, cloud computing,
            machine learning research, and next-generation AI systems.
          </p>

          <p className="text-zinc-300 text-lg leading-9">
            As AI becomes integrated into search, productivity, robotics,
            healthcare, education, and enterprise software, Google may remain
            one of the central companies driving global AI adoption.
          </p>
        </section>

        <div className="rounded-3xl overflow-hidden border border-zinc-800">
          <iframe
            width="100%"
            height="600"
           src="https://www.youtube.com/embed/kCc8FmEb1nY"
            title="Google AI Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
