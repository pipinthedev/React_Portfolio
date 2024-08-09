import React, { useEffect, useRef } from 'react';

const projectImage = "https://placehold.co/600x400";

const projects = [
  { title: 'Project One', description: 'Description of project one.\n New line in description.', link: '#', image: projectImage },
  { title: 'Project Two', description: 'Description of project two.', link: '#', image: projectImage },
  { title: 'Project Three', description: 'Description of project three.', link: '#', image: projectImage },
  { title: 'Project Four', description: 'Description of project four.', link: '#', image: projectImage },
  { title: 'Project Five', description: 'Description of project five.', link: "#", image: projectImage },
];

const Projects = () => {
  const glowContainerRef = useRef(null);

  useEffect(() => {
    const glowContainer = glowContainerRef.current;
    const createGlowElements = () => {
      const glowCount = 5;
      for (let i = 0; i < glowCount; i++) {
        const glow = document.createElement('div');
        glow.classList.add('galaxy');
        glow.style.top = `${Math.random() * 100}%`;
        glow.style.left = `${Math.random() * 100}%`;
        glowContainer.appendChild(glow);
      }
    };
    createGlowElements();
  }, []);

  return (
    <section id="projects" className="bg-background py-16 text-primary relative overflow-hidden">
      <div ref={glowContainerRef} className="absolute inset-0 pointer-events-none"></div>
      <div className="lines absolute inset-0 pointer-events-none">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="twelve">
          <h2 className="text-4xl font-bold text-center typing-animation">Projects</h2>
        </div>
        <div className="mt-8 space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? 'md:grid-cols-[auto,1fr]' : 'md:grid-cols-[1fr,auto]'}`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="flex justify-center">
                    <div className="w-full md:w-3/4 h-64 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#aa06f7]">{project.title}</h3>
                    {project.description.split('\n').map((line, i) => (
                      <p key={i} className="mt-2">{line}</p>
                    ))}
                    <a
                      href={project.link}
                      className="mt-4 project-button inline-block bg-[#282c34] text-[#61dafb] border border-[#61dafb] rounded-lg text-center hover:bg-[#61dafb] hover:text-[#282c34] transition-colors w-28"
                    >
                      View
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#aa06f7]">{project.title}</h3>
                    {project.description.split('\n').map((line, i) => (
                      <p key={i} className="mt-2">{line}</p>
                    ))}
                    <a
                      href={project.link}
                      className="mt-4 project-button inline-block bg-[#282c34] text-[#61dafb] border border-[#61dafb] rounded-lg text-center hover:bg-[#61dafb] hover:text-[#282c34] transition-colors w-28"
                    >
                      View
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full md:w-3/4 h-64 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
