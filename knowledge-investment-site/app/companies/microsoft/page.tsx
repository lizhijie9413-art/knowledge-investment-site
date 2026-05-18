export default function MicrosoftPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-bold mb-8">
          Microsoft & The AI Revolution
        </h1>

        <p className="text-zinc-300 text-xl leading-9 mb-10">
          Microsoft is becoming one of the most important companies in the AI era.
          Through its partnership with OpenAI, Azure cloud infrastructure, and
          Copilot ecosystem, Microsoft is integrating artificial intelligence
          into productivity, enterprise software, and global cloud systems.
        </p>

        <img
          src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1400&auto=format&fit=crop"
          className="w-full rounded-3xl mb-12"
        />

        <p className="text-zinc-300 text-lg leading-9">
          Microsoft AI tools are transforming the way businesses work.
          From Office Copilot and AI coding assistants to enterprise AI systems,
          Microsoft is positioning itself at the center of the next technological revolution.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl overflow-hidden border border-zinc-800">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/SVcsDDABEkM"
            title="Microsoft AI Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
