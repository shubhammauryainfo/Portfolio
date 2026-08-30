"use client";

import { useState } from "react";
import Image from "next/image";
import { komalPhotos, Memory } from "./data";
import Lightbox from "./Lightbox";

export default function MemoryGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % komalPhotos.gallery.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + komalPhotos.gallery.length) % komalPhotos.gallery.length);
    }
  };

  const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];
  const margins = ["mt-0", "mt-12", "mt-4", "mt-16", "mt-8"];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="text-center space-y-4" data-aos="fade-up">
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2D2D2D]">11 Pieces of Evidence 📸</h2>
          <p className="text-lg font-serif italic text-[#6D635B]">Collected from the highly classified Komal Yadav archive.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {komalPhotos.gallery.map((memory, index) => (
            <button 
              key={memory.id}
              onClick={() => openLightbox(index)}
              className={`group relative bg-white p-3 sm:p-4 shadow-md transition-all duration-300 hover:scale-105 hover:z-10 focus:outline-none ${rotations[index % rotations.length]} ${margins[index % margins.length]} w-full text-left`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative aspect-square w-full mb-3 overflow-hidden bg-[#F3EFE6]">
                <Image 
                  src={memory.src} 
                  alt={memory.alt} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8B3A3A] mb-1">{memory.title}</p>
              <p className="font-serif text-sm italic text-[#4A433E] line-clamp-2">{memory.caption}</p>
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <Lightbox 
          memory={komalPhotos.gallery[selectedIndex]} 
          onClose={closeLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
