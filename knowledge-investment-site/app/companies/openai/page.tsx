export default function OpenAIPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <a
          href="/ai-giants"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:opacity-90 mb-12"
        >
          ← Back AI Giants
        </a>

        <h1 className="text-6xl font-bold mb-8">
          OpenAI & The Future Of Intelligence
        </h1>

        <p className="text-zinc-300 text-xl leading-9 mb-10">
          OpenAI is one of the most influential companies in the artificial
          intelligence revolution. Through ChatGPT, large language models,
          multimodal AI, and AI agents, OpenAI is changing how people learn,
          work, create, and communicate.
        </p>

        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop"
          alt="OpenAI future"
          className="w-full h-[500px] object-cover rounded-3xl mb-12"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">ChatGPT</h2>
            <p className="text-zinc-300 leading-8">
              ChatGPT introduced millions of people to the power of generative AI
              and natural language intelligence.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">AI Agents</h2>
            <p className="text-zinc-300 leading-8">
              AI agents may automate complex digital tasks, helping people work
              faster and build smarter systems.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Multimodal AI</h2>
            <p className="text-zinc-300 leading-8">
              Future AI systems can understand text, images, audio, code, and
              video together.
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-zinc-800">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/T-D1OfcDW1M"
            title="OpenAI Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
