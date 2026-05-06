import { EmptyState } from './EmptyState.jsx';
import { ProjectCard } from './ProjectCard.jsx';

export function ProjectGrid({ projects, searchTerm }) {
  if (projects.length === 0) {
    return <EmptyState searchTerm={searchTerm} />;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
