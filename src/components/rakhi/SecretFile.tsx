export default function SecretFile({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1F1D1B] text-[#F9F6F0] p-6 text-center">
      <div className="w-full max-w-md border border-[#3A3632] bg-[#272421] p-8 shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#602020]" />
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#A69C92] mb-1">Classified File</h2>
            <p className="text-sm font-mono text-[#8B3A3A]">RAKHI/2026/08/28</p>
          </div>

          <div className="border-t border-b border-[#3A3632] py-4 my-6 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A69C92]">Subject</p>
              <h1 className="font-serif text-3xl mt-1 tracking-wide">KOMAL YADAV</h1>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A69C92]">Classification</p>
                <p className="text-sm font-mono mt-1">PERSONAL</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A69C92]">Status</p>
                <p className="text-sm font-mono mt-1 text-[#C08081]">PERMANENTLY APPROVED ❤️</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#A69C92] italic">A confidential message has been prepared for you.</p>

          <button 
            onClick={onOpen}
            className="w-full mt-4 bg-[#602020] hover:bg-[#8B3A3A] text-white py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            Open File →
          </button>

          <p className="text-[10px] uppercase tracking-wider text-[#736A62] mt-4">Authorized recipient: Komal Yadav</p>
        </div>
      </div>
    </div>
  );
}
