import React from 'react';

const projects = [
  { title: 'Project One', description: 'Description of project one', link: '#' },
  { title: 'Project Two', description: 'Description of project two', link: '#' },
  { title: 'Project Three', description: 'Description of project three', link: '#' },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-background py-16 text-primary">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-secondary">{project.title}</h3>
              <p className="mt-4">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-secondary">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;