export default function RakhiWish() {
  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-[#FDFBF7] relative overflow-hidden">
      {/* Gentle background decoration */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#602020] opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#C19A6B] opacity-10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-3xl mx-auto space-y-12 z-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="font-serif text-5xl sm:text-7xl text-[#602020] leading-tight">
          Happy Raksha Bandhan,<br/>Komal ❤️
        </h2>
        
        <div className="space-y-8 text-lg sm:text-2xl font-serif text-[#4A433E] italic">
          <p>
            Some relationships are given to us.<br/>
            Some are found.
          </p>
          <p>
            Ours is one of the ones I'm genuinely grateful to have found.
          </p>
          <p className="text-[#2D2D2D] font-bold mt-8 not-italic">
            Happy Raksha Bandhan to my officially unofficial sister. 🫶
          </p>
        </div>
      </div>
    </section>
  );
}
