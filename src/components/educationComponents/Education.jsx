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
      className="font-['Acorn-bold'] w-[95%] rounded-3xl h-[95vh] mb-[5vh] p-[20px]"
    >
      <div className="flex text-[130px] h-[168px] text-[var(--light-gray)] justify-center mb-[30px]">
        <div>
          <img
            src={books}
            className="w-[140px] h-[140px] hover:animate-bounce"
          />
        </div>
        <div className="cursor-pointer transition-all duration-300 hover:text-[140px] ml-6">
          Education
        </div>
      </div>
      <div className="flex flex-wrap justify-center h-[70%] text-[rgb(0,0,0,0.8)] gap-[20px]">
        <div className="w-[45%] p-[20px] bg-[rgb(255,255,255,0.8)]  h-full rounded-s-3xl">
          <div className="text-[var(--theme-color-2)] text-center p-[10px] font-semibold text-[60px] rounded-3xl bg-[var(--theme-color-4)] shadow-lg">
            Degree
          </div>
          <div className="p-[30px]">
            <div className="text-[30px]">{EDUCATION_DEGREE.degree}</div>
            <div className="text-[20px]">{EDUCATION_DEGREE.tenure}</div>
            <div className="text-[20px]">{EDUCATION_DEGREE.university}</div>
          </div>
          <div className="pl-[30px] text-[30px]">Courses</div>
          <div className="p-[30px] pt-0 grid grid-cols-2 gap-[5px] text-[18px]">
            {UNIVERSITY_COURSES?.map((course) => (
              <p key={course}>{course}</p>
            ))}
          </div>
        </div>
        <div className="w-[45%] p-[20px] bg-[rgb(255,255,255,0.8)]  h-full rounded-e-3xl">
          <div className="text-[var(--theme-color-2)] text-center p-[10px] font-semibold text-[60px] rounded-3xl bg-[var(--theme-color-4)] shadow-lg">
            Certifications
          </div>
          <div className="p-[30px] pt-[30px] grid gap-[5px] text-[20px]">
            {CERTIFICATIONS?.map((course) => (
              <a href={course?.link} target="_blank" key={course.name}>
                <div className="flex justify-between cursor-pointer border-black border-b-[1px] p-1">
                  <p>{course.name}</p>
                  <p>{course.offeredBy}</p>
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
