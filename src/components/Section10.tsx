// section10.tsx
export default function Section10() {
  return (
    <section className="relative bg-[#fcb900] min-h-[90vh] flex items-center justify-center">
      {/* Background abstract shape */}
      <div className="absolute right-0 bottom-0 w-[60%] h-[70%] bg-[#0b2a3a] rounded-tl-[100px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
          Transform your <br /> business
        </h1>
        <p className="text-lg md:text-xl text-black mb-8">
          Paperform's solutions will mean you have more time to focus on the things that matter.
        </p>

        <button className="px-6 py-3 bg-[#e5f0fb] hover:bg-[#d0e6f9] rounded-full text-black font-medium shadow-md transition">
          Get your 7 day unrestricted trial
        </button>

        <p className="text-sm text-black mt-4">No credit card needed.</p>
      </div>
    </section>
  );
}
