'use client';

import React, { useEffect } from 'react';

export default function SwapSection() {
  const BOSS_CA = "YOUR_SOLANA_CONTRACT_ADDRESS_HERE"; // REPLACE THIS

  useEffect(() => {
    const initJupiter = () => {
      if (window.Jupiter) {
        window.Jupiter.init({
          displayMode: "integrated",
          integratedTargetId: "integrated-terminal",
          endpoint: "https://api.mainnet-beta.solana.com", // Recommended: Use a private RPC from Helius or Quicknode
          formProps: {
            initialOutputMint: BOSS_CA, // Automatically sets $BOSS as the token to buy
            fixedOutputMint: false,      // Set to true if you want them to ONLY be able to buy $BOSS
          },
          containerStyles: {
            maxHeight: '600px',
          },
          containerClassName: "rounded-3xl overflow-hidden border-2 border-[#14F195] shadow-[0_0_30px_rgba(20,241,149,0.2)]",
        });
      }
    };

    // Attempt to initialize if script is already loaded
    if (window.Jupiter) {
      initJupiter();
    } else {
      // Wait for the script to be ready
      document.addEventListener('jupiterTerminalReady', initJupiter);
    }
  }, [BOSS_CA]);

  return (
    <section id="buy" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#14F195]/10 blur-[120px] rounded-full z-0" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black italic text-white tracking-tighter uppercase mb-4">
            Secure Your <span className="text-[#14F195]">$BOSS</span>
          </h2>
          <p className="text-zinc-500 font-bold tracking-widest uppercase">Swap SOL or USDC instantly below</p>
        </div>

        {/* The Terminal Container */}
        <div id="integrated-terminal" className="w-full min-h-[600px] bg-black rounded-3xl">
          {/* Jupiter Terminal will inject itself here */}
          <div className="flex items-center justify-center h-[600px] text-zinc-700 animate-pulse">
            Loading Jupiter Swap...
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-zinc-500 text-sm">
            Powered by Jupiter Aggregator for the best prices on Solana.
          </p>
        </div>
      </div>
    </section>
  );
}