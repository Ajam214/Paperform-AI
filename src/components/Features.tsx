import Image from "next/image";

const features = [
  {
    title: "Designed to stand out",
    desc: "Build beautiful solutions as unique as your brand. More intuitive. More customizable. More capable.",
    icon: "https://d3gw2uv1ch7vdq.cloudfront.net/pageimg/paperform_icon_beautiful_brandable_black.svg",
  },
  {
    title: "Science meets sorcery",
    desc: "Paperform's unique Calculations function allows you to do things others can't.",
    icon: "https://d3gw2uv1ch7vdq.cloudfront.net/pageimg/paperform_icon_beautiful_brandable_black.svg",
  },
  {
    title: "Easy Peasy",
    desc: "No more drag & lag interfaces or clumsy menus. Paperform is as easy to use as a document.",
    icon: "https://d3gw2uv1ch7vdq.cloudfront.net/pageimg/paperform_icon_easy_master_black.svg",
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center">
          Stunningly smart, uniquely yours.
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl shadow-sm text-center"
            >
              {/* ✅ Icon */} 
              <div className="flex justify-center mb-4">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={64}
                  height={64}
                  className="w-12 h-12"
                />
              </div>

              {/* Title */}
              <h4 className="font-semibold text-xl">{f.title}</h4>

              {/* Description */}
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
