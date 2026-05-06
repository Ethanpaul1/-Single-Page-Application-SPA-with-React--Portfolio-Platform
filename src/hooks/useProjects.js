import { useState } from 'react';
import { initialProjects } from '../data/initialProjects.js';

export function useProjects() {
  const [projects, setProjects] = useState(initialProjects);

  function addProject(projectInput) {
    const newProject = {
      ...projectInput,
      id: `${projectInput.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`,
      client: 'Personal Project',
      category: 'Portfolio',
      tags: ['Project'],
    };

    setProjects((currentProjects) => [newProject, ...currentProjects]);
  }

  return { projects, addProject };
}
