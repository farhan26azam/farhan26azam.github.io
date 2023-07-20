import * as React from "react";
import { motion } from "framer-motion";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};
const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};

export const Refresh = ({ onClick }) => {
  return (
    <motion.div
      className="refresh"
      onClick={onClick}
      variants={button}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
    >
      <>move me around</>
      {/* <motion.svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        variants={arrow}
      >
        {/* <path
          d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
          fill="#222222"
          fill-opacity="0.3"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        /> */}
      {/* </motion.svg> */} 
    </motion.div>
  );
};
