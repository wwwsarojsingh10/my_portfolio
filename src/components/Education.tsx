import React from 'react';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

const Education: React.FC = () => {
  const education: Education[] = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
      year: "2020-2024",
      description: "Focus on software engineering and data analytics"
    }
    // Add your education details here
  ];

  const certifications: Certification[] = [
    {
      name: "Full Stack Development",
      issuer: "Certification Provider",
      date: "2024",
      url: "https://certification-url.com"
    }
    // Add your certifications here
  ];

  return (
    <div className="education">
      <h1>Education & Certifications</h1>
      
      <section className="education-section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </section>

      <section className="certifications-section">
        <h2>Certifications</h2>
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <h3>{cert.name}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Education;
