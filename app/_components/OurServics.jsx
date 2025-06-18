// components/DataSection.jsx

export default function OurServics() {
  return (
    <section className="bg-black py-20 px-4 ms md:mx-20  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
        
        {/* النصوص */}
        <div className=" ">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">Data You Can Trust</h2>

          <div className="space-y-8 text-gray-800">
            <div>
              <h3 className="text-3xl font-semibold text-white">01. Fast & Agile</h3>
              <p className="text-lg mt-1 text-gray-400 ps-10 pt-1x">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-white">02. Cost-Effective</h3>
              <p className="text-lg mt-1 text-gray-400 text-cener ps-10">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-white">03. Real-Time Analytics</h3>
              <p className="text-lg mt-1 text-gray-400 ps-10"> 
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
              </p>
            </div>
          </div>
        </div>

        {/* الصورة */}
        <div className="flex justify-center p-20">
           {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="2.jpg"
            alt="Statistics Graphic"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        </div>
      </div>
    </section>
  );
}