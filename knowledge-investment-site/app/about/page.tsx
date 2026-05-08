export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        
        <h1 className="text-5xl font-bold text-amber-400">
          About Me
        </h1>

        <p className="mt-8 text-lg leading-8 text-white/70">
          Welcome to my personal investment and financial knowledge website.
        </p>

        <p className="mt-6 text-lg leading-8 text-white/70">
          I am passionate about long-term investing, financial freedom,
          Bitcoin, stock markets, and wealth-building strategies.
        </p>

        <p className="mt-6 text-lg leading-8 text-white/70">
          My goal is to simplify complex financial concepts and share
          practical investment knowledge that helps people build stronger
          financial awareness and better long-term decision making.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          
          <h2 className="text-2xl font-semibold text-amber-300">
            Focus Areas
          </h2>

          <ul className="mt-6 space-y-4 text-white/70">
            <li>• Long-Term Investing</li>
            <li>• Stock Market Education</li>
            <li>• Bitcoin & Digital Assets</li>
            <li>• Wealth Mindset</li>
            <li>• Financial Discipline</li>
            <li>• Portfolio Management</li>
          </ul>

        </div>

      </div>
    </div>
  );
}
