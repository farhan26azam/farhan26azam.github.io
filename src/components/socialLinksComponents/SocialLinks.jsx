import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { SOCIAL_SITES } from "../../constants";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import myPhoto from "../../assets/myphoto.jpg";
import linkedinCover from "../../assets/linkedinCover.jpeg";
import { LINKEDIN_NAME } from "../../constants";
import linkedinLogo from "../../assets/linkedin-logo.png";
import githubLogo from "../../assets/github-logo.png";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

export default function SocialLinks() {
  const [selectedTab, setSelectedTab] = useState(SOCIAL_SITES[0]);
  const openWebsite = () => {
    window.open(selectedTab?.link, "_blank");
  };

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
    <div
      className={`${
        windowSize?.width > 900 ? `w-[94vw]` : `w-[100vw]`
      } font-['Acorn-bold']`}
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
          Connect
        </div>
      </div>
      <div
        className={`${
          windowSize?.width > 900
            ? `flex gap-[50px] px-[4%]`
            : `flex flex-col gap-[10px]`
        }`}
      >
        {/* LinkedIn  */}
        <div
          className={`${
            windowSize?.width > 900
              ? `w-[48%] mt-[100px] mb-[120px] font-[128px] rounded-[50px] pl-[30px]`
              : `w-[100%] font-[100px] rounded-[20px] p-[10px]`
          }  user-select-none   bg-[rgb(0,0,0,0.2)]  overflow-hidden p-0 m-0`}
        >
          <motion.div
            className={`${
              windowSize?.width > 900 ? `h-[460px]` : `h-[fit]`
            } w-full  rounded-[10px]  overflow-hidden shadow-[0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)]`}
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            ref={ref}
          >
            <nav>
              <img
                className={`${
                  windowSize?.width > 900
                    ? `w-[80px] h-[80px]`
                    : `w-[60px] h-[60px]`
                } `}
                src={linkedinLogo}
              ></img>
              <span
                className={`${
                  windowSize?.width > 900 ? `text-[36px]` : `text-[24px]`
                } ml-[10px] text-white  font-['Acorn-bold']`}
              >
                LinkedIn
              </span>
              <motion.div className="underline" layoutId="underline" />
            </nav>
            <main>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab ? selectedTab.site : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`${
                      windowSize?.width > 900
                        ? `w-[450px] h-[300px]`
                        : `w-full h-full pt-[20%]`
                    } `}
                  >
                    <motion.div
                      className={`${
                        windowSize?.width > 900
                          ? `w-[200px] h-[200px] `
                          : `w-[40%] h-[40%] ml-2`
                      } relative z-[1000]`}
                    >
                      <img
                        className="w-full h-full rounded-full"
                        src={myPhoto}
                      />
                    </motion.div>
                    <div
                      style={{
                        backgroundColor: "var(--linkedin-color)",
                        marginTop: "-200px",
                        height: "98%",
                      }}
                      className="w-[98%] text-[32px] mt-[-200px] rounded-[20px]"
                    >
                      <div className="relative w-full h-[120px]">
                        <img
                          className="w-full h-full rounded-t-[20px]"
                          src={linkedinCover}
                        />
                      </div>
                      <div
                        className="w-[150px] h-[40px] mr-[50px]  float-right"
                        style={{
                          marginTop: "28px",
                        }}
                      >
                        <a
                          href="https://www.linkedin.com/in/muhammad-farhan-azam"
                          target="_blank"
                          className="w-full h-full pr-1 pl-1 flex justify-center items-center rounded-xl"
                          style={{
                            backgroundColor: "white",
                          }}
                        >
                          <span
                            className="text-lg font-semibold"
                            style={{
                              color: "var(--linkedin-color)",
                            }}
                          >
                            {SOCIAL_SITES[0]?.button}
                          </span>
                        </a>
                      </div>
                      <div
                        className="w-full flex text-center items-center justify-center text-[32px] text-white font-semibold"
                        style={{
                          paddingTop: "20px",
                        }}
                      >
                        {SOCIAL_SITES[0]?.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </motion.div>
        </div>
        {/* GitHub  */}
        <div
          className={`${
            windowSize?.width > 900
              ? `w-[48%] mt-[100px] mb-[120px] font-[128px] rounded-[50px] pl-[30px]`
              : `w-[98%] h-[fit] m-[1%] font-[100px] rounded-[20px] p-[10px]`
          }  user-select-none   bg-[rgb(0,0,0,0.2)]  overflow-hidden p-0 m-0`}
        >
          <motion.div
            className={`${
              windowSize?.width > 900 ? `h-[460px]` : `h-[fit]`
            } w-full  rounded-[10px]  overflow-hidden shadow-[0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)]`}
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            ref={ref}
          >
            <nav>
              <img
                className={`${
                  windowSize?.width > 900
                    ? `w-[80px] h-[80px]`
                    : `w-[60px] h-[60px]`
                } `}
                src={githubLogo}
              ></img>
              <span
                className={`${
                  windowSize?.width > 900 ? `text-[36px]` : `text-[24px]`
                } ml-[10px] text-white  font-['Acorn-bold']`}
              >
                GitHub
              </span>
              <motion.div className="underline" layoutId="underline" />
            </nav>
            <main>
              <AnimatePresence mode="wait">
                <motion.div
                  key={"empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`${
                      windowSize?.width > 900
                        ? `w-[450px] h-[300px]`
                        : `w-full h-full pt-[5%]`
                    } `}
                  >
                    <motion.div
                      className={`${
                        windowSize?.width > 900
                          ? `w-[200px] h-[200px] `
                          : `w-[40%] h-[40%] ml-2`
                      } relative z-[1000]`}
                    >
                      <img
                        className="w-full h-full rounded-full"
                        src={myPhoto}
                      />
                    </motion.div>
                    <div
                      style={{
                        backgroundColor: "var(--github-color)",
                        marginTop: "-100px",
                        height: "60%",
                      }}
                      className="w-[98%] text-[32px] mt-[-200px] rounded-[20px]"
                    >
                      <div className="relative w-full h-[120px]"></div>
                      <div
                        className="w-[150px] h-[40px] mr-[50px]  float-right"
                        style={{
                          marginTop: "-90px",
                        }}
                      >
                        <a
                          href="https://www.github.com/farhan26azam/"
                          target="_blank"
                          className="w-full h-full pr-1 pl-1 flex justify-center items-center rounded-xl cursor-pointer"
                          style={{
                            backgroundColor: "var(--github-action)",
                          }}
                        >
                          <span
                            className="text-lg font-semibold"
                            style={{
                              color: "white",
                            }}
                          >
                            {SOCIAL_SITES[1]?.button}
                          </span>
                        </a>
                      </div>
                      <div
                        className="w-full flex text-center items-center justify-center text-[32px] text-white font-semibold"
                        style={{
                          paddingTop: "0px",
                        }}
                      >
                        {SOCIAL_SITES[1]?.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
