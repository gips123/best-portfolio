"use client";

import { useState } from "react";
import { projects } from "../../../dummy/projectsData";
import ProjectList from "./ProjectList";

export default function ProjectsListSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter out design projects from "all" category
  // Also filter out duplicate ifortepay entries (only show ID 5 in "all" category)
  const filteredProjects = selectedCategory === "all" 
    ? projects.filter(project => {
        if (project.category === "desain-grafis") return false;
        // Only show original ifortepay (ID 5) in "all" category, exclude frontend/backend variants
        if (project.title.toLowerCase().includes("ifortepay") && project.id !== 5) return false;
        return true;
      })
    : projects.filter(project => project.category === selectedCategory);

  const goToProject = (index: number) => {
    if (index >= 0 && index < filteredProjects.length) {
      setCurrentIndex(index);
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentIndex(0);
  };

  return (
    <ProjectList
      selectedCategory={selectedCategory}
      projects={filteredProjects}
      onCategoryChange={handleCategoryChange}
      onProjectClick={goToProject}
    />
  );
}

