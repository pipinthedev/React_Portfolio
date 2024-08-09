import React, { useEffect, useRef } from 'react';

const experiences = [
  { 
    role: 'Frontend Developer', 
    company: 'Company One', 
    duration: '2020-2022', 
    description: 'Worked on XYZ.', 
    logo: 'https://via.placeholder.com/80/0000FF/808080?text=Company+One'
  },
  { 
    role: 'Backend Developer', 
    company: 'Company Two', 
    duration: '2018-2020', 
    description: 'Worked on ABC.', 
    logo: 'https://via.placeholder.com/80/FF0000/FFFFFF?text=Company+Two'
  },
];

const Experience = () => {
  const glowContainerRef = useRef(null);

  useEffect(() => {
    const glowContainer = glowContainerRef.current;
    const createFireflies = () => {
      const fireflyCount = 10; // Change this to your desired number of fireflies
      for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        glowContainer.appendChild(firefly);
      }
    };
    createFireflies();
  }, []);

  return (
    <section id="experience" className="bg-background py-16 text-primary relative overflow-hidden">
      <div ref={glowContainerRef} className="absolute inset-0 pointer-events-none"></div>
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className="twelve">
          <h2 className="text-4xl font-bold text-center">Experience</h2>
        </div>
        <div className="mt-8 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#0f0f0e] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0">
                <img src={exp.logo} alt={`${exp.company} logo`} className="h-20 w-20 rounded-full" />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h3 className="text-2xl font-semibold text-secondary">{exp.role}</h3>
                <p className="mt-2 text-gray-400">{exp.company}</p>
                <p className="mt-2 text-gray-400">{exp.duration}</p>
                <p className="mt-4">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
