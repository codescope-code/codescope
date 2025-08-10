"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../_components/Navbar";

function Carousel({ images, onOpen }) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    start();
    return () => stop();
  }, [images]);

  function start() {
    stop();
    timerRef.current = setInterval(() =>
      setIdx((i) => (i + 1) % images.length),
    2500);
  }
  function stop() {
    if (timerRef.current) clearInterval(timerRef.current);
  }
  function prev() {
    setIdx((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setIdx((i) => (i + 1) % images.length);
  }

  return (
    <div
      className="relative aspect[16/9] h-48 sm:h-64 md:h-72 overflow-hidden rounded-xl bg-neutral-900"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
                src={images[idx]}
                alt={`slide-${idx}`}
                fill
                className="w-full h-full cursor-pointer object-contain sm:object-cover"
                onClick={() => onOpen(idx)}
        />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        aria-label="previous"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur rounded-full p-2 hover:scale-105 transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button
        aria-label="next"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur rounded-full p-2 hover:scale-105 transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-transform ${i === idx ? 'scale-125 bg-white' : 'bg-white/40'}`}
            aria-label={`go to ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Modal({ open, images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex || 0);

  useEffect(() => setIndex(startIndex || 0), [startIndex]);
  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6">
      <div className="w-full max-w-4xl bg-[#0b0b0b] rounded-xl overflow-hidden shadow-2xl">
        <div className="relative h-60 sm:h-80 md:h-96">
          <Image src={images[index]} alt={`modal-${index}`} fill className="object-contain bg-black" />
        </div>
        <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)} className="p-2 rounded-md text-black bg-green-400 hover:bg-green-500 ">Prev</button>
            <button onClick={() => setIndex((i) => (i + 1) % images.length)} className="p-2 rounded-md text-black bg-green-400 hover:bg-green-500 ">Next</button>
            <span className="text-sm text-white/60">{index + 1} / {images.length}</span>
          </div>
          <button onClick={onClose} className="text-sm text-black bg-green-400 px-3 py-1 rounded hover:bg-green-500">Close</button>
        </div>
      </div>
    </div>
  );
}

export default function WorksPage() {
  const allProjects = [
    {
      id: 'video',
      title: "VuDu",
      tags: ["Web", "Video"],
      description: "A cutting-edge platform for video content management.",
      images: ["/VuDu1.jpg", "/VuDu2.jpg", "/VuDu3.jpg", "/VuDu4.jpg", "/VuDu5.jpg", "/VuDu6.jpg"],
    },
    {
      id: 'collab',
      title: "Brainstorm",
      tags: ["Tool", "Collaboration"],
      description: "An innovative tool for collaborative idea generation.",
      images: ["/BRS1.jpg", "/BRS2.jpg", "/BRS3.jpg", "/BRS4.jpg", "/BRS5.jpg", "/BRS6.jpg", "/BRS7.jpg"],
    },
    {
      id: 'ecom',
      title: "Gravity Falls",
      tags: ["E-commerce", "Fashion"],
      description: "A fashion-forward e-commerce platform.",
      images: ["/GF1.jpg", "/GF2.jpg", "/GF3.jpg", "/GF4.jpg", "/GF5.jpg", "/GF6.jpg"],
    },
    {
      id: 'arcade',
      title: "Arcade",
      tags: ["Games", "Web"],
      description: "A gaming hub for enthusiasts and casual players alike.",
      images: ["/arcade1.jpg", "/arcade2.jpg", "/arcade3.jpg", "/arcade4.jpg", "/arcade5.jpg", "/arcade6.jpg", "/arcade7.jpg", "/arcade8.jpg"],
    },
  ];

  const [filter, setFilter] = useState('All');
  const [openModal, setOpenModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalStart, setModalStart] = useState(0);

  const tags = ['All', ...Array.from(new Set(allProjects.flatMap(p => p.tags)))];

  const visible = allProjects.filter(p => filter === 'All' ? true : p.tags.includes(filter));

  function openProjectModal(project, startIndex = 0) {
    setModalImages(project.images);
    setModalStart(startIndex);
    setOpenModal(true);
  }

  return (
    <>
      <Navbar />
      <div className="bg-black text-white px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 py-20">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Our Projects</h1>
              <p className="text-white/60 mt-2 max-w-xl text-sm sm:text-base">
                A curated selection of work showing design, development and product thinking. Click a project to view images.
              </p>
            </div>
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
              {tags.map(t => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`flex-shrink-0 px-3 py-2 rounded-full text-sm transition ${filter === t ? 'bg-green-400 text-black' : 'bg-white/5 text-white/80 hover:bg-green-400'}`}
                >{t}</button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {visible.map((project) => (
              <motion.div layout key={project.id} className="bg-[#0d0d0d] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="p-4">
                  <div className="mb-4">
                    <Carousel images={project.images} onOpen={(i) => openProjectModal(project, i)} />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold">{project.title}</h2>
                      <p className="text-xs sm:text-sm text-white/70 mt-2">{project.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-xs text-white/60">{project.tags.join(' • ')}</div>
                      <button onClick={() => openProjectModal(project)} className="text-sm bg-green-500 hover:bg-green-400 text-black px-3 py-1 rounded">View</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Modal open={openModal} images={modalImages} startIndex={modalStart} onClose={() => setOpenModal(false)} />
    </>
  );
}
