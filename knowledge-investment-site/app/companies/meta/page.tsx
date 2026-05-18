export default function MetaPage() {
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
          Meta & Open Source AI
        </h1>

        <p className="text-zinc-300 text-xl leading-9 mb-10">
          Meta is investing heavily in artificial intelligence, open-source AI models,
          and next-generation digital ecosystems. Through Llama AI models,
          Meta is becoming one of the biggest players in global AI development.
        </p>

        <img
          src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1400&auto=format&fit=crop"
          alt="Meta AI"
          className="w-full h-[500px] object-cover rounded-3xl mb-12"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Llama AI</h2>
            <p className="text-zinc-300 leading-8">
              Meta’s Llama models are among the leading open-source AI systems
              powering developers worldwide.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">AI Infrastructure</h2>
            <p className="text-zinc-300 leading-8">
              Meta is building massive AI data centers and GPU infrastructure
              for future intelligence systems.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Future Ecosystem</h2>
            <p className="text-zinc-300 leading-8">
              AI may become deeply integrated into social platforms,
              virtual reality, and digital communication.
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-zinc-800">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/4sL5HCGM8sQ"
            title="Meta AI Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
