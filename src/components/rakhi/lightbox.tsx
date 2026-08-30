import { useEffect } from "react";
import Image from "next/image";
import { Memory } from "./data";

type LightboxProps = {
  memory: Memory;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({ memory, onClose, onNext, onPrev }: LightboxProps) {
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0D0D0D]/95 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-sm tracking-widest uppercase hover:text-[#C08081] transition z-50"
        aria-label="Close lightbox"
      >
        Close
      </button>

      <div 
        className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[70vh] mb-6">
          <Image 
            src={memory.src}
            alt={memory.alt}
            fill
            className="object-contain"
            sizes="100vw"
            quality={90}
          />
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C08081]">{memory.title}</p>
          <p className="font-serif text-lg text-[#FDFBF7] italic">{memory.caption}</p>
        </div>

        <button 
          onClick={onPrev}
          className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 p-4 text-white hover:text-[#C08081] transition"
          aria-label="Previous image"
        >
          ←
        </button>

        <button 
          onClick={onNext}
          className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 p-4 text-white hover:text-[#C08081] transition"
          aria-label="Next image"
        >
          →
        </button>
      </div>
    </div>
  );
}
