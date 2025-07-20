import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="#home" onClick={() => scrollToSection('home')}>My Portfolio</a>
      </div>
      <ul className="nav-links">
        <li>
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#education" 
            onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
            className={activeSection === 'education' ? 'active' : ''}
          >
            Education
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
// };

// export default Navbar;
