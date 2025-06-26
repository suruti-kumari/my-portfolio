import React from 'react';
import './about.css';
import myImage from './myimage.jpg'; // or '../assets/myimage.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-row">
        <div className="about-content">
          <h2 style={{ color: '#0087ff69' }}>UI/UX Designer &amp; Web Developer.</h2>
          <p className="about-subtitle">
            <em>Hello, I'm a passionate UI/UX Designer and Web Developer.</em>
          </p>
          <div className="about-info">
            <ul>
              <li><span>&#8250;</span> <b>Birthday:</b> 14 Mar 2002</li>
              <li><span>&#8250;</span> <b>Age:</b> 23</li>
              {/* <li><span>&#8250;</span> <b>Website:</b> www.example.com</li> */}
              <li><span>&#8250;</span> <b>Degree:</b> B.Tech</li>
              <li><span>&#8250;</span> <b>Branch:</b> Computer Science & Engineering</li>
              <li><span>&#8250;</span> <b>Phone:</b> 7326979835</li>
              <li><span>&#8250;</span> <b>Email:</b> mainyaverma5@gmail.com</li>
              <li><span>&#8250;</span> <b>City:</b> Bhubaneswar, Odisha</li>
              
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="about-desc">
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
      </div> */}
    </div>
  );
};

export default About;