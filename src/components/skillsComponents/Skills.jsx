import React, { useEffect } from "react";
import cplusplusImage from "../../assets/skills/cplusplus.png";
import pythonImage from "../../assets/skills/python.png";
import javascriptImage from "../../assets/skills/javascript-logo.png";
import reactImage from "../../assets/skills/react.png";
import linuxImage from "../../assets/skills/linux.png";
import databaseImage from "../../assets/skills/sql.png";
import githubImage from "../../assets/skills/git.png";

const Skills = () => {
  const skills = [
    { name: "C++", image: cplusplusImage },
    { name: "Python", image: pythonImage },
    { name: "JavaScript", image: javascriptImage },
    { name: "React", image: reactImage },
    { name: "Linux", image: linuxImage },
    { name: "Database", image: databaseImage },
    { name: "GitHub", image: githubImage },
  ];

  useEffect(() => {
    const skillElements = document.querySelectorAll(".random-skill");

    skillElements.forEach((element) => {
      const randomX = Math.floor(Math.random() * window.innerWidth);
      const randomY = Math.floor(Math.random() * window.innerHeight);

      element.style.position = "absolute";
      element.style.top = `${randomY}px`;
      element.style.left = `${randomX}px`;
    });
  }, []);

  return (
    <></>
    // <div className="flex flex-wrap justify-center gap-4">
    //   {skills.map((skill, index) => (
    //     <div
    //       key={index}
    //       className="flex flex-col items-center random-skill"
    //       style={{ zIndex: skills.length - index }}
    //     >
    //       <img src={skill.image} alt={skill.name} className="h-16 w-16" />
    //       {/* <span className="text-sm font-semibold mt-2">{skill.name}</span> */}
    //     </div>
    //   ))}
    // </div>
  );
};

export default Skills;
