import React from 'react';

const phases = [
  {
    title: "Phase 1: Launch & Organic Expansion",
    mcap: "$0 → $30K Market Cap",
    items: [
      "Build a strong, high-conviction bull community",
      "Establish the Bull mentality culture",
      "Meme momentum & bull-themed challenges",
      "Strengthen presence on X + Telegram + TikTok",
      "Post Daily Bullish Jokes on X",
      "DexScreener update at $30K"
    ],
    status: "Active"
  },
  {
    title: "Phase 2: First Acceleration & KOL Boost",
    mcap: "$30K → $100K Market Cap",
    items: [
      "Expand visibility across Solana ecosystem",
      "Position BOSS as a recognizable culture coin",
      "Enhanced branding & visuals on DexScreener",
      "Scale TikTok story-driven narratives",
      "Partner with trusted KOLs at $100K"
    ],
    status: "Upcoming"
  },
  {
    title: "Phase 3: Momentum & Market Dominance",
    mcap: "$100K → $500K Market Cap",
    items: [
      "Aggressive distribution across Solana CT",
      "Daily community-driven bull-run narratives",
      "Strategic collaborations with Solana projects",
      "Trending on DexScreener & Solana trackers",
      "Launch of BOSS Bull lore and slogans"
    ],
    status: "Upcoming"
  },
  {
    title: "Phase 4: Brand Establishment",
    mcap: "$500K → $1M+ Market Cap",
    items: [
      "Cement $BOSS as a top-tier Solana brand",
      "Large-scale influencer & ecosystem partnerships",
      "Community-led marketing initiatives & contests",
      "High-quality visuals & viral short-form content",
      "Position BOSS as a symbol of Solana strength"
    ],
    status: "Upcoming"
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#14F195]/5 blur-[100px] rounded-full -ml-32 -mb-32" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4">
            The <span className="text-[#14F195]">Bullish</span> Path
          </h2>
          <p className="text-zinc-500 text-lg uppercase tracking-widest font-bold">Project Roadmap</p>
        </div>
        
        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className={`group border-l-4 ${phase.status === 'Active' ? 'border-[#14F195]' : 'border-zinc-800'} pl-8 relative transition-all duration-300 hover:border-[#9945FF]`}
            >
              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[11px] top-0 w-[18px] h-[18px] rounded-full border-4 border-black ${phase.status === 'Active' ? 'bg-[#14F195] shadow-[0_0_15px_#14F195]' : 'bg-zinc-800'} group-hover:bg-[#9945FF] transition-colors`} />
              
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${phase.status === 'Active' ? 'bg-[#14F195]/20 text-[#14F195]' : 'bg-zinc-900 text-zinc-500'}`}>
                  {phase.mcap}
                </span>
                <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight">{phase.title}</h3>
              </div>
              
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 mt-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    <span className="text-[#14F195] font-bold mt-1">✓</span>
                    <span className="text-sm md:text-base leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}