import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaReact, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiDatabricks, SiBootstrap, SiTailwindcss, SiDocker, SiKubernetes } from "react-icons/si";
import LaptopIcon from '@mui/icons-material/Laptop';

const skills = [
  { name: "HTML", icon: <FaHtml5 size={30} color="#E34F26" />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt size={30} color="#1572B6" />, level: 90 },
  { name: "JavaScript", icon: <FaJs size={30} color="#F7DF1E" />, level: 90 },
  { name: "Node.js", icon: <FaNode size={30} color="#339933" />, level: 90 },
  { name: "Express", icon: <SiExpress size={30} color="#000000" />, level: 85 },
  { name: "React", icon: <FaReact size={30} color="#61DAFB" />, level: 85 },
  { name: "MongoDB", icon: <SiMongodb size={30} color="#47A248" />, level: 85 },
  { name: "SQL", icon: <SiMysql size={30} color="#00758F" />, level: 90 },
  { name: "Bootstrap", icon: <SiBootstrap size={30} color="#7952B3" />, level: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={30} color="#38B2AC" />, level: 95 },
  { name: "Docker", icon: <SiDocker size={30} color="#2496ED" />, level: 75 },
  { name: "Kubernetes", icon: <SiKubernetes size={30} color="#326CE5" />, level: 70 },
  { name: "Java", icon: <FaJava size={30} color="#007396" />, level: 80 },
  { name: "DSA", icon: <SiDatabricks size={30} color="#E535AB" />, level: 80 },
];

const Skills = () => {
  const { ref, inView } = useInView();
  const [animated, setAnimated] = useState(false);

  // Reset animation whenever the section comes into view
  React.useEffect(() => {
    if (inView) {
      setAnimated(false); // Reset animation
      const timer = setTimeout(() => setAnimated(true), 50); // Trigger animation after reset
      return () => clearTimeout(timer); // Clean up timer
    }
  }, [inView]);

  return (
    <section ref={ref} className="max-w-5xl mx-auto p-6">
      <div className='flex justify-center items-center pt-1 mb-8'>
            <LaptopIcon sx={{ fontSize: 40  }}></LaptopIcon>
            <p className='ml-4 font-bold text-3xl text-slate-900'>Skills & <span className='text-orange-700'>Abilities</span></p>
     </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-20 h-20 mb-4">
              <CircularProgressbar
                value={animated ? skill.level : 0}
                text={animated ? `${skill.level}%` : "0%"}
                className="text-indigo-800"
                styles={buildStyles({
                  textSize: "14px",
                  pathColor: `rgba(62, 152, 199, ${skill.level / 100})`,
                  textColor: "#333",
                  trailColor: "#d6d6d",
                  backgroundColor: "#f8f9fa",
                })}
              />
            </div>
            <div className="flex flex-col items-center">
              {skill.icon}
              <p className="mt-2 text-sm font-medium">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
