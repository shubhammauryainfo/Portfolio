import Image from "next/image";
import { komalPhotos } from "./data";

export default function EmotionalLetter() {
  return (
    <section className="py-32 px-6 bg-[#272421] text-[#FDFBF7]">
      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 sm:gap-16 items-center">
        
        <div className="relative w-full max-w-sm mx-auto aspect-[3/4] p-3 bg-[#FDFBF7] shadow-2xl rotate-2" data-aos="fade-right">
          <div className="relative w-full h-full">
            <Image 
              src={komalPhotos.emotional} 
              alt="Emotional photo" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <div className="space-y-10" data-aos="fade-up">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#E5E0D8]">
            Things I Probably Don't Say Enough ❤️
          </h2>
          
          <div className="space-y-6 font-serif text-lg sm:text-xl text-[#A69C92] leading-relaxed italic border-l-2 border-[#8B3A3A] pl-6 sm:pl-8 py-2">
            <p>
              Life has a funny way of giving us people we never expected to become important.
            </p>
            <p>
              You were someone I met in college, but somewhere along the way, you became much more than just a college friend.
            </p>
            <p>
              We've had our share of jokes, arguments, nonsense and unforgettable moments. But behind all of that, I genuinely want you to know that I'm grateful for this bond.
            </p>
            <p>
              I may not always say it, and I may spend more time irritating you than appreciating you 😂, but I'll always wish the best for you.
            </p>
            <p>
              Wherever life takes you, I hope you keep smiling, keep growing and keep being yourself.
            </p>
            <p className="text-[#C08081] pt-4">
              And yes... you're stuck with your brother permanently. ❤️
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
