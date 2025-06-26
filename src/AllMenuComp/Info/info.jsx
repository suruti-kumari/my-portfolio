import React from "react";
import { FaSmile, FaRegListAlt, FaHeadset, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./info.css";

const stats = [
  {
    icon: <FaSmile className="info-icon" />,
    number: 232,
    title: "Happy Clients",
    // desc: <>consequuntur<br />quae</>,
  },
  {
    icon: <FaRegListAlt className="info-icon" />,
    number: 10,
    title: "Projects",
    // desc: <>adipisci atque<br />cum quia aut</>,
  },
  {
    icon: <FaHeadset className="info-icon" />,
    number: 1453,
    title: <>Support</>,
    // desc: <>aut commodi<br />quaerat</>,
  },
  {
    icon: <FaUsers className="info-icon" />,
    number: 32,
    title: "All skills ",
    // desc: <>rerum<br />asperiores<br />dolor</>,
  },
];

const Info = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <h2 style={{ color: "#0087ff69", textAlign: "center" ,fontSize: "2.6rem"}}>Details</h2>
      <div className="info-section"   ref={ref}>
        {stats.map((stat, idx) => (
          <div className="info-box"  key={idx}>
            {stat.icon}
            <div>
              <span className="info-number">
                <CountUp
                  end={inView ? stat.number : 0}
                  duration={1.5}
                  separator=","
                />
              </span>
              <div className="info-title"><b>{stat.title}</b></div>
              <div className="info-desc">{stat.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Info;