"use client";

import Image from "next/image";
import HeroSection from "./HeroSection";
import MainCard from "./MainCard";
import HeroContent from "./HeroContent";

export default function HomeClient() {
  return (
    <>
      <HeroSection />

      <div className="relative w-full h-full flex flex-row items-center justify-start md:justify-center gap-3 sm:gap-4 overflow-hidden">
        {/* Mobile Image - Right Side - Behind Card - Full Screen */}
        <div className="absolute md:hidden right-0 top-0 bottom-0 w-[160vw] h-screen z-[1] opacity-70 pointer-events-none translate-x-[25%]">
          <Image
            src="/assets/gips2.png"
            alt="Ghifary Ahmad"
            fill
            className="object-cover object-right grayscale"
            priority
            sizes="150vw"
          />
        </div>
        
        <div className="relative flex-none md:flex-none md:max-w-[800px] z-10">
          <MainCard>
            <HeroContent />
          </MainCard>
        </div>
      </div>
    </>
  );
}

