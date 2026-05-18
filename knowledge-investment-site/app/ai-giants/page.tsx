export default function AIGiantsPage() {
  const companies = [
    {
      name: "NVIDIA",
      desc: "Leading the global AI revolution with GPUs, AI chips, and massive computing power infrastructure.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    },
    {
      name: "Google",
      desc: "Building advanced AI models, cloud infrastructure, Gemini AI, and next-generation search systems.",
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1400&auto=format&fit=crop",
    },
    {
      name: "Microsoft",
      desc: "Partnering with OpenAI and integrating artificial intelligence into cloud computing and productivity tools.",
      image:
        "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1400&auto=format&fit=crop",
    },
    {
      name: "OpenAI",
      desc: "Creator of ChatGPT and one of the most influential companies shaping the future of artificial intelligence.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
    },
    {
      name: "Meta",
      desc: "Investing heavily into open-source AI models, digital worlds, and future AI assistants.",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1400&auto=format&fit=crop",
    },
    {
      name: "Tesla",
      desc: "Combining AI with robotics, autonomous driving, and next-generation intelligent systems.",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:opacity-90 mb-12"
        >
          ← Back Home
        </a>

        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-purple-400 mb-4">
            AI INDUSTRY LEADERS
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            The Companies Building
            <span className="text-blue-400"> The AI Future</span>
          </h1>

          <p className="text-zinc-300 text-xl max-w-4xl leading-10">
            Explore the world's most influential technology companies investing
            billions into artificial intelligence, large language models,
            robotics, cloud infrastructure, and next-generation computing power.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500 transition"
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h2 className="text-4xl font-bold mb-6">
                  {company.name}
                </h2>

                <p className="text-zinc-300 text-lg leading-8 mb-8">
                  {company.desc}
                </p>

              <a
href={
  company.name === "NVIDIA"
    ? "/companies/nvidia"
    : company.name === "Google"
    ? "/companies/google"
    : company.name === "Microsoft"
    ? "/companies/microsoft"
    : company.name === "OpenAI"
    ? "/companies/openai"
    : company.name === "Meta"
    ? "/companies/meta"
    : company.name === "Amazon"
    ? "/companies/amazon"
    : "#"
}
  className="inline-flex bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 rounded-2xl font-semibold hover:opacity-90"
>
  Learn More
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
