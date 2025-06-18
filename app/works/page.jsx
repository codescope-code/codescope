"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../_components/Navbar";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-72 md:h-72 relative overflow-hidden rounded-xl shadow-lg">
      <Image
        src={images[currentImageIndex]}
        alt="Project Screenshot"
        layout="fill"
        objectFit="cover"
        className="transition-all duration-700"
      />
    </div>
  );
}

export default function WorksPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/admin/projects");
        const data = await res.json();
        const formatted = data.map((proj) => ({
          ...proj,
          images: typeof proj.image_url === 'string' ? proj.image_url.split(',') : proj.image_url,
        }));
        setProjects(formatted);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-black text-white px-6 py-40  ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto mb-32">
          <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-right">
            Our Projects
          </h1>
          <div>
            <div className="border-t border-white w-140 mb-4"></div>
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

        {loading ? (
          <div className="text-center text-white/50">Loading...</div>
        ) : (
          <div className="flex flex-col gap-2 max-w-6xl mx-auto border-t-2 border-gray-600 pt-10">
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
        )}
      </div>
    </>
  );
}
