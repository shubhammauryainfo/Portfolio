export default function Signature() {
  return (
    <footer className="py-24 px-6 bg-[#1F1D1B] text-[#FDFBF7] text-center flex flex-col items-center">
      <div className="max-w-md w-full border-t border-[#3A3632] pt-16 space-y-8">
        
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C08081]">OFFICIALLY APPROVED ❤️</p>
          <p className="text-[10px] font-mono tracking-widest text-[#736A62]">AUTHORIZED BY</p>
        </div>

        <div>
          <p className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl text-[#E5E0D8] -rotate-3 my-8 whitespace-nowrap">
            Shubham Maurya
          </p>
          <div className="w-48 h-px bg-[#3A3632] mx-auto mt-2" />
        </div>

        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#736A62] mt-12">
          Made with memories, madness<br/>& a little brotherly love. ❤️
        </p>

      </div>
    </footer>
  );
}
