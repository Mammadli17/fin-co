export default function PricingCards() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold">Simple, Transparent Pricing</h2>
        <p className="mt-2 text-slate-600">Choose the plan that fits your business</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="text-sm font-semibold">Free</div>
            <div className="text-3xl font-extrabold mt-2">$0<span className="text-slate-500 text-base">/month</span></div>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>Basic dashboard</li>
              <li>Invoice uploads (10/month)</li>
              <li>AI chat support</li>
              <li>1 accountant connection</li>
            </ul>
            <button className="mt-6 w-full py-3 rounded-xl border border-slate-200">Get Started</button>
          </div>

          <div className="card p-8 border-2 border-primary transform md:scale-100 shadow-md">
            <div className="absolute -mt-6 ml-6 inline-block rounded-full bg-primary text-white px-4 py-1 text-sm">Most Popular</div>
            <div className="text-sm font-semibold">Premium</div>
            <div className="text-3xl font-extrabold mt-2">$49<span className="text-slate-500 text-base">/month</span></div>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>Advanced analytics</li>
              <li>Unlimited invoices</li>
              <li>Priority AI assistance</li>
              <li>Banking integration</li>
              <li>Supply chain financing</li>
            </ul>
            <button className="mt-6 w-full py-3 rounded-xl bg-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
