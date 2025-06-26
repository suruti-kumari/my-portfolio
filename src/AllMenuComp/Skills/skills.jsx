import React from "react";
import { useInView } from "react-intersection-observer";
import "./skills.css";

const skills = [
  { name: "HTML", value: 100 },
  { name: "CSS", value: 100 },
  { name: "JAVASCRIPT", value: 95 },
  { name: "Angular", value: 90 },
  { name: "C#", value: 90 },
  { name: "SQL", value: 97 },
  { name: "Figma", value: 85 },
  { name: "Azure", value: 80 },
  { name: "TypeScript", value: 85 },
  { name: "Bootstrap", value: 90 },
];

const mid = Math.ceil(skills.length / 2);
const leftSkills = skills.slice(0, mid);
const rightSkills = skills.slice(mid);

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-underline"></div>
      <p className="skills-desc" style={{ color: "black", textAlign: "center", fontSize: "1.2rem" }}>
        Skills latest technologies and tools I have worked with, showcasing my proficiency in both front-end and back-end development.
      </p>
      <div className="skills-bars" ref={ref}>
        <div className="skills-cols">
          {leftSkills.map((skill, idx) => (
            <div className="skill-bar-block" key={skill.name}>
              <div className="skill-bar-header">
                <span>{skill.name}</span>
                <span className="skill-bar-percent">{skill.value}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: inView ? `${skill.value}%` : 0,
                    transition: "width 1.2s cubic-bezier(.4,1.5,.5,1) " + (idx * 0.2) + "s",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-cols">
          {rightSkills.map((skill, idx) => (
            <div className="skill-bar-block" key={skill.name}>
              <div className="skill-bar-header">
                <span>{skill.name}</span>
                <span className="skill-bar-percent">{skill.value}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: inView ? `${skill.value}%` : 0,
                    transition: "width 1.2s cubic-bezier(.4,1.5,.5,1) " + (idx * 0.2) + "s",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;