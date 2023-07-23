import React, { useEffect, useRef } from "react";
// import "./styles.css"; // Add any specific CSS styles for this component if needed
import { motion, useAnimation } from "framer-motion";
import { workExperienceData } from "../../constants";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const WorkDetails = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    // Function to update window size state
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      className={`w-[95%] font-['Acorn-bold']  rounded-3xl h-[fit] p-[20px] bg-gradient-to-br from-[var(--theme-color-2)] to-[var(--theme-color-4-light)] shadow-lg bg-opacity-30 my-[5vh]`}
    >
      <div
        className={`${
          windowSize?.width > 900
            ? `text-[130px] h-[168px] mb-[30px]`
            : `text-[50px] mb-[10px]`
        } flex  text-[var(--light-gray)] justify-center`}
      >
        <div className="cursor-pointer transition-all duration-300">
          Work
        </div>
      </div>
      <div
        className={`${
          windowSize?.width > 900 ? `h-[fit]` : `h-[fit]`
        } flex flex-wrap justify-center h-[70%] text-[rgb(0,0,0,0.8)] gap-[20px]`}
      >
        {workExperienceData.map((experience, index) => (
          <div
            key={index}
            className={`${
              windowSize?.width > 900 ? `w-[70%] p-[20px]` : `w-[98%] p-[5px]`
            }  bg-[rgb(255,255,255,0.8)] h-full rounded-3xl`}
          >
            <div
              className={`${
                windowSize?.width > 900
                  ? `p-[10px] text-[60px]`
                  : `p-[5px] text-[30px]`
              } text-[var(--theme-color-2)] text-center  font-semibold border-b-2 border-[var(--theme-color-2)]`}
            >
              {experience.jobTitle}
            </div>
            <div
              className={`${windowSize?.width > 900 ? `p-[20px]` : `p-[10px]`}`}
            >
              <div className={`${windowSize?.width > 900 ? `text-[30px]`:`text-[25px]`}`}>{experience.company}</div>
              <div className={`${windowSize?.width > 900 ? `text-[25px]`:`text-[25px]`}`}>{experience.date}</div>
            </div>
            {windowSize?.width > 900 && (
              <div className="pl-[30px] text-[30px]">Responsibilities</div>
            )}
            <div className={`${windowSize?.width > 900 ? `p-[30px] gap-[5px] grid-cols-2 text-[26px]`:`p-[6px] gap-3 text-[16px] grid-cols-1`} pt-0 grid`}>
              {experience.responsibilities.map((responsibility, index) => (
                <p
                  className="bg-[var(--theme-color-2)] text-white p-[10px] rounded-xl "
                  key={index}
                >
                  {responsibility}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkDetails;
