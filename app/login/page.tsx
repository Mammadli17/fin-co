import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 hero-bg">
      <div className="w-full max-w-md card p-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#0B3B6F" strokeWidth="2" strokeLinecap="round"/></svg>
            <h2 className="text-xl font-bold">FinLink Pro</h2>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Welcome Back</h3>
          <p className="text-slate-500 text-sm">Enter your credentials to access your dashboard</p>
        </div>

        <form className="mt-6 space-y-4">
          <label className="block text-sm">
            <div className="text-slate-700 mb-1">Email</div>
            <input type="email" placeholder="you@example.com" className="w-full border border-slate-200 rounded-lg px-4 py-3"/>
          </label>
          <label className="block text-sm">
            <div className="text-slate-700 mb-1">Password</div>
            <input type="password" placeholder="••••••••" className="w-full border border-slate-200 rounded-lg px-4 py-3"/>
          </label>

          <button className="w-full py-3 rounded-xl bg-primary text-white">Login</button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Don't have an account? <Link href="/"><a className="text-primary underline">Sign up</a></Link>
        </div>
      </div>
    </div>
  );
}
