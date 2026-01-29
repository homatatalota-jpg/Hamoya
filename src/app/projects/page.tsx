import { ProjectsClient } from "@/components/ProjectsClient";
import { Section } from "@/components/Section";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div>
      <Section>
        <ProjectsClient projects={projects} />
      </Section>
    </div>
  );
}
