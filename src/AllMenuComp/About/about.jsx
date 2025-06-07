import React from 'react';
import './about.css'; // Ensure you create a CSS file for styling

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Hi, I'm Suruti Kumari, a passionate developer with expertise in building modern and functional web applications. I love solving problems and creating user-friendly designs.
        </p>
        <h2 className="skills-title">Skills I Know</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>.NET</li>
          <li>Angular</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
  );
};

export default About;