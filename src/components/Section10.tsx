// components/Section10.tsx
export default function Section10() {
  return (
    <section className="relative min-h-screen flex items-center justify-start bg-[#ffb81c] overflow-hidden">
      {/* Abstract right shape */}
      <div className="absolute right-0 top-0 w-[70%] h-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 600 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M600,0 L600,800 L200,800 Q100,600 200,400 Q300,200 100,0 Z"
            fill="#0c2d48"
          />
          <path
            d="M600,0 L600,800 L400,800 Q350,600 450,400 Q500,200 300,0 Z"
            fill="#f9f8f2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl px-8">
        <h1 className="text-[48px] leading-tight font-normal text-black mb-6">
          Transform your <br /> business
        </h1>

        <p className="text-lg text-black mb-8">
          Paperform&apos;s solutions will mean you have more time to focus on
          the things that matter.
        </p>

        <button className="px-6 py-3 bg-[#e5ebf3] hover:bg-[#d9e3ef] rounded-xl text-black font-medium transition">
          Get your 7 day unrestricted trial
        </button>

        <p className="text-sm text-black mt-4">No credit card needed.</p>
      </div>
    </section>
  );
}
