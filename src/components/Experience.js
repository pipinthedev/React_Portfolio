import React, { useEffect, useRef } from 'react';
import athulyaseniorcareLogo from '../asset/logo/athulyaseniorcare_logo.jpg';
import bharat_intern_logo from '../asset/logo/bharat_intern_logo.jpg';
import nextgen from '../asset/logo/nextgen.png';
import octanetsolutions_logo from '../asset/logo/octanetsolutions_logo.jpg';

const experiences = [
  { 
    role: 'Full Stack Web Developer',  
    company: 'Athulya Senior Care',  
    duration: 'Aug 2023 - Mar 2024', 
    description: 'Managed and developed two separate applications for Home Care and Assisted Living. Ensured seamless integration of third-party APIs and optimized the user experience through responsive design and efficient back-end operations.', 
    logo: athulyaseniorcareLogo 
  },
  { 
    role: 'Full Stack Developer',   
    company: 'OctaNet Services Pvt Ltd.', 
    duration: 'Feb 2024 - Feb 2024', 
    description: 'Worked on full-stack development projects using PHP and HTML. Developed dynamic web pages and ensured the website’s functionality and performance were optimized.', 
    logo: octanetsolutions_logo
  },
  { 
    role: 'Full Stack Developer', 
    company: 'Bharat Intern', 
    duration: 'Feb 2024 - Mar 2024', 
    description: 'Completed several small HTML projects. Focused on front-end development, creating responsive and user-friendly web pages.', 
    logo: bharat_intern_logo
  },
  { 
    role: 'MYSQL Developer', 
    company: 'Nextgen', 
    duration: 'Jan 2024 - Feb 2024', 
    description: 'Participated in a 15-day intensive program focused on mastering MySQL queries. Developed skills in writing complex queries and optimizing database performance.', 
    logo: nextgen
  },
];

const Experience = () => {
  const glowContainerRef = useRef(null);

  useEffect(() => {
    const glowContainer = glowContainerRef.current;
    const createCircles = () => {
      const circleCount = 10;
      for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('li');
        glowContainer.appendChild(circle);
      }
    };
    createCircles();
  }, []);

  return (
    <section id="experience" className="bg-background py-16 text-primary relative overflow-hidden">
      <div ref={glowContainerRef} className="circles"></div>
      <div className="max-w-screen-xl mx-auto px-4">
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
