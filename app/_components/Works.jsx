import Image from 'next/image';

export default function WorkSection() {
  const campaigns = [
    { title: "VuDu", image: "/Project1.jpg" },
    { title: "Gravity falls", image: "/Project2.jpg" },
    { title: "Brain Storm", image: "/Project3.jpg" },
    { title: "Arcade", image: "/Project4.png" },
  ];

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center tracking-tight">
          LATEST CAMPAIGNS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* الصورة */}
              <div className="relative aspect-[16/9] sm:aspect-[14/7] w-full">
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* التدرج والنص */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-4 sm:p-6 w-full flex flex-col items-start text-left">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 transition-all duration-500 translate-y-6 opacity-100 group-hover:opacity-100 group-hover:translate-y-0">
                  {campaign.title}
                </h3>
                <a href="/works">
                  <span className="text-sm text-gray-300 transition-all duration-500 delay-75 opacity-0 group-hover:opacity-100">
                    View Project →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
