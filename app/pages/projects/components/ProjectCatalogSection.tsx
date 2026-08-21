"use client";

import { motion } from "framer-motion";
import { projectCatalog, projectCatalogSectionData } from "../../../dummy/projectCatalogData";

export default function ProjectCatalogSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <h2
            className="text-white font-normal uppercase tracking-tight mb-3"
            style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            {projectCatalogSectionData.title}
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-3xl">
            {projectCatalogSectionData.subtitle}
          </p>
        </motion.div>

        <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 opacity-50" />
          <div className="absolute top-0 left-0 w-full h-1/2 rounded-3xl bg-gradient-to-b from-white/20 to-transparent opacity-30" />

          <ul className="relative z-10 divide-y divide-white/10">
            {projectCatalog.map((project, index) => (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="px-5 sm:px-8 py-4 sm:py-5 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-white/40 text-sm font-medium tabular-nums sm:w-8 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-base sm:text-lg">
                      {project.title}
                    </h3>
                    <p className="text-white/65 text-sm sm:text-base mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
