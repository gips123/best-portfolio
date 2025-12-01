"use client";

import { motion } from "framer-motion";
import NavigationCard from "../../../components/navigation/NavigationCard";

interface HeroContentProps {
}

export default function HeroContent({}: HeroContentProps) {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-3">
        <motion.div 
          className="flex items-center overflow-hidden"
          initial={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-normal text-white uppercase tracking-tighter leading-[0.9] text-[85px]" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            CREATIVE
          </h2>
        </motion.div>
        <motion.div 
          className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-4 shadow-xl "
          initial={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <h2 className="font-normal text-white uppercase tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 'clamp(24px, 4vw, 48px)' }}>
              GHIFARY AHMAD ALFIRDAUSY
            </h2>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="w-full flex items-center justify-center my-3 overflow-hidden"
        initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="w-full font-normal text-white uppercase tracking-tighter leading-[0.9] text-center" style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: '220px', maxWidth: '100%' }}>
          PORTFOLIO
        </h2>
      </motion.div>

      <div className="w-full flex flex-nowrap items-center justify-center gap-3 mt-4">
        <NavigationCard
          href="/pages/about"
          title="About"
          description="Get to know me"
        />
        <NavigationCard
          href="/pages/skills"
          title="Skills"
          description="My expertise"
        />
        <NavigationCard
          href="/pages/projects"
          title="Projects"
          description="View my work"
        />
        <NavigationCard
          href="/pages/contact"
          title="Contact"
          description="Let's connect"
        />
      </div>
    </>
  );
}

