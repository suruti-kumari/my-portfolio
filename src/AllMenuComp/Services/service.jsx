import React from "react";
import { FaBriefcase, FaRegListAlt, FaChartBar, FaBinoculars, FaRegSun, FaRegCalendarAlt } from "react-icons/fa";
import "./service.css";

const services = [
  {
    icon: <FaBriefcase />,
    title: "Nexus",
    desc: "This is a daily entry project involved the development of a comprehensive web application using Angular for the front-end and ASP.NET Core for the back-end, focusing on user authentication, data management using SQL, and responsive design.",
  },
  {
    icon: <FaRegListAlt />,
    title: "Survey",
    desc: "This project involved the creation of a dynamic survey application that allows users to create, distribute, and analyze surveys, utilizing Angular for the user interface and ASP.NET Core for server-side logic, with data stored in SQL Server.",
  },
  {
    icon: <FaChartBar />,
    title: "ESG",
    desc: "This project focused on developing an Environmental, Social, and Governance (ESG) reporting tool, enabling organizations to track and report their sustainability metrics effectively.",
  },
  {
    icon: <FaBinoculars />,
    title: "IT Budget",
    desc: "This project involved the development of a comprehensive IT budget management tool, allowing organizations to plan, track, and optimize their IT spending.",
  },
  {
    icon: <FaRegSun />,
    title: "Rex",
    desc: "Revolutionizing the way organizations manage problem and solution tracking, this project provides a robust platform for logging, tracking, and resolving issues efficiently.",
  },
  {
    icon: <FaRegCalendarAlt />,
    title: "Developers",
    desc: "This project is a detailed documentation and management system for developers, providing insights into their skills, projects, and contributions, enhancing team collaboration and knowledge sharing.",
  },
];

const Service = () => (
  <section className="services-section">
    <h2 className="services-title">Projects</h2>
    <div className="services-underline"></div>
    <p className="services-desc">       
      This section showcases my recent projects, highlighting my skills in web development and design. Each project reflects my commitment to quality and innovation, demonstrating my ability to deliver effective solutions that meet client needs.
    </p>
    <div className="services-grid">
      {services.map((service, idx) => (
        <div className="service-box fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }} key={idx}>
          <div className="service-icon">{service.icon}</div>
          <div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Service;