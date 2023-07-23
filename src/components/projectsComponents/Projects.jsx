import React from "react";
import { motion, useAnimation } from "framer-motion";
import { PROJECTS_DATA } from "../../constants";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const Projects = () => {
  const [seeMore, setSeeMore] = React.useState(false);
  const ref = React.useRef(null);
  const controls = useAnimation();

  React.useEffect(() => {
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
      className={`${windowSize?.width > 900 ? `p-[20px]`:`p-[5px]`} font-['Acorn-bold'] w-[95%] min-h-[fit] mb-[5vh]`}
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
          Projects
        </div>
      </div>
      {!seeMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 transition-all duration-75">
          {PROJECTS_DATA?.slice(0, 3)?.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[rgb(0,0,0,0.6)] p-4 rounded-lg shadow-md "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              <p className="text-lg text-white">
                {project.technology} | {project.date}
              </p>
              <p className="mt-4 text-white">{project.description}</p>
              <ul className="mt-4 list-disc list-inside text-white">
                {project.features.map((feature, index) => (
                  <li key={index} className="font-['Acorn-semibold']">
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <div className="flex mt-4 space-x-4 font-['Acorn-semibold']">
              <a
                href={project.codeLink}
                target="_blank"
                className="px-4 py-2 bg-[var(--theme-color-2)] text-white rounded-full"
              >
                Source Code
              </a>
            </div> */}
            </motion.div>
          ))}
        </div>
      )}
      {seeMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA?.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[rgb(0,0,0,0.6)] p-6 rounded-lg shadow-md "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              <p className="text-lg text-white">
                {project.technology} | {project.date}
              </p>
              <p className="mt-4 text-white">{project.description}</p>
              <ul className="mt-4 list-disc list-inside text-white">
                {project.features.map((feature, index) => (
                  <li key={index} className="font-['Acorn-semibold']">
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <div className="flex mt-4 space-x-4 font-['Acorn-semibold']">
              <a
                href={project.codeLink}
                target="_blank"
                className="px-4 py-2 bg-[var(--theme-color-2)] text-white rounded-full"
              >
                Source Code
              </a>
            </div> */}
            </motion.div>
          ))}
        </div>
      )}
      <div className="py-2 my-3 w-full flex items-center justify-center ">
        {!seeMore && (
          <button
            onClick={handleSeeMore}
            className={`${
              windowSize?.width > 900
                ? `w-[30%] text-[30px]`
                : `w-full text-[20px]`
            } text-white bg-blue-500 rounded-3xl py-2`}
          >
            See All
          </button>
        )}
        {seeMore && (
          <button
            onClick={handleSeeMore}
            className={`${
              windowSize?.width > 900
                ? `w-[30%] text-[30px]`
                : `w-full text-[20px]`
            } text-white bg-blue-500 rounded-3xl py-2`}
          >
            Hide
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
