import React from "react";
import myPhoto from "../../assets/myphoto.jpg";
import { motion } from "framer-motion";
import "./styles.css";
import Profession from "./Profession";
import JSLogo from '../../assets/javascript-logo.png'
const variants = {
  hidden: { x: -1000 }, // Start position (off-screen to the left)
  visible: { x: 0 }, // End position (on-screen)
};
const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      className="relative w-[80%] rounded-[250px] h-[78vh] mt-[80px] flex flex-col items-center justify-center hover:bg-[rgb(0,0,0,0.7)] hover:scale-110 shadow-2xl"
    >
      <div className="absolute top-9 left-44">
        <img className="w-[140px] h-[140px] hover:animate-pulse" src={JSLogo}/>
      </div>
      <div className="absolute top-28 right-60 hover:animate-bounce">
        <svg
          width="67"
          height="66"
          viewBox="0 0 67 66"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_12)">
            <path
              d="M28.6867 4.23225C29.8746 -0.94305 37.2454 -0.943038 38.4333 4.23226L42.1929 20.6124C42.6216 22.48 44.08 23.9384 45.9476 24.3671L62.3278 28.1267C67.503 29.3146 67.503 36.6854 62.3277 37.8733L45.9476 41.6329C44.08 42.0616 42.6216 43.52 42.1929 45.3876L38.4333 61.7678C37.2454 66.943 29.8746 66.943 28.6867 61.7677L24.9271 45.3876C24.4984 43.52 23.04 42.0616 21.1724 41.6329L4.79224 37.8733C-0.383064 36.6854 -0.383052 29.3146 4.79225 28.1267L21.1724 24.3671C23.04 23.9384 24.4984 22.48 24.9271 20.6124L28.6867 4.23225Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_12">
              <rect
                width="66"
                height="66"
                fill="white"
                transform="translate(0.559998)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="h-[168px] w-[940px] flex flex-row justify-center items-center">
            <div className="flex font-['Acorn-bold'] text-[130px] h-[168px] text-[var(--light-gray)]">
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--theme-color-4)]">
                Hi. &nbsp;
              </div>
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--theme-color-4)]">
                I'm &nbsp;
              </div>
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--theme-color-4)]">
                Farhan
              </div>
            </div>
          </div>
          <div className="h-[168px] w-fit flex flex-row justify-center items-center">
            <div className="flex font-['Acorn-bold'] text-[130px] h-[168px] text-[var(--light-gray)]">
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--theme-color-4)]">
                A &nbsp;
              </div>
              {/* <Profession /> */}
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--theme-color-4)]">
                Web &nbsp;
              </div>
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--theme-color-4)]">
                Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
