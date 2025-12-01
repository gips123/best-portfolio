"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import { Project } from "../../../dummy/projectsData";
import TechTag from "../../../components/ui/TechTag";

interface ProjectCarouselProps {
  currentProject: Project | undefined;
  currentIndex: number;
  totalProjects: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export default function ProjectCarousel({
  currentProject,
  currentIndex,
  totalProjects,
  onPrev,
  onNext,
  onGoTo,
}: ProjectCarouselProps) {
  if (!currentProject) {
    return (
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-12 text-center">
        <p className="text-white/70 text-lg">No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-30"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="relative h-[300px] lg:h-auto overflow-hidden">
            <Image
              src={currentProject.imageUrl}
              alt={currentProject.title}
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
              <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 leading-tight">
                {currentProject.imageTitle}
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base mb-4 leading-relaxed max-w-2xl">
                {currentProject.imageDescription}
              </p>
              <button className="self-start bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                {currentProject.buttonText}
              </button>
              
              <div className="flex gap-1.5 mt-4">
                {[0, 1, 2].map((dot) => (
                  <div
                    key={dot}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      dot === 0 ? 'bg-white' : 'bg-white/30'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-semibold text-xs">{currentProject.number}</span>
                </div>
                <Star className="w-4 h-4 text-white/60" />
              </div>

              <h2 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 leading-tight">
                {currentProject.title}
              </h2>

              <p className="text-white/80 text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
                {currentProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {currentProject.techStack.map((tech, index) => (
                  <TechTag key={index} tech={tech} />
                ))}
              </div>
            </div>

            <button className="self-start bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
              Detail
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-6">
        {Array.from({ length: totalProjects }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoTo(index)}
            className={`transition-all duration-300 rounded-full hover:bg-white/60 ${
              index === currentIndex
                ? 'w-2.5 h-2.5 bg-white'
                : 'w-2 h-2 bg-white/30'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

