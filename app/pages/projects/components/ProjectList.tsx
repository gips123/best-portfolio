"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project, categories } from "../../../dummy/projectsData";
import GlassButton from "../../../components/ui/GlassButton";
import TechTag from "../../../components/ui/TechTag";
import GlassCard from "../../../components/ui/GlassCard";

interface ProjectListProps {
  selectedCategory: string;
  projects: Project[];
  onCategoryChange: (categoryId: string) => void;
  onProjectClick: (index: number) => void;
}

export default function ProjectList({
  selectedCategory,
  projects,
  onCategoryChange,
  onProjectClick,
}: ProjectListProps) {
  return (
    <section className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((category) => (
            <GlassButton
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              active={selectedCategory === category.id}
            >
              {category.name}
            </GlassButton>
          ))}
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <GlassCard
                key={project.id}
                onClick={() => onProjectClick(index)}
                className="cursor-pointer"
              >
                <div className="p-4 sm:p-6">
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-white/10 border border-white/20 rounded-lg px-2 py-1 backdrop-blur-sm">
                      <span className="text-white text-xs font-medium">{project.number}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <TechTag key={techIndex} tech={tech} className="px-2.5 py-1" />
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-lg text-white/70 text-xs font-medium backdrop-blur-sm">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <button className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                      View Detail
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        ) : (
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-12 text-center">
            <p className="text-white/70 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

