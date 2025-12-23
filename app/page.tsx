import AboutBoss from '@/components/AboutBoss';
import Roadmap from '@/components/Roadmap';
import BossGallery from '@/components/BossGallery';
import CommunityCTA from '@/components/CommunityCTA';
import SwapSection from '@/components/SwapSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Intro Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="/boss-bg.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-9xl font-black italic text-white tracking-tighter shadow-2xl">
            $BOSS
          </h1>
          <p className="text-xl md:text-2xl text-[#14F195] font-bold mt-4 tracking-widest uppercase">
            Bullish On Solana Season
          </p>
        </div>
      </section>

      <AboutBoss />
      <SwapSection />
      <Roadmap />
      <BossGallery />
      <CommunityCTA />
    </main>
  );
}