"use client";

import { useState } from "react";
import { projects } from "../../../dummy/projectsData";
import ProjectList from "./ProjectList";

export default function ProjectsListSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter out design projects from "all" category
  const filteredProjects = selectedCategory === "all" 
    ? projects.filter(project => project.category !== "desain-grafis")
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

