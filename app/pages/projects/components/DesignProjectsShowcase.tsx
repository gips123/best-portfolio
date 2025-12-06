"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, Project } from "../../../dummy/projectsData";
import DesignProjectModal from "./DesignProjectModal";

export default function DesignProjectsShowcase() {
  const designProjects = projects.filter(project => project.category === "desain-grafis");
  const [selectedDesignProject, setSelectedDesignProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get first design project for center phone mockup
  const centerProject = designProjects[0] || null;
  // Get 6 projects for left side (starting from index 1)
  const leftProjects = designProjects.slice(1, 7);
  // Get 6 projects for right side (starting from index 7)
  const rightProjects = designProjects.slice(7, 13);

  const handleProjectClick = (project: Project) => {
    setSelectedDesignProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDesignProject(null);
  };

  if (designProjects.length === 0) return null;

  return (
    <>
      <section className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24 flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center w-full"
          >
            <h2 className="text-white font-normal uppercase tracking-tight mb-4" style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 'clamp(32px, 5vw, 48px)' }}>
              Design Portfolio
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
              Explore my creative design work and visual projects
            </p>
          </motion.div>

          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[1400px] mx-auto">
            {/* Left Side - 6 Design Images */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3" style={{ width: '280px' }}>
              {leftProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative aspect-[3/4] rounded-lg overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 cursor-pointer group hover:scale-105 transition-transform duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>

            {/* Center - Phone Mockup */}
            {centerProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center flex-shrink-0"
              >
                <div className="relative w-full max-w-[500px] sm:max-w-[500px] md:max-w-[400px] mx-auto cursor-pointer group">
                  {/* Phone Frame Image */}
                  <div className="relative">
                    <Image
                      src="/design/handphone.png"
                      alt="Phone Mockup"
                      width={500}
                      height={1000}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Right Side - 6 Design Images */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3" style={{ width: '280px' }}>
              {rightProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative aspect-[3/4] rounded-lg overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 cursor-pointer group hover:scale-105 transition-transform duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <DesignProjectModal
        project={selectedDesignProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

