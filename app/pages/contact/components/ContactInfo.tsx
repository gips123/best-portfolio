"use client";

import { contactInfo } from "../../../dummy/contactData";
import GlassCard from "../../../components/ui/GlassCard";

export default function ContactInfo() {
  return (
    <>
      {contactInfo.map((info, index) => {
        const IconComponent = info.icon;
        return (
          <a key={index} href={info.link} className="block h-full">
            <GlassCard className="h-full">
              <div className="flex items-center gap-4 p-6 h-full" style={{ minHeight: '160px' }}>
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/60 text-sm mb-1">{info.label}</p>
                  <p className="text-white font-semibold text-base sm:text-lg truncate">{info.value}</p>
                </div>
              </div>
            </GlassCard>
          </a>
        );
      })}
    </>
  );
}

