export default function AbouttSection() {
  return (
    <section className="bg-black text-white py-28 px-6 md:px-20 border-b border-gray-600 w-full">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold uppercase mt-28">OUR PURPOSE</h2>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-green-400 text-xl font-semibold mb-4">Passion for Success</h3>
          <p className="mb-6 text-gray-300">
          Our purpose is to bridge the gap between design and data — to create digital solutions 
          that not only look beautiful but also perform exceptionally. 
          We believe every business deserves a powerful online presence backed by smart insights.
          Through tailored web design and data-driven strategies, we help our clients grow, 
          connect with their audiences, and make informed decisions that move their business forward. 
          It's not just about building websites — it's about building meaningful digital experiences 
          that deliver real value.
          Our purpose is to turn ideas into interactive realities and data into direction.

          </p>
          <p className="text-gray-300">
          Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the brand image and give visitors a taste of the company’s values and personality.
          </p>
        </div>
      </div>
    </section>
  );
}
