import { FaLinkedin } from "react-icons/fa";

const ourteam = [
  {
    name: "Ahmed Mahmoud",
    text: "Business Analyst & Front-End Developer",
    image: "/Ahmed Mahmoud.jpg",
    linkedin: "https://www.linkedin.com/in/ahmed-mahmoud-793778226",
  },
  {
    name: "Mohamed Taha",
    text: "Full-Stack Developer & UI/UX Developer",
    image: "/Moahmed Taha.jpg",
    linkedin: "https://www.linkedin.com/in/nano-taha-2727a8346",
  },
  {
    name: "Omar Ahmed",
    text: "Data Analyst & Back-End Developer & Business Administrator",
    image: "/Omar Ahmed.jpg",
    linkedin: "https://www.linkedin.com/in/omar-ahmed0o0",
  },
  {
    name: "Mohamed Ibrahim",
    text: "Data Analyst & Front-End Developer & Idea Architect",
    image: "/Mohamed Ibrahim.jpg",
    linkedin: "https://www.linkedin.com/in/mohamed-ibrahem-931493296",
  },
];

export default function OurTeam() {
  return (
    <section className="py-28 border-b border-gray-600 bg-black text-white" id="OurTeam" >
      <h2 className="text-3xl font-semibold text-center mb-10">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {ourteam.map((t, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg h-80 transition-all duration-500 transform hover:scale-110 hover:z-10"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-full object-cover transform transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-green-500 bg-opacity-60 opacity-0 group-hover:opacity-85 transition-opacity duration-500 flex flex-col justify-end p-4">
              <h3 className="text-4xl font-semibold">{t.name}</h3>
              <p className="text-lg text-gray-50 italic">"{t.text}"</p>
              <div className="mt-2">
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-gray-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}