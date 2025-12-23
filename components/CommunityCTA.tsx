'use client';

import React from 'react';
import { FaTwitter, FaTelegramPlane, FaChartLine, FaCopy } from 'react-icons/fa';

export default function CommunityCTA() {
  const contractAddress = "YOUR_SOLANA_CONTRACT_ADDRESS_HERE"; // Replace with real CA

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    // You can add a toast notification here if you use a library like react-hot-toast
    alert("Contract Address Copied to Clipboard!");
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      {/* Visual Background: Boss Punching the Bear */}
      <div className="absolute inset-0 z-0 opacity-20 scale-110 blur-sm">
        <img 
          src="/boss-vs-bear.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-6xl md:text-8xl font-black italic text-white mb-6 tracking-tighter uppercase">
          Join the <span className="text-[#14F195]">Herd</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">
          Don&apos;t trade against the Bull. Join the strongest, most resilient community on Solana. The season is just beginning.
        </p>

        {/* Contract Address Section */}
        <div className="group relative mb-16 max-w-2xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#14F195] to-[#9945FF] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative bg-zinc-900/90 border border-zinc-700 p-3 rounded-2xl flex flex-col md:flex-row items-center gap-4 backdrop-blur-xl">
            <div className="flex-1 font-mono text-sm text-[#14F195] break-all px-4">
              {contractAddress}
            </div>
            <button 
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-[#14F195] text-black px-6 py-3 rounded-xl font-bold hover:bg-white transition-all w-full md:w-auto justify-center"
            >
              <FaCopy /> COPY CA
            </button>
          </div>
        </div>

        {/* Social Link Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="https://x.com/SolanaBullBoss" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#14F195] transition-all transform hover:-translate-y-1"
          >
            <FaTwitter size={24} /> TWITTER / X
          </a>
          
          <a 
            href="https://t.me/your_telegram" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#229ED9] text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(34,158,217,0.3)]"
          >
            <FaTelegramPlane size={24} /> TELEGRAM
          </a>

          <a 
            href="https://dexscreener.com/solana/your_pair" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-zinc-800 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-zinc-700 transition-all transform hover:-translate-y-1"
          >
            <FaChartLine size={24} /> LIVE CHART
          </a>
        </div>

        {/* Footer Text */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-bold uppercase tracking-widest">
          <div>© {new Date().getFullYear()} $BOSS COMMUNITY</div>
          <div className="text-[#14F195]">It&apos;s Always Solana Season</div>
        </div>
      </div>
    </section>
  );
}