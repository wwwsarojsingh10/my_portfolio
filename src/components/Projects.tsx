import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "TypeScript", "Django"],
      imageUrl: "/project1.jpg",
      githubUrl: "https://github.com/yourusername/project1"
    },
    // Add more projects here
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
