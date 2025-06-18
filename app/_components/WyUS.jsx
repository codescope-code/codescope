// components/LearnSection.jsx
export default function WyUS() {
  return (
    <section className="bg-black text-white py-20 px-4 text-center border-gray-600 border-b-2 ">
      <h2 className="text-4xl font-thin mb-12">Why Codescope ?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div className="border-s-2 p-10 ">
          <div className="text-green-500 text-2xl text-start ">➤➤</div>
          <h3 className="text-7xl font-light text-start mb-12">01</h3>
          <p className="text-2xl text-start">With the Right Software, Great Things Can Happen</p>
        </div>

        <div className="border-s-2 p-10 ">
          <div className="text-blue-500 text-2xl text-start ">➤➤</div>
          <h3 className="text-7xl font-light  text-start mb-12">02</h3>
          <p className="text-2xl text-start">Smart Automation Tools </p>
        </div>

        <div className="border-s-2 p-10 md:border-e-2"> 
          <div className="text-purple-500 text-2xl text-start   ">➤➤</div>
          <h3 className="text-7xl font-light text-start mb-12">03</h3>
          <p className="text-2xl text-start">Built for Creatives, by Creatives</p>
        </div>
      </div>

      <div className="mt-32">
        <p className="mb-12 text-2xl">Ready to contact us ?</p>
        <a href="#Contact" className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-full text-lg font-semibold">
          Get in Touch
         </a>
      </div>
    </section>
  );
}