import React from "react";
import {
  NAVBAR_LINKS_LEFT,
  NAVBAR_LINKS_CENTER,
  NAVBAR_LINKS_RIGHT,
} from "../../constants";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ backButton, homeButton }) => {
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
      className="flex w-[100%] pr-[4%] pl-[4%]"
      style={{ display: "grid", gridTemplateColumns: "10% 10% 60% 20%" }}
    >
      {windowSize?.width > 900 && (
        <button
          className="relative left-0 w-[90%] h-[full]"
          onClick={backButton}
        >
          {location.pathname !== "/" && (
            <div className="flex items-center justify-center h-[50%] font-['Acorn-semibold'] border-white border-[1px] rounded-3xl text-[var(--light-gray)]">
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
            <div className="flex items-center justify-center h-[50%] font-['Acorn-semibold'] border-white border-[1px] rounded-3xl text-[var(--light-gray)]">
              Home
            </div>
          )}
        </button>
      )}
      <div className="flex justify-center w-full">
        <motion.div className="rounded-[40px] bg-[rgb(255,255,255,0.01)] hover:bg-[rgb(255,255,255,0.2)] hover:scale-110 duration-300 shadow-2xl flex flex-row justify-center mx-3.5 text-center items-center top-0 w-[700px] hover:w-[900px] h-20 border-[rgb(255,255,255,0.3)] hover:border-transparent border-2">
          <div className="flex flex-row w-full justify-between h-14 items-center  p-[20px] mb-2">
            {NAVBAR_LINKS_CENTER?.map((item, index) => (
              <Link
                key={index}
                to={`/${item}`}
                className="transition-all duration-700 ease-in-out text-[18px] hover:text-[26px] hover:h-[50px] h-[39px] font-['Acorn-semibold'] bg-[var(--theme-color-4)] px-3 rounded-3xl hover:border-transparent  flex flex-col items-center justify-center"
              >
                <span className="opacity-100 text-[var(--theme-color-1)] font-semibold">
                  {item}
                </span>
              </Link>
            ))}
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

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { NAVBAR_LINKS_CENTER } from "../../constants";
// import { motion } from "framer-motion";

// const Navbar = ({ backButton, homeButton }) => {
//   const location = useLocation();

//   return (
//     <div className="flex w-full pr-4 pl-4 md:pr-0 md:pl-0">
//       <div className="w-10 md:w-1/10">
//         <button className="relative left-0 w-full h-full" onClick={backButton}>
//           {location.pathname !== "/" && (
//             <div className="flex items-center justify-center h-1/2 font-semibold border-white border-2 rounded-3xl text-gray-300">
//               Back
//             </div>
//           )}
//         </button>
//       </div>
//       <div className="w-10 md:w-1/10">
//         <button className="relative left-0 w-full h-full" onClick={homeButton}>
//           {location.pathname !== "/" && (
//             <div className="flex items-center justify-center h-1/2 font-semibold border-white border-2 rounded-3xl text-gray-300">
//               Home
//             </div>
//           )}
//         </button>
//       </div>
//       <div className="w-full flex justify-center">
//         <motion.div className="rounded-[40px] bg-opacity-20 hover:bg-opacity-40 hover:scale-110 duration-300 shadow-2xl flex flex-row justify-center mx-3.5 text-center items-center top-0 w-4/6 md:w-auto border-opacity-30 hover:border-transparent border-2">
//           <div className="flex flex-row justify-between h-14 items-center p-[10px] md:p-[20px] mb-2">
//             {NAVBAR_LINKS_CENTER?.map((item, index) => (
//               <Link
//                 key={index}
//                 to={`/${item}`}
//                 className="transition-all duration-700 ease-in-out text-lg md:text-xl lg:text-2xl hover:text-3xl hover:h-14 h-12 font-semibold bg-[#007BFF] px-4 md:px-6 lg:px-8 rounded-3xl hover:border-transparent  flex flex-col items-center justify-center"
//               >
//                 <span className="opacity-100 text-white font-semibold">
//                   {item}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//       <a
//         href="https://github.com/farhan26azam/MuhammadFarhanAzamCV"
//         className="relative left-0 w-10 md:w-1/10"
//         id="downloadButton"
//         target="_blank"
//       >
//         <div className="flex items-center justify-center h-1/2 font-semibold border-white border-2 rounded-3xl text-gray-300">
//           Request CV
//         </div>
//       </a>
//     </div>
//   );
// };

// export default Navbar;
