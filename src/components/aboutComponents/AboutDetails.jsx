// export default About;
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { aboutData } from "../../constants";
import { Divider } from "../utils";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const AboutDetails = () => {
  const [seeMore, setSeeMore] = React.useState(false);
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

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`w-[95%] font-['Acorn-bold'] rounded-3xl h-[fit]
      } p-[20px] bg-gradient-to-br from-[var(--theme-color-2)] to-[var(--theme-color-4-light)] shadow-lg bg-opacity-30 my-[7%]`}
    >
      <div
        className={`${
          windowSize?.width > 900
            ? `text-[130px] h-[168px] mb-[30px]`
            : `text-[50px] mb-[10px]`
        } flex  text-[var(--light-gray)] justify-center`}
      >
        <div
          className={`cursor-pointer transition-all duration-300 ${
            windowSize?.width > 900 && `hover:text-[140px]`
          }`}
        >
          About Me
        </div>
      </div>
      <div
        className={`${
          windowSize?.width > 900 ? `h-fit` : `h-fit`
        } flex flex-wrap justify-center h-[70%] text-[rgb(0,0,0,0.8)] gap-[20px]`}
      >
        <div
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
            {aboutData.name}
          </div>
          <div
            className={`${windowSize?.width > 900 ? `p-[20px]` : `p-[10px]`}`}
          >
            <div
              className={`${
                windowSize?.width > 900 ? `text-[30px]` : `text-[25px]`
              }`}
            >
              {aboutData.location}
            </div>
            <div
              className={`${
                windowSize?.width > 900 ? `text-[25px]` : `text-[20px]`
              }`}
            >
              {aboutData.email}
            </div>
            <div
              className={`${
                windowSize?.width > 900 ? `text-[25px]` : `text-[20px]}`
              }`}
            >
              {aboutData.linkedin}
            </div>
            <div
              className={`${
                windowSize?.width > 900 ? `text-[25px]` : `text-[20px]}`
              }`}
            >
              {aboutData.github}
            </div>
          </div>
          
            <div className={`${windowSize?.width > 900 ? `pl-[30px]`:`pl-[10px]`} text-[30px]`}>
              Description
              <div className="bg-black h-[1px] "></div>
            </div>
          

          <div
            className={`${
              windowSize?.width > 900
                ? `w-full p-[30px] gap-[5px] grid-cols-1 text-[26px] overflow-hidden`
                : `p-[6px] gap-3 text-[16px] grid-cols-1`
            } pt-0 grid`}
          >
            <p className="p-[10px] rounded-xl overflow-auto">
              {aboutData.aboutMe}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
