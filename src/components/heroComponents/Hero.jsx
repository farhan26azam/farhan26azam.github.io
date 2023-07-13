import React from "react";
import myPhoto from "../../assets/myphoto.jpg";
const Hero = () => {
  return (
    <div className="w-[80%] rounded-[250px] h-[700px] mt-[80px] flex flex-col items-center justify-center bg-[rgb(0,0,0,0.3)] hover:bg-[rgb(0,0,0,0.7)] transition-all duration-500 hover:scale-110 shadow-2xl">
      <div className="flex flex-col items-center">
        <div className="h-[220px] w-[220px] flex flex-row justify-center items-center border-[rgb(255,255,255,0.5)] border-[5px] rounded-[50%] hover:scale-110 transition-all duration-500 shadow-2xl">
          <img src={myPhoto} alt="myImage" className="rounded-[50%] w-full h-full" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[168px] w-[940px] flex flex-row justify-center items-center">
            <div className="flex font-['Acorn-bold'] text-[130px] h-[168px] text-[var(--light-gray)]">
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--button)]">
                Hi! &nbsp;
              </div>
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--button)]">
                I'm &nbsp;
              </div>
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--button)]">
                Farhan
              </div>
            </div>
          </div>
          <div className="h-[168px] w-[1233px] flex flex-row justify-center items-center">
          <div className="flex font-['Acorn-bold'] text-[130px] h-[168px] text-[var(--light-gray)]">
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--button)]">
                A &nbsp;
              </div>
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--button)]">
                Web &nbsp;
              </div>
              <div className="cursor-pointer transition-all duration-300 hover:text-[140px] hover:text-[var(--button)]">
                Developer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[48px] w-[570px] text-center text-white">
        I'm passionate about crafting experiences that are engaging, accessible,
        and user-centric.
      </div>
    </div>
  );
};

export default Hero;
