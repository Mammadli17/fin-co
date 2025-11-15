const features = [
  { title: "Real-Time Analytics", desc: "Track your financial health with live dashboards and AI-powered insights", icon: "📊" },
  { title: "Smart Matching", desc: "Connect with certified accountants who understand your business needs", icon: "🤝" },
  { title: "Growth Optimization", desc: "AI recommendations to improve cash flow and reduce costs", icon: "📈" },
  { title: "Risk Management", desc: "Fraud detection and credit risk scoring to protect your business", icon: "🛡️" },
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold">Powerful Features for Modern Finance</h2>
        <p className="mt-3 text-slate-600">Everything you need to streamline financial operations and make data-driven decisions</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card p-6 text-left">
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
