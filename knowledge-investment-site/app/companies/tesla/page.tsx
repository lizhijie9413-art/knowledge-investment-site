export default function TeslaPage() {
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
          Tesla & Autonomous AI
        </h1>

        <p className="text-zinc-300 text-xl leading-9 mb-10">
          Tesla is building one of the world’s most advanced real-world AI systems.
          Through autonomous driving, robotics, neural networks, and AI supercomputers,
          Tesla is helping shape the future of intelligent machines.
        </p>

        <img
          src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1400&auto=format&fit=crop"
          alt="Tesla AI"
          className="w-full h-[500px] object-cover rounded-3xl mb-12"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Autonomous Driving</h2>
            <p className="text-zinc-300 leading-8">
              Tesla Full Self Driving systems use neural networks and real-world AI training.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Optimus Robot</h2>
            <p className="text-zinc-300 leading-8">
              Tesla is developing humanoid AI robots that may transform future labor systems.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Dojo AI</h2>
            <p className="text-zinc-300 leading-8">
              Tesla’s Dojo supercomputer is designed for massive-scale AI training and machine vision.
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-zinc-800">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/Ucp0TTmvqOE"
            title="Tesla AI Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
