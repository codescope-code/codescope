export default function AboutSection() {
  return (
    <section className="bg-black text-white py-44 px-6 md:px-20 border-b border-gray-600"id="aboutsec">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold uppercase mt-32">Learn About Us</h2>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-green-400 text-xl font-semibold mb-4">Our Journey</h3>
          <p className="mb-6 text-gray-300">
      At the intersection of creativity and analytics, 
      our journey began with a simple mission: 
      to empower businesses with stunning websites and insightful data strategies. 
       From day one, we believed that great design is not just about visuals 
        It's about creating seamless user experiences that drive results.
        As we grew, we expanded our services to include powerful data analysis solutions, 
        helping clients understand their audiences, optimize performance, and make smarter decisions. 
        Every project we take on is guided by a passion for innovation and a commitment to measurable success. 
        We are proud to offer a unique advantage 
        that sets our clients apart in the digital world by blending 
        elegant front-end development with deep data insights today.
          </p>
          <p className="text-gray-300">We started with a clear mission: to craft beautiful websites powered by smart data. Today, we merge design and analytics to create digital experiences that deliver real results.

          </p>
        </div>
      </div>
    </section>
  );
}