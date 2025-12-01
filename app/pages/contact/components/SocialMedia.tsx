"use client";

import { MessageSquare } from "lucide-react";
import { socialLinks } from "../../../dummy/contactData";
import GlassCard from "../../../components/ui/GlassCard";

export default function SocialMedia() {
  return (
    <GlassCard hover={false}>
      <div className="p-6">
        <h3 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Social Media
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm text-white/70 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/15 hover:border-white/30`}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </GlassCard>
  );
}

