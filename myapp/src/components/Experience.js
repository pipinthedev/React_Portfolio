
import React from 'react';

const experiences = [
  { role: 'Frontend Developer', company: 'Company One', duration: '2020-2022', description: 'Worked on XYZ' },
  { role: 'Backend Developer', company: 'Company Two', duration: '2018-2020', description: 'Worked on ABC' },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-background py-16 text-primary">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Work Experience</h2>
        <div className="mt-8 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-secondary">{exp.role} at {exp.company}</h3>
              <p className="mt-2 text-gray-400">{exp.duration}</p>
              <p className="mt-4">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
