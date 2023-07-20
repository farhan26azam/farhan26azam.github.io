import "./styles.css";
import { useEffect, useRef, useState } from "react";
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
    <div className="border-white border-2 w-[94%]">
      <div className="flex text-[130px] h-[168px] text-[var(--light-gray)] justify-center mb-[10px] font-['Acorn-bold']">
        <div className="cursor-pointer transition-all duration-300 hover:text-[140px]">
          Connect with Me
        </div>
      </div>
      <div className="flex gap-4">
        {/* LinkedIn  */}
        <div className="w-[650px] font-[128px] user-select-none mt-[100px] mb-[120px] bg-[rgb(0,0,0,0.2)] rounded-[50px] pl-[30px] overflow-hidden p-0 m-0">
          <motion.div
            className="w-full h-[460px] rounded-[10px]  overflow-hidden shadow-[0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)] overflow-auto "
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            ref={ref}
          >
            <nav>
              <img className="w-[80px] h-[80px]" src={linkedinLogo}></img>
              <span className="ml-[10px] text-white text-[36px] font-['Acorn-bold']">
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
                  <div className="w-[450px] h-[300px]">
                    <motion.div className="relative w-[200px] h-[200px] rounded-full ml-4 z-[1000]">
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
        <div className="w-[650px] font-[128px] user-select-none mt-[100px] mb-[120px] bg-[rgb(0,0,0,0.2)] rounded-[50px] pl-[30px] overflow-hidden p-0 m-0">
          <motion.div
            className="w-full h-[460px] rounded-[10px]  overflow-hidden shadow-[0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)] overflow-auto "
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            ref={ref}
          >
            <nav>
              <img className="w-[80px] h-[80px]" src={githubLogo}></img>
              <span className="ml-[10px] text-white text-[36px] font-['Acorn-bold']">
                GitHub
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
                  <div className="w-[450px] h-[300px]">
                    <motion.div className="relative w-[200px] h-[200px] rounded-full ml-4 z-[1000]">
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
                          href="https://github.com/farhan26azam"
                          target="_blank"
                          className="w-full h-full pr-1 pl-1 flex justify-center items-center rounded-xl cursor-pointer"
                          style={{
                            backgroundColor:"var(--github-action)",
                          }}
                        >
                          <span
                            className="text-lg font-semibold"
                            style={{
                              color:"white",
                            }}
                          >
                            {SOCIAL_SITES[1]?.button}
                          </span>
                        </a>
                      </div>
                      <div
                        className="w-full flex text-center items-center justify-center text-[32px] text-white font-semibold"
                        style={{
                          paddingTop:"0px",
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
        <div className="w-[680px] flex justify-center items-center font-[128px] flex-grow-1 user-select-none mt-[100px] mb-[120px] bg-[rgb(0,0,0,0.2)] rounded-[50px] pl-[30px]overflow-hidden p-0 m-0">
          <motion.div
            className="w-full h-[460px] rounded-[10px]  overflow-hidden shadow-[0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)] flex flex-row overflow-auto"
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            ref={ref}
          >
            <nav>
              <ul>
                {SOCIAL_SITES.map((item) => (
                  <li
                    key={item?.site}
                    className={item === selectedTab ? "selected" : ""}
                    onClick={() => setSelectedTab(item)}
                  >
                    <img
                      className="w-[50px] h-[50px]"
                      src={
                        item?.site === "LinkedIn" ? linkedinLogo : githubLogo
                      }
                    ></img>
                    {item === selectedTab ? (
                      <motion.div className="underline" layoutId="underline" />
                    ) : null}
                  </li>
                ))}
              </ul>
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
                  <div className="w-[450px] h-[300px]">
                    <motion.div className="relative w-[200px] h-[200px] rounded-full ml-4 z-[1000]">
                      <img
                        className="w-full h-full rounded-full"
                        src={myPhoto}
                      />
                    </motion.div>
                    <div
                      style={{
                        backgroundColor:
                          selectedTab?.site === "LinkedIn"
                            ? "var(--linkedin-color)"
                            : "var(--github-color)",
                        marginTop:
                          selectedTab?.site === "LinkedIn"
                            ? "-200px"
                            : "-100px",
                        height:
                          selectedTab?.site === "LinkedIn" ? "98%" : "60%",
                      }}
                      className="w-[98%] text-[32px] mt-[-200px] rounded-[20px]"
                    >
                      <div className="relative w-full h-[120px]">
                        {selectedTab?.site === "LinkedIn" && (
                          <img
                            className="w-full h-full rounded-t-[20px]"
                            src={linkedinCover}
                          />
                        )}
                      </div>
                      <div
                        className="w-[150px] h-[40px] mr-[50px]  float-right"
                        style={{
                          marginTop:
                            selectedTab?.site === "LinkedIn" ? "28px" : "-90px",
                        }}
                      >
                        {selectedTab?.site === "LinkedIn" ? (
                          <a
                            href="https://www.linkedin.com/in/muhammad-farhan-azam"
                            target="_blank"
                            className="w-full h-full pr-1 pl-1 flex justify-center items-center rounded-xl"
                            style={{
                              backgroundColor:
                                selectedTab?.site === "LinkedIn"
                                  ? "white"
                                  : "var(--github-action)",
                            }}
                          >
                            <span
                              className="text-lg font-semibold"
                              style={{
                                color:
                                  selectedTab?.site === "LinkedIn"
                                    ? "var(--linkedin-color)"
                                    : "white",
                              }}
                            >
                              {selectedTab?.button}
                            </span>
                          </a>
                        ) : (
                          <a
                            href="https://www.linkedin.com/in/muhammad-farhan-azam"
                            onClick={openWebsite}
                            target="_blank"
                            className="w-full h-full pr-1 pl-1 flex justify-center items-center rounded-xl cursor-pointer"
                            style={{
                              backgroundColor:
                                selectedTab?.site === "LinkedIn"
                                  ? "white"
                                  : "var(--github-action)",
                            }}
                          >
                            <span
                              className="text-lg font-semibold"
                              style={{
                                color:
                                  selectedTab?.site === "LinkedIn"
                                    ? "var(--linkedin-color)"
                                    : "white",
                              }}
                            >
                              {selectedTab?.button}
                            </span>
                          </a>
                        )}
                      </div>
                      <div
                        className="w-full flex text-center items-center justify-center text-[32px] text-white font-semibold"
                        style={{
                          paddingTop:
                            selectedTab?.site === "LinkedIn" ? "20px" : "0px",
                        }}
                      >
                        {selectedTab?.name}
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
