"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: 50,
        filter: "blur(10px)",
      }}
      animate={{ 
        opacity: 1, 
        x: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="w-full min-h-screen bg-[#1a1a1a]"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {children}
    </motion.div>
  );
}

