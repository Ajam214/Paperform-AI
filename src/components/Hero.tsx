export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Video on right */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[520px] h-[320px] bg-rose-100 rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-[440px] h-[240px] bg-white rounded-md flex items-center justify-center">
              <video
                src="/videos/what-s-paperform_.mp4"
                className="w-full h-full rounded-md object-cover"
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        {/* Text/buttons on left */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Create powerful forms, fast.
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Paperform takes the headache out of creating and maintaining automated forms, eSignatures, surveys, bookings, payments and more.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="px-6 py-3 bg-yellow-400 rounded-xl font-semibold">Get Started - it's free</button>
            <a href="#" className="text-sm text-slate-600">See pricing</a>
          </div>
        </div>
      </div>
    </section>
  );
}
