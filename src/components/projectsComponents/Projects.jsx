import React from "react";
import { motion, useAnimation } from "framer-motion";
import { PROJECTS_DATA } from "../../constants";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const Projects = () => {
  const ref = React.useRef(null);
  const controls = useAnimation();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      {
        threshold: 0.5, // Adjust the threshold value as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={ref}
      className="font-['Acorn-bold'] w-[95%] min-h-[95vh] mb-[5vh] p-[20px]"
    >
      <div className="flex text-[130px] h-[168px] text-[var(--light-gray)] justify-center mb-[30px]">
        <div className="cursor-pointer transition-all duration-300 hover:text-[140px]">
          Projects
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[rgb(0,0,0,0.6)] p-6 rounded-lg shadow-md "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            <p className="text-lg text-white">
              {project.technology} | {project.date}
            </p>
            <p className="mt-4 text-white">{project.description}</p>
            <ul className="mt-4 list-disc list-inside text-white">
              {project.features.map((feature, index) => (
                <li key={index} className="font-['Acorn-semibold']">{feature}</li>
              ))}
            </ul>
            <div className="flex mt-4 space-x-4 font-['Acorn-semibold']">
              <a
                href={project.codeLink}
                target="_blank"
                className="px-4 py-2 bg-[var(--theme-color-2)] text-white rounded-full"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
