import React from 'react';
import './home.css'; // Ensure you create a CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Suruti Kumari, a passionate developer dedicated to building
          beautiful and functional web applications.
        </p>
        <a href="#projects" className="cta-button">
          View My Projects
        </a>
      </div>
    </div>
  );
};

export default Home;