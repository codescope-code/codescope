import Image from 'next/image';

const WorkSection = () => {
  const campaigns = [
    {
      title: "VuDu",
      image: "/Project1.jpg", // Replace with your image path
    },
    {
      title: "Gravity falls",
      image: "/Project2.jpg", // Replace with your image path
    },
    {
      title: "Brain Storm",
      image: "/Project3.jpg", // Replace with your image path
    },
    {
      title: "Arcade",
      image: "/Project4.png", // Replace with your image path
    },
    // {
    //   title: "Brand Collaboration",
    //   image: "/images/brand-collab.jpg", // Replace with your image path
    // },
    // {
    //   title: "Event Promotion",
    //   image: "/images/event-promo.jpg", // Replace with your image path
    // },
  ];

  return (
    <section className="bg-black text-stone-100 py-28 px-6 border-b-2 border-gray-600">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-24">LATEST CAMPAIGNS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 bg-green-400">
                <h3 className="text-xl font-semibold">{campaign.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;