import React, { useEffect, useRef } from "react";
// import "./styles.css"; // Add any specific CSS styles for this component if needed
import { motion, useAnimation } from "framer-motion";
import { workExperienceData } from "../../constants";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const Work = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
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
      className="font-['Acorn-bold'] w-[95%] rounded-3xl h-[95vh] my-[5vh] p-[20px]"
    >
      <div className="flex text-[130px] h-[168px] text-[var(--light-gray)] justify-center mb-[30px]">
        <div className="cursor-pointer transition-all duration-300 hover:text-[140px]">
          Work
        </div>
      </div>
      <div className="flex flex-wrap justify-center h-[70%] text-[rgb(0,0,0,0.8)] gap-[20px]">
        {/* Replace this with your work experience data */}
        {workExperienceData.map((experience, index) => (
          <div
            key={index}
            className="w-[45%] p-[20px] bg-[rgb(255,255,255,0.8)] h-full rounded-3xl"
          >
            <div className="text-[var(--theme-color-2)] text-center p-[10px] font-semibold text-[60px] rounded-3xl bg-[var(--theme-color-4)] shadow-lg">
              {experience.jobTitle}
            </div>
            <div className="p-[30px]">
              <div className="text-[30px]">{experience.company}</div>
              <div className="text-[20px]">{experience.date}</div>
            </div>
            <div className="pl-[30px] text-[30px]">Responsibilities</div>
            <div className="p-[30px] pt-0 grid grid-cols-2 gap-[5px] text-[18px]">
              {experience.responsibilities.map((responsibility, index) => (
                <p className="bg-[var(--theme-color-2)] text-white p-[10px] rounded-xl " key={index}>{responsibility}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
