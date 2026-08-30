import Image from "next/image";
import { komalPhotos } from "./data";

export default function Evidence() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center space-y-10" data-aos="zoom-in">
        
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8B3A3A]">EXHIBIT A</p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2D2D2D] italic">
            "Evidence of the suspect being way too comfortable around her brother."
          </h2>
        </div>

        <div className="relative w-full max-w-lg bg-white p-4 shadow-xl -rotate-1 border border-[#E5E0D8]">
          <div className="relative w-full aspect-[4/5] bg-[#F3EFE6]">
            <Image 
              src={komalPhotos.evidence} 
              alt="Funny evidence" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="font-serif text-sm italic text-[#6D635B]">(Don't kill me for this picture 😂)</p>
          </div>
        </div>

      </div>
    </section>
  );
}
