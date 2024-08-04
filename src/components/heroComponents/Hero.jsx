import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import JSLogo from "../../assets/javascript-logo.png";
import ReactLogo from "../../assets/skills/react.png";
const variants = {
  hidden: { x: -1000 }, // Start position (off-screen to the left)
  visible: { x: 0 }, // End position (on-screen)
};
import react from "../../assets/react.json";
import java from "../../assets/java.json";
import javascript from "../../assets/javascript.json";
import lottie from "lottie-web";

let heroText =
  "cursor-pointer transition-all duration-300 hover:text-[12vw] hover:text-[var(--theme-color-4)]";
const Hero = () => {
  const reactRef = useRef(null);
  const jsRef = useRef(null);

  useEffect(() => {
    const anim1 = lottie.loadAnimation({
      container: reactRef.current,
      animationData: react,
      renderer: "svg", // Change the renderer as needed (svg, canvas, html)
      loop: true,
      autoplay: true,
    });

    const anim2 = lottie.loadAnimation({
      container: jsRef.current,
      animationData: javascript,
      renderer: "svg", // Change the renderer as needed (svg, canvas, html)
      loop: true,
      autoplay: true,
    });

    return () => {
      anim1.destroy();
      anim2.destroy();
    };
  }, []);

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
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      className={`${
        windowSize?.width > 900
          ? `w-[80%] rounded-[250px] mt-[80px] h-[78vh] hover:bg-[rgb(0,0,0,0.7)] hover:scale-110 shadow-2xl`
          : `w-[90%] rounded-[60px] mt-[20px] h-[82vh]`
      } relative   flex flex-col items-center justify-center`}
    >
      <div
        className={
          windowSize?.width > 900
            ? `absolute top-[10%] left-[10%] hover:animate-bounce w-[10vw] h-[10vw]`
            : `absolute left-[10%] top-[5%] w-[120px] h-[120px]`
        }
        ref={jsRef}
      >
        {/* The animation will be rendered inside this div */}
      </div>

      <div
        className={
          windowSize?.width > 900
            ? `absolute top-[10%] right-[10%] hover:animate-bounce w-[10vw] h-[10vw]`
            : `absolute right-[10%] top-[5%] w-[120px] h-[120px]`
        }
        ref={reactRef}
      >
        {/* The animation will be rendered inside this div */}
      </div>

      <div
        className={`${
          windowSize?.width > 900 ? `pt-[100px]` : `pt-[160px]`
        } flex flex-col items-center justify-center`}
      >
        <div className="flex flex-col justify-center items-center">
          {windowSize?.width > 900 ? (
            <div className="flex flex-row justify-center items-center">
              <div
                className={`${windowSize?.width > 900 ? `text-[130px]` : `text-[50px]`} flex font-['Acorn-bold'] h-[168px] text-[var(--light-gray)]`}
              >
                <div className={heroText}>Hi. &nbsp;</div>
                <div className={heroText}>I'm &nbsp;</div>
                <div className={heroText}>Farhan</div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <div
                className={`text-[14vw] font-['Acorn-bold'] h-[168px] text-[var(--light-gray)]`}
              >
                <div className={heroText}>Hi. &nbsp;</div>
                <div className="flex">
                  <div className={heroText}>I'm &nbsp;</div>
                  <div className={heroText}>Farhan</div>
                </div>
              </div>
            </div>
          )}
          {windowSize?.width > 900 ? (
            <div className="flex flex-row justify-center items-center text-center">
              <div
                className={`text-[8vw] flex font-['Acorn-bold'] h-[168px] text-[var(--light-gray)]`}
              >
                <div className="flex">
                  <div className={heroText}>A &nbsp;</div>
                  <div className={heroText}>Full Stack &nbsp;</div>
                </div>
                <div className={heroText}>Engineer</div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center top-[-20px]">
              <div
                className={`text-[14vw] font-['Acorn-bold'] h-[168px] text-[var(--light-gray)]`}
              >
                <div className="flex">
                  <div className={heroText}>A &nbsp;</div>
                  <div className={heroText}>Web &nbsp;</div>
                </div>
                <div className={heroText}>Developer</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
