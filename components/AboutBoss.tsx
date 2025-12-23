import Image from 'next/image';

export default function AboutBoss() {
  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Aesthetic purple background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9945FF]/10 blur-[120px] rounded-full -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Image Showcase */}
        <div className="relative group">
          {/* Animated glow border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#14F195] to-[#9945FF] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src="/boss-throne.jpg" // Make sure 22419.jpg is saved as this in /public
              alt="BOSS The Solana Bull on Throne"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right Side: Mission Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-[#14F195] font-mono tracking-[0.2em] uppercase text-sm font-bold">
              Ambassador of the Ecosystem
            </h3>
            <h2 className="text-5xl md:text-7xl font-black italic text-white leading-tight tracking-tighter uppercase">
              Who is <span className="text-[#9945FF]">$BOSS?</span>
            </h2>
          </div>

          <div className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed">
            <p>
              <span className="text-white font-bold">BOSS</span> stands for <span className="text-[#14F195] font-bold">"Bullish On Solana Season."</span> 
            </p>
            <p>
              $BOSS aims to become the Official Solana Bull, always bullish on the Solana Ecosystem, no matter how the market looks. To $BOSS, it's <span className="text-white italic uppercase underline decoration-[#9945FF]">ALWAYS</span> Solana Season!!
            </p>
            <p className="bg-zinc-900/50 p-6 rounded-xl border-l-4 border-[#14F195] text-white italic">
              "$BOSS is here to spread Good Vibes, unite the Solana Community, and become a true ambassador to the Solana Ecosystem!!"
            </p>
          </div>

          {/* Quick Stats/Features */}
          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
              <span className="block text-xs text-zinc-500 uppercase tracking-widest mb-1">Culture</span>
              <span className="text-white font-bold text-lg">High Conviction</span>
            </div>
            <div className="px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
              <span className="block text-xs text-zinc-500 uppercase tracking-widest mb-1">Vibe</span>
              <span className="text-white font-bold text-lg">Relentless Bull</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}