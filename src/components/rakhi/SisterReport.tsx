export default function SisterReport() {
  return (
    <section className="py-24 px-6 bg-[#F3EFE6]">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        
        <div className="bg-[#FDFBF7] border border-[#E5E0D8] p-8 sm:p-12 shadow-xl relative overflow-hidden group">
          
          {/* Stamps */}
          <div className="absolute top-10 right-10 rotate-12 border-4 border-[#8B3A3A] text-[#8B3A3A] px-4 py-2 opacity-80 pointer-events-none group-hover:scale-105 transition-transform duration-500">
            <p className="text-xl font-bold uppercase tracking-widest font-serif">APPROVED</p>
          </div>
          
          <div className="absolute bottom-16 right-16 -rotate-12 border-2 border-[#2D2D2D] text-[#2D2D2D] px-3 py-1 opacity-40 pointer-events-none">
            <p className="text-sm font-bold uppercase tracking-widest">TOP SECRET</p>
          </div>

          <div className="text-center border-b-2 border-[#2D2D2D] pb-8 mb-8 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2D2D] tracking-wide">OFFICIAL SISTER REPORT™</h2>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6D635B]">Classified Documentation</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B3A3A]">File No.</p>
                <p className="font-mono text-sm mt-1">RAKHI/2026/08/28</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B3A3A]">Subject</p>
                <p className="font-mono text-sm mt-1">KOMAL YADAV</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B3A3A]">Case</p>
                <p className="font-serif italic text-base mt-1 text-[#2D2D2D]">The Most Annoying Yet Irreplaceable Sister</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B3A3A]">Status</p>
                <p className="font-mono text-sm mt-1 font-bold text-[#602020]">PERMANENTLY APPROVED ❤️</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 font-mono text-sm sm:text-base border-t border-[#E5E0D8] pt-8">
            <div>
              <div className="flex justify-between mb-1">
                <span>UNNECESSARY FIGHTS</span>
                <span>80%</span>
              </div>
              <div className="text-[#8B3A3A] tracking-widest">████████░░</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>RANDOM ADVICE</span>
                <span>100%</span>
              </div>
              <div className="text-[#8B3A3A] tracking-widest">██████████</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>ANNOYING LEVEL</span>
                <span>90%</span>
              </div>
              <div className="text-[#8B3A3A] tracking-widest">█████████░</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>SUPPORT LEVEL</span>
                <span>100%</span>
              </div>
              <div className="text-[#8B3A3A] tracking-widest">██████████</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>SISTER STATUS</span>
                <span>100%</span>
              </div>
              <div className="text-[#8B3A3A] tracking-widest">██████████</div>
            </div>
          </div>

          <div className="mt-12 bg-[#F9F6F0] p-6 border-l-4 border-[#602020]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B3A3A] mb-2">Terms & Conditions</p>
            <p className="font-serif text-sm italic text-[#4A433E]">
              This sisterhood cannot be cancelled, returned, exchanged or transferred. <br className="hidden sm:block"/>
              Once a sister, always a sister.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
