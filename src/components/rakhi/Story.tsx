import Image from "next/image";
import { komalPhotos } from "./data";

export default function Story() {
  return (
    <section className="py-24 px-6 bg-[#F9F6F0]">
      <div className="max-w-4xl mx-auto space-y-20">
        
        <div className="text-center space-y-4" data-aos="fade-up">
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2D2D2D]">We Didn't Start as Siblings.</h2>
          <p className="text-lg font-serif italic text-[#6D635B]">Funny how some relationships are never planned.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-[#4A433E] text-base sm:text-lg leading-relaxed" data-aos="fade-right">
            <p>We weren't born as siblings.</p>
            <p>We didn't grow up in the same house.</p>
            <p>We didn't even know each other before college. We simply met.</p>
            <p>
              And somewhere between college days, random conversations, stupid arguments, 
              laughing at nonsense and making memories...
            </p>
            <p className="font-serif text-xl sm:text-2xl text-[#602020] italic pt-4">
              you became my sister.
            </p>
          </div>

          <div className="relative space-y-8" data-aos="fade-left">
            <div className="relative w-4/5 aspect-[4/3] bg-white p-3 shadow-md -rotate-2 mx-auto md:ml-auto md:mr-0 z-10">
              <div className="relative w-full h-full">
                <Image src={komalPhotos.story1} alt="Story 1" fill className="object-cover" />
              </div>
            </div>
            <div className="relative w-3/4 aspect-[3/4] bg-white p-3 shadow-md rotate-3 mx-auto md:ml-0 md:-mt-20 z-0">
              <div className="relative w-full h-full">
                <Image src={komalPhotos.story2} alt="Story 2" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-6 text-[#4A433E] text-lg leading-relaxed" data-aos="fade-up">
          <p>
            Maybe the best relationships in life aren't always the ones we're born with.
          </p>
          <p className="font-serif italic text-xl">
            Sometimes they're the ones we find.
          </p>
        </div>

      </div>
    </section>
  );
}
