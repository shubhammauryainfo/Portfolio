import Image from "next/image";
import { komalPhotos } from "./data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div className="space-y-8" data-aos="fade-up">
          <div className="inline-block border border-[#2D2D2D] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
            Official Sibling Department™
          </div>
          
          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#2D2D2D]">
              Hey Komal ❤️
            </h1>
            <p className="text-lg sm:text-xl text-[#6D635B] font-serif italic">
              You scanned the QR.<br/>
              So I guess there's no going back now. 😌
            </p>
          </div>

          <p className="text-base text-[#4A433E] max-w-md leading-relaxed">
            This is a tiny collection of memories, random moments, unnecessary nonsense and one very important reminder...
          </p>

          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-[#602020] pb-1 text-[#602020]">
              Scroll Down ↓
            </span>
          </div>
        </div>

        <div className="relative" data-aos="fade-left">
          <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-white p-4 shadow-xl rotate-3 transition-transform hover:rotate-1 duration-500">
            <div className="relative w-full h-full border border-[#E5E0D8]">
              <Image 
                src={komalPhotos.hero}
                alt="Komal Hero Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-[#F9F6F0] p-4 shadow-lg max-w-[200px] border border-[#E5E0D8] -rotate-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#8B3A3A] mb-1">Evidence #001</p>
              <p className="font-serif text-sm italic text-[#2D2D2D]">Yes, we actually had good memories.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
