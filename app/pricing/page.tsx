import PricingCards from "@/components/PricingCards";

export default function Pricing() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-center">Pricing</h1>
        <p className="text-center text-slate-600 mt-2">Choose the plan that fits your business</p>

        <div className="mt-8">
          <PricingCards />
        </div>
      </div>
    </div>
  );
}
