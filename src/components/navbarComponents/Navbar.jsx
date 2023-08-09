import * as React from "react";
import {
  NAVBAR_LINKS_LEFT,
  NAVBAR_LINKS_CENTER,
  NAVBAR_LINKS_RIGHT,
  NAVBAR_LINKS_CENTER_SMALL,
} from "../../constants";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ backButton, homeButton }) => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [seeMore, setSeeMore] = React.useState(false);
  const location = useLocation();
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
      className={`flex w-[100%] ${
        windowSize?.width > 900 ? `px-[4%]` : `px-0`
      }`}
      style={{
        display: windowSize?.width > 900 && "grid",
        gridTemplateColumns: windowSize?.width > 900 && "10% 10% 60% 20%",
      }}
    >
      {windowSize?.width > 900 && (
        <button
          className="relative left-0 w-[90%] h-[full]"
          onClick={backButton}
        >
          {location.pathname !== "/" && (
            <div className="flex items-center justify-center h-[50%] font-['Acorn-bold'] border-white border-[1px] rounded-3xl text-[var(--light-gray)]">
              Back
            </div>
          )}
        </button>
      )}
      {windowSize?.width > 900 && (
        <button
          className="relative left-0 w-[90%] h-[full]"
          onClick={homeButton}
        >
          {location.pathname !== "/" && (
            <div className="flex items-center justify-center h-[50%] font-['Acorn-bold'] border-white border-[1px] rounded-3xl text-[var(--light-gray)]">
              Home
            </div>
          )}
        </button>
      )}
      <div
        className={`w-[96%] ${
          windowSize?.width > 900
            ? `h-[80px] flex justify-center`
            : `flex flex-col h-[60px]`
        }`}
      >
        <motion.div
          className={`rounded-[40px] bg-[rgb(255,255,255,0.01)] hover:bg-[rgb(255,255,255,0.2)]  duration-300 shadow-2xl flex flex-row justify-center mx-3.5 text-center items-center top-0 ${
            windowSize?.width > 900
              ? `w-[80%] hover:w-[85%] hover:border-transparent hover:scale-110`
              : `w-[100%]`
          }   border-[rgb(255,255,255,0.3)]  border-2`}
        >
          <div
            className={`flex flex-row w-full ${
              windowSize?.width > 900
                ? `justify-between p-[20px]`
                : `justify-between p-[10px]`
            } items-center mb-2`}
          >
            {windowSize?.width > 900
              ? NAVBAR_LINKS_CENTER?.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item}`}
                    className={`${
                      windowSize?.width > 900 &&
                      `hover:text-[26px] hover:border-transparent hover:h-[50px]`
                    } transition-all duration-700 ease-in-out text-[18px]   h-[39px] font-['Acorn-bold'] bg-[var(--theme-color-4)] px-3 rounded-3xl   flex flex-col items-center justify-center`}
                  >
                    <span className="opacity-100 text-[var(--theme-color-1)]">
                      {item}
                    </span>
                  </Link>
                ))
              : NAVBAR_LINKS_CENTER_SMALL?.map((item, index) => {
                  if (location.pathname !== "More") {
                    return (
                      <Link
                        key={index}
                        to={`/${item}`}
                        className="transition-all duration-700 ease-in-out text-[18px] h-[39px] font-['Acorn-bold'] bg-[var(--theme-color-4)] px-3 rounded-3xl  flex flex-col items-center justify-center"
                      >
                        <span className="opacity-100 text-[var(--theme-color-1)]">
                          {item}
                        </span>
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        key={index}
                        to={`/`}
                        className="transition-all duration-700 ease-in-out text-[18px] h-[39px] font-['Acorn-bold'] bg-[var(--theme-color-4)] px-3 rounded-3xl  flex flex-col items-center justify-center"
                      >
                        <span className="opacity-100 text-[var(--theme-color-1)]">
                          Home
                        </span>
                      </Link>
                    );
                  }
                })}
          </div>
        </motion.div>
      </div>
      {windowSize?.width > 900 && (
        <a
          href="https://github.com/farhan26azam/MuhammadFarhanAzamCV"
          className="relative left-0 w-[90%] h-[full]"
          id="downloadButton"
          target="_blank"
        >
          <div className="flex items-center justify-center h-[50%] font-['Acorn-semibold'] border-white border-[1px] rounded-3xl text-[var(--light-gray)]">
            Request CV
          </div>
        </a>
      )}
    </div>
  );
};

export default Navbar;
