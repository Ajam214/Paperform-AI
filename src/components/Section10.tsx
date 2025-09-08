export default function Section10() {
  return (
    <section className="w-full h-screen flex">
      {/* Left Side */}
      <div className="w-1/2 bg-[#fcb900] flex flex-col justify-center px-16">
        <h1 className="text-5xl font-semibold mb-6">
          Transform your <br /> business
        </h1>
        <p className="text-lg mb-6">
          Paperform's solutions will mean you have more <br />
          time to focus on the things that matter.
        </p>
        <button className="bg-[#dbe5f4] text-black rounded-full px-6 py-3 text-lg font-medium hover:bg-gray-200 transition">
          Get your 7 day unrestricted trial
        </button>
        <p className="text-sm mt-3">No credit card needed.</p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-[#faf9f4] relative overflow-hidden">
        {/* Yellow angled shape */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L500,0 L0,300 Z" fill="#fcb900" />
          </svg>
        </div>

        {/* Navy curved shape */}
        <div className="absolute bottom-0 right-0 w-full h-full">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M500,200 C400,350 200,600 500,500 L500,500 L500,0 Z"
              fill="#012b47"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
