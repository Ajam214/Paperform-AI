export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <p>© {new Date().getFullYear()} Paperform Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}
