import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/navbarComponents/Navbar";
import Hero from "./components/heroComponents/Hero";
import SocialLinks from "./components/socialLinksComponents/SocialLinks";
import Education from "./components/educationComponents/Education";
import About from "./components/aboutComponents/About";
import Work from "./components/workComponents/Work";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/footerComponents/Footer";
import Loading from "./assets/refresh-arrow.png";
import Projects from "./components/projectsComponents/Projects";
import Skills from "./components/skillsComponents/Skills";
const loadingSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
  >
    {/* Replace with your SVG animation */}
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      strokeWidth="10"
      stroke="var(--theme-color-1)"
    >
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        values="0;45"
        keyTimes="0;1"
      />
      <animate
        attributeName="opacity"
        repeatCount="indefinite"
        dur="1s"
        values="1;0"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);
function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    // Simulate an asynchronous task (e.g., API call or image loading)
    const loadData = () => {
      // Replace setTimeout with your actual asynchronous task
      setTimeout(() => {
        setIsLoading(false); // Set isLoading to false after the data is loaded
      }, 2000); // Simulating a 2-second loading time
    };

    loadData();
  }, []);

  const mainPage = (
    <>
      <Hero />
      <Work />
      <About />
      <Education />
      <SocialLinks />
      <Projects />
      <Skills />
    </>
  );

  return (
    <>
      {isLoading ? (
        <div className="mt-[10%]">
          <div className="flex justify-center items-center animate-spin overflow-hidden">
            <img className="w-[30%]" src={Loading} />
          </div>
        </div>
      ) : (
        // Render your website content here

        <div className="flex flex-col justify-center items-center pt-[20px]">
          <Navbar backButton={goBack} homeButton={goHome} />
          <Routes>
            <Route path="/" element={mainPage} />

            <Route path="/Connect" element={<SocialLinks />} />
            <Route path="/Projects" element={<Projects />} />

            <Route path="/Education" element={<Education />} />

            <Route path="/About" element={<About />} />
            <Route path="/Work" element={<Work />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
