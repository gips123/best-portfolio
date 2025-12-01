"use client";

import HeroSection from "./HeroSection";
import MainCard from "./MainCard";
import HeroContent from "./HeroContent";

export default function HomeClient() {
  return (
    <>
      <HeroSection />

      <MainCard>
        <HeroContent />
      </MainCard>
    </>
  );
}

