import React from "react";
import { useInView } from "react-intersection-observer";
import "./resume.css";

const Resume = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="resume-section">
      <h2 className="resume-title">Resume</h2>
      <div className="resume-underline"></div>
      <p className="resume-desc">
        Here is a brief overview of my professional journey, highlighting my skills and experiences in the field of software development.
      </p>
      <div className={`resume-columns ${inView ? "fade-in" : ""}`} ref={ref}>
        <div className="resume-col">
          <h3 className="resume-subtitle">About Me</h3>
          <div className="resume-timeline">
            <div className="resume-timeline-dot"></div>
            <div className="resume-timeline-content">
              <h4>SURUTI KUMARI</h4>
              <p className="resume-italic">
                Innovative and deadline-driven FullStack Angular .Net Developer with 2.6 years of experience .
              </p>
              <ul>
                <li>Bhubaneswar, Odisha</li>
                <li>7326979835</li>
                <li>mainyaverma5@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume-col">
          <h3 className="resume-subtitle">Professional Experience</h3>
          <div className="resume-timeline">
            <div className="resume-timeline-dot"></div>
            <div className="resume-timeline-content">
              <h4>Fullstack Angular .Net Developer</h4>
              <p className="resume-bold"> Jan 2023 - Present</p>
              <p className="resume-italic" style={{color: 'red',fontWeight: 'bold'}}>Larsen and Toubro pvt ltd.</p>
              <ul>
                <li>Led the design, development, and deployment of scalable web applications using Angular for front-end and ASP.NET Core for back-end services.</li>
                <li>Successfully delivered key projects including Survey, ESG, and Nexus, integrating complex business logic with robust SQL Server databases.</li>
                <li>Collaborated cross-functionally with UI/UX designers.</li>
              </ul>
              <h4>Operating Engineer</h4>
              <p className="resume-bold">Sep 2022 - Dec 2022</p>
              <p className="resume-italic" style={{color: 'red',fontWeight: 'bold'}}> MAHLE Thermal System Pvt ltd.</p>
              <ul>
                <li>Operated and maintained a wide range of industrial machinery, ensuring optimal performance and minimal downtime across multiple production environments.</li>
                {/* <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li> */}
                {/* <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;