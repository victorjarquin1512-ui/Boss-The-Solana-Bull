import Image from 'next/image';
import AboutBoss from '@/components/AboutBoss';
import Roadmap from '@/components/Roadmap';
import BossGallery from '@/components/BossGallery';
import CommunityCTA from '@/components/CommunityCTA';
import SwapSection from '@/components/SwapSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Intro Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* New Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Boss-Intro.jpg" 
            alt="$BOSS Solana Bull Background"
            fill
            priority // Loads this image first for better performance
            className="object-cover object-center opacity-70"
          />
          {/* Gradient Overlay to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-9xl font-black italic text-white tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
            $BOSS
          </h1>
          <p className="text-xl md:text-2xl text-[#14F195] font-bold mt-4 tracking-widest uppercase drop-shadow-md">
            Bullish On Solana Season
          </p>
          <div className="mt-10">
            <a 
              href="#buy" 
              className="bg-[#14F195] text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white transition-all transform hover:scale-105"
            >
              Join the Charge
            </a>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <AboutBoss />
      <SwapSection />
      <Roadmap />
      <BossGallery />
      <CommunityCTA />
    </main>
  );
}