import React from "react";
const Navbar = () => {
  const navigations = ["Work", "About", "Education" , "Contact"];

  return (
    <div className="flex flex-row justify-center mx-3.5 text-center place-items-end top-0 w-12/15 h-20 border-[var(--dark-green)] border-b-2">
      <div className="flex flex-row w-[442px] justify-between h-14 items-center p-[10px] mb-2">
        {navigations?.map((item) => (
          <button href="/" className="transition-all duration-700 ease-in-out
          text-[18px] hover:text-[26px] hover:h-[50px] text-white h-[39px] font-['Acorn-semibold'] bg-transparent px-3 rounded-3xl border-[var(light-gray)] hover:border-transparent border-[1px] ">
            <span className="opacity-100 text-[var(--light-gray)] font-semibold">{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
