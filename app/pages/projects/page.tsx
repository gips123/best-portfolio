import PageWrapper from "../../components/transitions/PageWrapper";
import ProjectCatalogSection from "./components/ProjectCatalogSection";
import ProjectsSection from "./components/ProjectsSection";
import DesignProjectsShowcase from "./components/DesignProjectsShowcase";
import ProjectsListSection from "./components/ProjectsListSection";

export default function Projects() {
  return (
    <PageWrapper>
      <div className="relative min-h-screen w-full bg-[#1a1a1a]">
        <ProjectCatalogSection />

        <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24">
          <div className="relative w-full max-w-7xl">
            <ProjectsSection />
          </div>
        </section>

        <DesignProjectsShowcase />

        <div id="project-list-section">
          <ProjectsListSection />
        </div>
      </div>
    </PageWrapper>
  );
}
