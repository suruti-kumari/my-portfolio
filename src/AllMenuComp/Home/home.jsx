import React from 'react';
import './home.css';

import htmlImg from './html.png';
import cssImg from './css.png';
import jsImg from './Javascript.png';
import reactImg from './react.webp';
import angularImg from './Angular.png';
import csharpImg from './CSHARP.png';
import sql from './SQL.png';
import xamarinImg from './Xamrin.png';
import ts from './TS.png';
import jsgreennew from './JSGREENNEW.png';

const floatingImages = [
  { src: htmlImg, alt: 'HTML', style: { top: '8%', left: '5%', width: 60, animationDelay: '0s' }, group: 'top' },
  { src: xamarinImg, alt: 'Xamarin', style: { top: '28%', left: '5%', width: 60, animationDelay: '1.2s' }, group: 'top' },
  { src: cssImg, alt: 'CSS', style: { top: '20%', right: '8%', width: 55, animationDelay: '0.5s' }, group: 'top' },
  { src: jsImg, alt: 'JavaScript', style: { top: '50%', left: '2%', width: 48, animationDelay: '0.8s' }, group: 'top' },
  { src: ts, alt: 'TypeScript', style: { bottom: '5%', left: '4%', width: 50, animationDelay: '1.6s' }, group: 'bottom' },
  { src: reactImg, alt: 'React', style: { bottom: '10%', right: '12%', width: 65, animationDelay: '1.5s' }, group: 'bottom' },
  { src: angularImg, alt: 'Angular', style: { bottom: '18%', left: '10%', width: 50, animationDelay: '1s' }, group: 'bottom' },
  { src: csharpImg, alt: 'C#', style: { top: '40%', right: '7%', width: 52, animationDelay: '1.2s' }, group: 'top' },
  { src: sql, alt: 'SQL', style: { top: '80%', right: '3%', width: 52, animationDelay: '1.2s' }, group: 'bottom' },
  { src: jsgreennew, alt: 'JavaScript Green', style: { top: '60%', right: '3%', width: 52, animationDelay: '1.3s' }, group: 'bottom' },
];

const Home = () => {
  return (
    <div className="home">
      {/* Top floating images */}
      <div className="floating-img-row floating-img-row-top">
        {floatingImages.filter(img => img.group === 'top').map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="floating-img"
            style={img.style}
          />
        ))}
      </div>
      <div className="hero-section">
        <h1 style={{ color: '#0087ff69' }} className='typing'><span>W</span>elcome to My Portfolio</h1>
        <p>
          <span style={{ fontSize: '3rem' }}>H</span>i, I'm Suruti Kumari, a passionate developer dedicated to building
          beautiful and functional web applications.
        </p>
        <a href="#projects" className="cta-button">
          Let's Explore My Work <span className="arrow">→</span>
        </a>
      </div>
      {/* Bottom floating images */}
      <div className="floating-img-row floating-img-row-bottom">
        {floatingImages.filter(img => img.group === 'bottom').map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="floating-img"
            style={img.style}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;