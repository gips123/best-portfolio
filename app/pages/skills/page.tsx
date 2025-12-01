import PageWrapper from "../../components/transitions/PageWrapper";
import PageHeader from "../../components/ui/PageHeader";
import SkillsGrid from "./components/SkillsGrid";
import { skillsPageData } from "../../dummy/skillsData";

export default function Skills() {
  return (
    <PageWrapper>
      <div className="relative min-h-screen w-full bg-[#1a1a1a]">
        <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24">
          <div className="relative w-full max-w-7xl">
            <PageHeader 
              title={skillsPageData.title} 
              description={skillsPageData.description}
            />
            <SkillsGrid />
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
