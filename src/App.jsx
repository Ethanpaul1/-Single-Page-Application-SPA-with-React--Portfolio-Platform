import { useMemo, useState } from 'react';
import { ProjectForm } from './components/ProjectForm.jsx';
import { ProjectGrid } from './components/ProjectGrid.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { useProjects } from './hooks/useProjects.js';

function App() {
  const { projects, addProject } = useProjects();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return projects;
    }

    return projects.filter((project) => {
      const searchableText = [
        project.title,
        project.description,
        project.client,
        project.category,
        ...(project.tags || []),
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [projects, searchTerm]);

  return (
    <main className="app-shell">
      <h1 id="page-title">Personal Project Showcase App</h1>

      <section className="content-stack">
        <section className="form-panel" aria-labelledby="form-title">
          <h2 id="form-title">Add Project</h2>
          <ProjectForm onAddProject={addProject} />
        </section>

        <section className="portfolio-panel" aria-labelledby="projects-title">
          <h2 id="projects-title" className="sr-only">
            Projects
          </h2>
          <SearchBar value={searchTerm} onChange={setSearchTerm} resultCount={filteredProjects.length} />
          <ProjectGrid projects={filteredProjects} searchTerm={searchTerm} />
        </section>
      </section>
    </main>
  );
}

export default App;
