export default function Timeline() {
  const events = [
    { title: "THE BEGINNING", desc: "Where it all started." },
    { title: "THE RANDOM DAYS", desc: "Too many conversations." },
    { title: "THE CHAOS", desc: "Questionable decisions were made." },
    { title: "THE MEMORIES", desc: "Some moments are worth keeping." },
    { title: "TODAY", desc: "Still here. Still annoying each other." }
  ];

  return (
    <section className="py-24 px-6 bg-[#FDFBF7]">
      <div className="max-w-2xl mx-auto space-y-16">
        
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#8B3A3A]">OUR LITTLE TIMELINE</h2>
        </div>

        <div className="relative border-l-2 border-[#E5E0D8] ml-4 sm:ml-8 space-y-12 py-4">
          {events.map((event, i) => (
            <div key={i} className="relative pl-8 sm:pl-12" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="absolute -left-[5px] top-1.5 w-[8px] h-[8px] rounded-full bg-[#8B3A3A] ring-4 ring-[#FDFBF7]" />
              <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mb-1">{event.title}</h3>
              <p className="text-sm sm:text-base text-[#6D635B] font-serif italic">{event.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
