import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="profile-container">
          <img src="/saroj_profile.jpeg" alt="Saroj Kumar" className="profile-image" />
          <div className="hero-content">
            <h1>Saroj Kumar</h1>
            <h2>Software Developer & Data Analyst</h2>
            <p className="tagline">Transforming ideas into elegant solutions</p>
          </div>
        </div>
      </section>
      
      <section className="about">
        <h2>About Me</h2>
        <p>I am a passionate Full Stack Developer with expertise in MERN Stack and Python development. Experienced in building responsive web applications, RESTful APIs, and working with databases. Strong background in software development principles and agile methodologies.</p>
        <div className="key-highlights">
          <div className="highlight">
            <h3>3+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="highlight">
            <h3>20+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="highlight">
            <h3>10+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {/* Project cards will be dynamically loaded here */}
        </div>
      </section>
    </div>
  );
};

export default Home;
