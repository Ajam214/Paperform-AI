export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/images/paperformlogo.jpg" alt="Logo" className="h-8 w-8 object-contain"/>
          <span className="text-lg font-semibold">Paperform AI</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#" className="text-slate-700 hover:text-slate-900">Features</a>
          <a href="#" className="text-slate-700 hover:text-slate-900">Integrations</a>
          <a href="#" className="text-slate-700 hover:text-slate-900">Resources</a>
        </div>
        <div className="flex items-center space-x-3">
          <button className="hidden md:inline px-4 py-2 rounded-md border text-sm">Log in</button>
          <button className="px-4 py-2 rounded-md bg-yellow-400 text-slate-900 font-medium">Get started</button>
        </div>
      </div>
    </nav>
  );
}
