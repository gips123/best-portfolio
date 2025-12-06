import { notFound } from "next/navigation";
import PageWrapper from "../../../components/transitions/PageWrapper";
import { getProjectById } from "../../../dummy/projectsData";
import ProjectDetail from "./components/ProjectDetail";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Project Detail`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <PageWrapper>
      <ProjectDetail project={project} />
    </PageWrapper>
  );
}

