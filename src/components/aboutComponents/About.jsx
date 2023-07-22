import React, { useEffect, useRef } from "react";
// import "./styles.css"; // Add any specific CSS styles for this component if needed
import { motion, useAnimation } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const About = () => {
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

  const aboutData = {
    name: "Muhammad Farhan Azam",
    title: "Computer Engineer | Software Developer",
    location: "Lahore, Pakistan",
    email: "farhan26azam@gmail.com",
    linkedin: "linkedin.com/in/muhammad-farhan-azam/",
    github: "github.com/farhan26azam",
    aboutMe: "Innovative and detail-oriented computer engineer specializing in front-end development and software engineering. With a strong proficiency in React JS, JavaScript, and comprehensive knowledge of database management systems, I bring a dynamic and adaptable approach to every project. My creative mindset, combined with analytical problem-solving skills, enables me to deliver exceptional solutions. Driven by a passion for continuous improvement, I actively seek out new technologies and industry trends to enhance user experiences and drive efficiency. Thriving in collaborative environments, I excel at tackling complex challenges and working alongside diverse teams. Seeking an opportunity to contribute my expertise to a forward-thinking organization at the forefront of cutting-edge software development, where I can make a significant impact and drive transformative innovations.",
  };

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
        <div className="cursor-pointer transition-all duration-300 hover:text-[140px]">
          About
        </div>
      </div>
      <div className="flex flex-wrap justify-center h-[70%] text-[rgb(0,0,0,0.8)] gap-[20px]">
        <div className="w-[45%] p-[20px] bg-[rgb(255,255,255,0.8)] h-full rounded-s-3xl">
          <div className="text-[var(--theme-color-2)] text-center p-[10px] font-semibold text-[60px] rounded-3xl bg-[var(--theme-color-4)] shadow-lg">
            Profession
          </div>
          <div className="p-[30px]">
            <div className="text-[30px]">{aboutData.title}</div>
            <div className="text-[20px]">{aboutData.location}</div>
            <div className="text-[20px]">{aboutData.email}</div>
            <div className="text-[20px]">
              <a
                href={`https://${aboutData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--theme-color-2)] hover:underline"
              >
                {aboutData.linkedin}
              </a>
            </div>
            <div className="text-[20px]">
              <a
                href={`https://${aboutData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--theme-color-2)] hover:underline"
              >
                {aboutData.github}
              </a>
            </div>
          </div>
        </div>
        <div className="w-[45%] p-[20px] bg-[rgb(255,255,255,0.8)] h-full rounded-e-3xl">
          <div className="text-[var(--theme-color-2)] text-center p-[10px] font-semibold text-[60px] rounded-3xl bg-[var(--theme-color-4)] shadow-lg">
            About Me
          </div>
          <div className="p-[30px] pt-[30px] text-[20px]">{aboutData.aboutMe}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
