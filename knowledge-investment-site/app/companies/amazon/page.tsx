export default function AmazonPage() {
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
          Amazon & AI Infrastructure
        </h1>

        <p className="text-zinc-300 text-xl leading-9 mb-10">
          Amazon is rapidly expanding its artificial intelligence ecosystem through AWS cloud infrastructure,
          AI chips, enterprise AI systems, and automation technologies.
        </p>

        <img
          src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1400&auto=format&fit=crop"
          alt="Amazon AI"
          className="w-full h-[500px] object-cover rounded-3xl mb-12"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">AWS Cloud</h2>
            <p className="text-zinc-300 leading-8">
              Amazon Web Services powers a massive portion of the world's AI infrastructure.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">AI Automation</h2>
            <p className="text-zinc-300 leading-8">
              AI robotics and automation are transforming logistics, warehouses,
              and digital commerce systems.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">AI Chips</h2>
            <p className="text-zinc-300 leading-8">
              Amazon is developing custom AI chips to compete in the next era of computing power.
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-zinc-800">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/8ODyxdKPq7s"
            title="Amazon AI Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
