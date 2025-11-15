export default function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500">
        © {new Date().getFullYear()} FinLink Pro. All rights reserved.
      </div>
    </footer>
  );
}
