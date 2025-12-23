'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const bossImages = [
  { src: '/boss-cyber.jpg', label: 'Cyber Boss' },
  { src: '/boss-throne.jpg', label: 'The King' },
  { src: '/boss-spartan.jpg', label: 'Spartan Warrior' },
  { src: '/boss-lambo.jpg', label: 'Lambo Lifestyle' },
  { src: '/boss-vs-bear.jpg', label: 'Bear Destroyer' },
  { src: '/boss-poolside.jpg', label: 'Solana Summer' },
];

export default function BossGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bossImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black italic text-white tracking-tighter uppercase">
            The <span className="text-[#14F195]">Boss</span> Archive
          </h2>
          <p className="text-zinc-500 mt-4 font-mono tracking-widest uppercase">Visualizing the Solana Season</p>
        </div>

        {/* Main Featured Image */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border-4 border-zinc-900 shadow-2xl">
          <Image
            src={bossImages[currentIndex].src}
            alt={bossImages[currentIndex].label}
            fill
            className="object-cover transition-opacity duration-1000"
            priority
          />
          {/* Overlay Label */}
          <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            <p className="text-[#14F195] font-bold italic uppercase tracking-wider">
              {bossImages[currentIndex].label}
            </p>
          </div>
        </div>

        {/* Thumbnail Row */}
        <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-4 no-scrollbar">
          {bossImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                currentIndex === index 
                ? 'ring-4 ring-[#9945FF] scale-110 z-10' 
                : 'opacity-40 hover:opacity-100'
              }`}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}