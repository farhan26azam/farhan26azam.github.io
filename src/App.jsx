import { useState } from "react";
import reactLogo from "./assets/myphoto.jpg";
import "./App.css";
import Navbar from "./components/navbarComponents/Navbar";
import Hero from "./components/heroComponents/Hero";
function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
