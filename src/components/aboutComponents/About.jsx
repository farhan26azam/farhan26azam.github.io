// import React, { useEffect, useRef } from "react";
// // import "./styles.css"; // Add any specific CSS styles for this component if needed
// import { motion, useAnimation } from "framer-motion";

// const variants = {
//   visible: { opacity: 1, y: 0 },
//   hidden: { opacity: 0, y: 50 },
// };

// const About = () => {
//   const ref = useRef(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             controls.start("visible");
//           } else {
//             controls.start("hidden");
//           }
//         });
//       },
//       {
//         threshold: 0.5, // Adjust the threshold value as needed
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [controls]);

//   return (
//     <motion.div
//       animate={controls}
//       initial="hidden"
//       variants={variants}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       ref={ref}
//       className="font-['Acorn-bold'] w-[95%] rounded-3xl h-[95vh] mb-[5vh] p-[20px]"
//     >
//       <div className="flex text-[130px] h-[168px] text-[var(--light-gray)] justify-center mb-[30px]">
//         <div className="cursor-pointer transition-all duration-300 hover:text-[140px]">
//           About
//         </div>
//       </div>
//       <div className="flex flex-wrap justify-center h-[70%] text-[rgb(0,0,0,0.8)] gap-[20px]">
//         <div className="w-[45%] p-[20px] bg-[rgb(255,255,255,0.8)] h-full rounded-s-3xl">
//           <div className="text-[var(--theme-color-2)] text-center p-[10px] font-semibold text-[60px] rounded-3xl bg-[var(--theme-color-4)] shadow-lg">
//             Profession
//           </div>
//           <div className="p-[30px]">
//             <div className="text-[30px]">{aboutData.title}</div>
//             <div className="text-[20px]">{aboutData.location}</div>
//             <div className="text-[20px]">{aboutData.email}</div>
//             <div className="text-[20px]">
//               <a
//                 href={`https://${aboutData.linkedin}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[var(--theme-color-2)] hover:underline"
//               >
//                 {aboutData.linkedin}
//               </a>
//             </div>
//             <div className="text-[20px]">
//               <a
//                 href={`https://${aboutData.github}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[var(--theme-color-2)] hover:underline"
//               >
//                 {aboutData.github}
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="w-[45%] p-[20px] bg-[rgb(255,255,255,0.8)] h-full rounded-e-3xl">
//           <div className="text-[var(--theme-color-2)] text-center p-[10px] font-semibold text-[60px] rounded-3xl bg-[var(--theme-color-4)] shadow-lg">
//             About Me
//           </div>
//           <div className="p-[30px] pt-[30px] text-[20px]">{aboutData.aboutMe}</div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { aboutData } from "../../constants";
import { Divider } from "../utils";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const About = () => {
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

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={ref}
      className={`w-[95%] font-['Acorn-bold'] rounded-3xl ${
        seeMore ? `h-[fit]` : `h-[95vh]`
      } p-[20px] bg-gradient-to-br from-[var(--theme-color-2)] to-[var(--theme-color-4-light)] shadow-lg bg-opacity-30`}
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
          windowSize?.width > 900 ? `h-[70%]` : `h-[85%]`
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
          {windowSize?.width > 900 && (
            <div className="pl-[30px] text-[30px]">
              Description
              <div className="bg-black h-[1px] "></div>
            </div>
          )}

          <div
            className={`${
              windowSize?.width > 900
                ? `w-full p-[30px] gap-[5px] grid-cols-1 text-[26px] overflow-hidden`
                : `p-[6px] gap-3 text-[16px] grid-cols-1`
            } pt-0 grid`}
          >
            {!seeMore && (
              <p className="p-[10px] rounded-xl overflow-auto">
                {aboutData.aboutMe?.slice(0, 250)}
                {"..."}
                <button onClick={handleSeeMore} className="text-blue-600">See More</button>
              </p>
            )}
            {seeMore && (
              <p className="p-[10px] rounded-xl overflow-auto">
                {aboutData.aboutMe}
                <button onClick={handleSeeMore} className="text-blue-600">Hide</button>
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
