"use client";

import { useState } from "react";
import Image from "next/image";
import { komalPhotos } from "./data";

export default function FinalReveal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Simple custom confetti effect logic would go here if needed, 
    // but we stick to lightweight CSS transforms.
  };

  return (
    <section className="py-32 px-6 bg-[#272421] text-center flex flex-col items-center min-h-[70vh] justify-center">
      <div className="max-w-2xl mx-auto w-full">
        
        {!isOpen ? (
          <div className="space-y-10 transition-all duration-700" data-aos="fade-up">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl text-[#FDFBF7]">One Last Thing... 👀</h2>
              <p className="text-[#A69C92] font-serif italic text-lg sm:text-xl max-w-sm mx-auto">
                There's one message left.<br/>
                And yes...<br/>
                this one is serious.<br/>
                Probably.
              </p>
            </div>
            
            <button 
              onClick={handleOpen}
              className="bg-[#602020] hover:bg-[#8B3A3A] text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              OPEN THIS ❤️
            </button>
          </div>
        ) : (
          <div className="space-y-12" data-aos="zoom-in" data-aos-duration="1500">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] p-3 bg-white shadow-2xl rotate-1">
              <div className="relative w-full h-full">
                <Image 
                  src={komalPhotos.final} 
                  alt="Final photo" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="space-y-6 text-[#FDFBF7] font-serif text-xl sm:text-2xl italic leading-relaxed px-4">
              <p>No matter how much we grow up,</p>
              <p>how busy life gets,</p>
              <p>or how far life takes us...</p>
              <p className="text-[#C08081] font-bold not-italic pt-4">you'll always have a brother cheering for you. ❤️</p>
              <p className="text-[#A69C92] pt-8">— Shubham Maurya</p>
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
}
