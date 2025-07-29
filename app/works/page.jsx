"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/footer";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-80 md:h-80 relative overflow-hidden rounded-xl shadow-lg">
      <Image
        src={images[currentImageIndex]}
        alt="Project Screenshot"
        fill
        className="object-cover transition-all duration-700"
      />
    </div>
  );
}

export default function WorksPage() {
  // ✅ Projects Array Manually
  const projects = [
    {
      title: "VuDu",
      description: "A cutting-edge platform for video content management.",
      images: [
        "/VuDu1.jpg",
        "/VuDu2.jpg",
        "/VuDu3.jpg",
        "/VuDu4.jpg",
        "/VuDu5.jpg",
        "/VuDu6.jpg",
      ],
    },
    {
      title: "Brainstorm",
      description: "An innovative tool for collaborative idea generation.",
      images: [
        "/BRS1.jpg",
        "/BRS2.jpg",
        "/BRS3.jpg",
        "/BRS4.jpg",
        "/BRS5.jpg",
        "/BRS6.jpg",
        
      ],
    },
    {
      title: "Gravity falls",
      description: "A fashion-forward e-commerce platform.",
      images: [
        "/GF1.jpg",
        "/GF2.jpg",
        "/GF3.jpg",
        "/GF4.jpg",
        "/GF5.jpg",
        "/GF6.jpg",
      ],
    },
    {
      title: "Arcade",
      description: "A gaming hub for enthusiasts and casual players alike.",
      images: [
        "/arcade1.jpg",
        "/arcade2.jpg",
        "/arcade3.jpg",
        "/arcade4.jpg",
        "/arcade5.jpg",
        "/arcade6.jpg",
        "/arcade7.jpg",
        "/arcade8.jpg",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-black text-white px-6 py-40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto mb-32">
          <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-right">
            Our Projects
          </h1>
          <div>
            <div className="border-t border-white w-90 md:w-140 mb-4"></div>
            <div className="flex justify-between">
              <span className="font-semibold text-sm">Works </span>
              <span className="text-sm text-white/70 font-medium mt-1">
                What we are doing everyday.
              </span>
            </div>
            <p className="text-sm italic text-white/60 mt-8">
              <span className="font-semibold">Note:</span> Brand names have been
              altered to honor NDAs and protect client confidentiality.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 max-w-7xl mx-auto border-t-2 border-gray-600 pt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 mt-20 rounded-3xl shadow-xl bg-[#111]"
            >
              <Carousel images={project.images} />
              <div className="text-right">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
