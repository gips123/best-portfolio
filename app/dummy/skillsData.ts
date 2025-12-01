import { Monitor, Server, Palette, Code, Database, PenTool, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  percentage: number;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Creating beautiful, responsive, and interactive user interfaces with modern frameworks.",
    icon: Monitor,
    skills: [
      { name: "React/Next.js", percentage: 90, icon: Code },
      { name: "TypeScript", percentage: 88, icon: Code },
      { name: "Tailwind CSS", percentage: 90, icon: Code },
      { name: "Framer Motion", percentage: 80, icon: Code },
    ],
  },
  {
    title: "Backend Development",
    description: "Building robust, scalable server-side applications and APIs with modern technologies.",
    icon: Server,
    skills: [
      { name: "Node.js", percentage: 80, icon: Server },
      { name: "Express.js", percentage: 80, icon: Server },
      { name: "MySQL", percentage: 88, icon: Database },
      { name: "MongoDB", percentage: 70, icon: Database },
    ],
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and aesthetically pleasing user experiences.",
    icon: Palette,
    skills: [
      { name: "Figma", percentage: 80, icon: PenTool },
      { name: "Canva", percentage: 95, icon: PenTool },
      { name: "Prototyping", percentage: 80, icon: PenTool },
      { name: "User Research", percentage: 88, icon: Users },
    ],
  },
];

export const skillsPageData = {
  title: "MY SKILLS",
  description: "A collection of technologies and tools I use to bring ideas to life. Continuously learning and mastering new skills to stay ahead.",
};

