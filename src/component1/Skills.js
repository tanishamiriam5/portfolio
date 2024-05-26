import React from 'react';
import './Skills.css';
import { Link } from 'react-router-dom';
const Skills = () => {
  const skills = [
    'HTML - Expert ', 'CSS - Expert', 'JavaScript - Intermediate', 'React - Intermediate', 'Node.js - Advanced ', 'Python - Intermediate',
    'SQL - Expert', 'Git - Advanced', 'C# - Advanced'
  ];

  return (
    <div className="skills-container">
      <header className="main-header">
        
      </header>

      <header className="header2">
        <nav>
          <div className="nav2">
          <Link to="/">Home</Link>
                    <Link to="/Abt">About</Link>
                    <Link to="/Skills">Skills</Link>
                    <Link to="/Contact">Contact</Link>
          </div>
        </nav>
      </header>

      <section id="skills">
        <div className="skills-content">
          {skills.map((skill, index) => (
            <div key={index} className={`skill ${index % 2 === 0 ? 'left' : 'right'}`}>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer>
        &copy; 2024 My Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default Skills;
