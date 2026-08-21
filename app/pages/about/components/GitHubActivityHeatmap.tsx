"use client";

import { siteConfig } from "../../../config/siteConfig";

function getHeatmapUrl(username: string) {
  const params = new URLSearchParams({
    darkMode: "false",
    transparent: "false",
    shape: "square",
  });

  return `https://gh-heat.anishroy.com/api/${username}/svg?${params.toString()}`;
}

export default function GitHubActivityHeatmap() {
  const { githubUsername } = siteConfig;
  const heatmapUrl = getHeatmapUrl(githubUsername);
  const profileUrl = `https://github.com/${githubUsername}`;

  return (
    <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

      <div className="relative z-10 p-3 sm:p-4">
        <div className="overflow-x-auto rounded-xl bg-white p-4 sm:p-5 shadow-inner">
          <img
            src={heatmapUrl}
            alt={`GitHub contribution activity for ${githubUsername}`}
            loading="lazy"
            decoding="async"
            className="w-full min-w-[640px] h-auto contrast-110 saturate-125"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 sm:px-6 py-3 border-t border-white/10 bg-white/5">
        <p className="text-white/60 text-sm">Contributions over the last year</p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-300"
        >
          @{githubUsername}
        </a>
      </div>
    </div>
  );
}
