export default function NvidiaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-8 py-20">
        <a
          href="/ai-giants"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:opacity-90 mb-12"
        >
          ← Back AI Giants
        </a>

        <p className="uppercase tracking-[0.3em] text-green-400 mb-4">
          AI COMPUTING POWER
        </p>

        <h1 className="text-6xl font-bold leading-tight mb-8">
          NVIDIA: The Engine Behind
          <span className="text-blue-400"> The AI Revolution</span>
        </h1>

        <p className="text-zinc-300 text-xl leading-10 max-w-5xl mb-16">
          NVIDIA has become one of the most important companies in the global AI
          ecosystem. Its GPUs, data center chips, CUDA software platform, and AI
          infrastructure are powering large language models, robotics,
          autonomous systems, and next-generation computing.
        </p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
          alt="NVIDIA AI computing"
          className="w-full h-[500px] object-cover rounded-3xl mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">AI GPUs</h2>
            <p className="text-zinc-300 leading-8">
              NVIDIA GPUs are widely used to train and run advanced AI models,
              giving developers massive parallel computing power.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Data Centers</h2>
            <p className="text-zinc-300 leading-8">
              AI data centers require powerful chips, networking, cooling, and
              infrastructure. NVIDIA plays a central role in this ecosystem.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">AI Software</h2>
            <p className="text-zinc-300 leading-8">
              CUDA and NVIDIA software platforms help developers build,
              optimize, and deploy AI applications at scale.
            </p>
          </div>
        </div>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-20">
          <h2 className="text-4xl font-bold mb-6">
            Why NVIDIA Matters To The AI Future
          </h2>

          <p className="text-zinc-300 text-lg leading-9 mb-6">
            Modern AI models require enormous computing power. Every large
            language model, image generator, autonomous system, and robotics
            platform depends on advanced chips and infrastructure.
          </p>

          <p className="text-zinc-300 text-lg leading-9">
            This makes NVIDIA a central force in the AI era. As AI adoption
            expands across enterprises, cloud platforms, healthcare, finance,
            manufacturing, and robotics, the demand for AI computing power may
            continue to grow.
          </p>
        </section>

      <div className="rounded-3xl overflow-hidden border border-zinc-800">
  <iframe
    width="100%"
    height="600"
    src="https://www.youtube.com/embed/8MZ9SA8s35g"
    title="NVIDIA AI Video"
    allowFullScreen
  ></iframe>
</div>
       
      </section>
    </main>
  );
}
