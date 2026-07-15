import { ProjectCard } from "~/components/project-card";
import { getAllProjects } from "~/lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  if (projects.length === 0) {
    return <p className="text-fg4">Projects coming soon.</p>;
  }

  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
