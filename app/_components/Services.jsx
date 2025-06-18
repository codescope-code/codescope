import {
  Expand,
  Gauge,
  Bot,
  Boxes,
  Paintbrush,
} from "lucide-react";

const features = [
  { icon: <Expand size={48} />, title: "Flexibility & Scalability" },
  { icon: <Gauge size={48} />, title: "Speed & Security" },
  { icon: <Bot size={48} />, title: "Smart Automation Tools" },
  { icon: <Boxes size={48} />, title: "All-In-One Solution" },
  { icon: <Paintbrush size={48} />, title: "Built for Creatives, by Creatives" },
];

export default function () {
  return (
    <div className="flex flex-col px-4 py-10 bg-black text-white  border-b-2 border-gray-600">
      <div className="flex justify-start">
        <h1 className="text-3xl md:text-4xl font-bold mb-16 ms-20 pt-20 ">WHAT WE STAND FOR</h1>
      </div>
      <div className="flex justify-center py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl p-6 flex flex-col items-center text-center space-y-4 hover:bg-green-400 transition-colors"
              >
                <span className="text-3xl">{feature.icon}</span>
                <p className="text-lg">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}