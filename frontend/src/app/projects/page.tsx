'use client';

import { useEffect, useState } from 'react';
import { projectsAPI } from '@/lib/api';
import { Project } from '@/types';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectsAPI.getAll();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-white text-xl">Loading projects...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My Projects
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-blue-400 mb-4">
                Tech: {project.tech_stack}
              </p>
              <div className="flex gap-4">
                {project.github_url && (
                  <a 
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demo_url && (
                  <a 
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-gray-400">No projects found. Add some from your backend!</p>
        )}
      </div>
    </main>
  );
}
