import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[rgb(0,0,0,0.4)] py-10 text-white w-full font-['Acorn-bold']">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-4 font-['Acorn-semibold']">
          Email: <a href="mailto:farhan26azam@gmail.com" className="text-white">farhan26azam@gmail.com</a>
        </p>
        <div className="flex mb-4">
          <a
            href="https://linkedin.com/in/muhammad-farhanazam/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-white"
          >
            <i className="fab fa-linkedin-in text-xl"></i> LinkedIn
          </a>
          <a
            href="https://github.com/farhan26azam"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-white"
          >
            <i className="fab fa-github text-xl"></i> GitHub
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Muhammad Farhan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
