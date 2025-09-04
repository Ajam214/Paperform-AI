export default function Stats() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Your digital Swiss Army Knife.</h2>
        <p className="mt-4 text-slate-200 max-w-2xl mx-auto">Paperform does everything short of open bottles.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <p className="text-3xl font-bold text-yellow-400">92,372,001</p>
            <p className="text-slate-300 mt-2">submissions</p>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <p className="text-3xl font-bold text-yellow-400">731,916</p>
            <p className="text-slate-300 mt-2">forms</p>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <p className="text-3xl font-bold text-yellow-400">$173,901,139</p>
            <p className="text-slate-300 mt-2">in Stripe Connect payments processed</p>
          </div>
        </div>
        
        <div className="mt-12">
          <button className="px-6 py-3 bg-yellow-400 text-slate-900 rounded-xl font-semibold hover:bg-yellow-500 transition-colors">Start creating for free now</button>
        </div>
      </div>
    </section>
  );
}
