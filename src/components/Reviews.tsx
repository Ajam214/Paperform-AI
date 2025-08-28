import Image from "next/image";

// ------------------ Types ------------------
type Review = {
  logo: string;
  name: string;
  rating: number;
};

// ------------------ Data ------------------
const reviews: Review[] = [
  {
    logo: "/images/capterra.png",
    name: "Capterra",
    rating: 4.8,
  },
  {
    logo: "/images/trustpilot.png",
    name: "Trustpilot",
    rating: 4.7,
  },
  {
    logo: "/images/producthunt.png",
    name: "Product Hunt",
    rating: 5.0,
  },
];

// ------------------ Components ------------------
const Star = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={filled ? "gold" : "lightgray"}
    className="w-5 h-5"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// ------------------ Main Section ------------------
export default function Reviews() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        {/* Intro Text */}
        <p className="text-slate-500">
          Loved by 10K+ business owners and creators. Trusted by millions of respondents.
        </p>
        <p className="mt-2 text-slate-600">
          Average rating of <span className="font-semibold">4.8 out of 5</span> from{" "}
          <span className="font-semibold">298 reviews</span> across Capterra, Trustpilot, and Product Hunt.
        </p>

        {/* Review Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-between bg-white shadow-md rounded-2xl p-6 h-full"
            >
              {/* Logo */}
              <Image
                src={review.logo}
                alt={review.name}
                width={120}
                height={40}
                className="mb-4 object-contain"
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < Math.round(review.rating)} />
                ))}
              </div>

              {/* Rating + Name */}
              <p className="text-lg font-bold">{review.rating}</p>
              <p className="text-slate-500 text-sm">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
