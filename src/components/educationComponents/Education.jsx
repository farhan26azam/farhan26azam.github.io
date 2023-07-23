import React, { useEffect, useRef } from "react";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import {
  CERTIFICATIONS,
  EDUCATION_DEGREE,
  UNIVERSITY_COURSES,
} from "../../constants";
import books from "../../assets/books-pile.png";
const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const Education = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          controls.start("visible");
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

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={ref}
      className={`${
        windowSize?.width > 900 ? `h-[fit] p-[5px]` : `h-fit p-[20px]`
      } font-['Acorn-bold'] w-[95%] rounded-3xl  bg-gradient-to-br from-[var(--theme-color-2)] to-[var(--theme-color-4-light)] shadow-lg bg-opacity-30`}
    >
      <div
        className={`${
          windowSize?.width > 900
            ? `text-[130px] h-[168px] mb-[40px]`
            : `text-[50px] mb-[10px]`
        } flex  text-[var(--light-gray)] justify-center`}
      >
        <div
          className={`cursor-pointer transition-all duration-300 ${
            windowSize?.width > 900 && `hover:text-[140px]`
          }`}
        >
          Education
        </div>
      </div>
      <div
        className={`${
          windowSize?.width > 900
            ? `flex flex-row justify-center gap-[20px] h-[70%]`
            : `h-fit`
        }   text-[rgb(0,0,0,0.8)] `}
      >
        <div
          className={`${
            windowSize?.width > 900
              ? `w-[45%] p-[20px] rounded-s-3xl`
              : `w-[100%] p-[2px] rounded-3xl`
          }  bg-[rgb(255,255,255,0.8)]  h-full mb-[10px]`}
        >
          <div
            className={`${
              windowSize?.width > 900
                ? `p-[10px] text-[60px]`
                : `p-[5px] text-[30px]`
            } text-[var(--theme-color-2)] text-center  font-semibold border-b-2 border-[var(--theme-color-2)]`}
          >
            Degree
          </div>
          <div
            className={`${windowSize?.width > 900 ? `p-[30px]` : `p-[15px]`}`}
          >
            <div className="text-[30px]">{EDUCATION_DEGREE.degree}</div>
            <div className="text-[20px]">{EDUCATION_DEGREE.tenure}</div>
            <a href={EDUCATION_DEGREE.university_site} target="_blank" className="text-[20px] cursor-pointer">{EDUCATION_DEGREE.university}</a>
          </div>
          <div
            className={`${
              windowSize?.width > 900
                ? `pl-[30px] text-[30px]`
                : `pl-[15px] text-[25px]`
            }`}
          >
            Courses
          </div>
          <div
            className={`${
              windowSize?.width > 900
                ? `p-[30px] grid-cols-2 text-[22px]`
                : `p-[15px] grid-cols-1 text-[18px]`
            } pt-0 grid gap-[5px] overflow-hidden`}
          >
            {UNIVERSITY_COURSES?.map((course) => (
              <p className="border-b-[1px] border-black" key={course}>{`${course}`}</p>
            ))}
          </div>
        </div>
        <div className={`${windowSize?.width > 900 ? `w-[45%] rounded-e-3xl p-[20px]`:`w-[98%] rounded-3xl p-[5px] mt-2`}  bg-[rgb(255,255,255,0.8)]  h-full `}>
        <div
            className={`${
              windowSize?.width > 900
                ? `p-[10px] text-[60px]`
                : `p-[5px] text-[30px]`
            } text-[var(--theme-color-2)] text-center  font-semibold border-b-2 border-[var(--theme-color-2)]`}
          >
            Certifications
          </div>
          <div className={`${windowSize?.width > 900 ? `p-[30px] pt-[30px]` : `p-[15px] pt-[10px]`} grid gap-[5px] text-[20px] overflow-auto`}>
            {CERTIFICATIONS?.map((course) => (
              <a href={course?.link} target="_blank" key={course.name}>
                <div className={`${windowSize?.width > 900 ? `flex`:``} justify-between cursor-pointer border-black border-b-[1px] p-1`}>
                  <p>{course.name}</p>
                  <p className="text-blue-600">{course.offeredBy}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
