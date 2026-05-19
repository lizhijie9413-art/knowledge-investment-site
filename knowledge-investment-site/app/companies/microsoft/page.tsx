export default function MicrosoftPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Back button */}
        <a
          href="/ai-giants"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:opacity-90"
        >
          ← Back AI Giants
        </a>

        {/* Page title */}
        <h1 className="text-6xl font-bold mb-8">Microsoft & The AI Revolution</h1>

        {/* Introduction */}
        <p className="text-zinc-300 text-xl leading-9 mb-10">
          Microsoft is becoming one of the most important companies in the AI era. 
          Through its partnership with OpenAI, Azure cloud infrastructure, and Copilot ecosystem, 
          Microsoft is integrating artificial intelligence into productivity, enterprise software, 
          and global cloud systems.
        </p>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1400&auto=format&fit=crop"
          alt="Microsoft AI"
          className="w-full rounded-3xl mb-12"
        />

        {/* Embedded YouTube video */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DIU48QL5Cyk"
            title="Microsoft AI Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Additional description */}
        <p className="text-zinc-300 text-lg leading-9">
          Microsoft AI tools are transforming the way businesses work. From Office Copilot and AI coding assistants 
          to enterprise AI systems, Microsoft is positioning itself at the center of the next technological revolution.
        </p>

        {/* Learn More button */}
        <a
          href="/learn-more/microsoft"
          className="inline-flex bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 rounded-2xl font-semibold hover:opacity-90 mt-6"
        >
          Learn More
        </a>
      </section>
    </main>
  );
}
