export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl p-12 text-center" style={{
          background: "linear-gradient(90deg, #082444 0%, #23b38a 100%)",
          color: "white"
        }}>
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Transform Your Financial Operations?</h2>
          <p className="mt-3 text-slate-100">Join thousands of SMEs and accountants already using FinLink Pro</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="/login" className="px-6 py-3 rounded-xl bg-white text-primary font-semibold">Start Free Trial</a>
            <a href="/login" className="px-6 py-3 rounded-xl border border-white text-white">Login</a>
          </div>
        </div>
      </div>
    </section>
  );
}
