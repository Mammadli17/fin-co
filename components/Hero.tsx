export default function Hero() {
  return (
    <section className="hero-bg py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-violet-100 text-violet-700 mb-6">AI-Powered Financial Ecosystem</div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5a8] to-[#0b7b49]">
          Connect. Manage. Grow.
        </h1>

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          FinLink Pro bridges SMEs, accountants, and banks with intelligent automation, real-time insights, and gamified collaboration.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="/login" className="px-6 py-3 rounded-xl bg-primary text-white">Sign Up as SME →</a>
          <a href="/login" className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 bg-white">Join as Accountant</a>
        </div>
      </div>
    </section>
  );
}
