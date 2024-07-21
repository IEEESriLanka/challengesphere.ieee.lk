import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      id="about"
      className="relative  flex items-center justify-center h-screen bg-gradient-to-b from-black via-blue-500 to-blue-100 text-blue-800 font-semibold pt-24 pb-24"
    >
      {/* Content */}
      <div className="flex flex-col items-center w-full max-w-5xl space-y-8">
        {/* Main Logo */}
        <img
          className="w-32 h-auto md:w-56 md:h-56 mb-1 mt-4"
          src="/main-logo.svg"
          alt="Main Logo"
        />

        {/* Small Logos */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-row justify-center space-x-8 md:space-x-0">
            <div className="flex flex-col items-center space-y-2 p-1 hover:font-semibold transition-transform transform hover:scale-110">
              <Link to="circuit" smooth={true} duration={500}>
                <img
                  className="w-24 h-auto md:w-36 md:h-auto cursor-pointer"
                  src="/challanges/icons_new/Citcuits Challange.png"
                  alt="Circuits Challenge"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-2 p-1 hover:font-semibold transition-transform transform hover:scale-110">
              <Link to="arduino" smooth={true} duration={500}>
                <img
                  className="w-24 h-auto md:w-36 md:h-auto cursor-pointer"
                  src="/challanges/icons_new/Arduino Challange.png"
                  alt="Arduino Challenge"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center space-x-8 md:space-x-0">
            <div className="flex flex-col items-center space-y-2 p-1 hover:font-semibold transition-transform transform hover:scale-110">
              <Link to="ai" smooth={true} duration={500}>
                <img
                  className="w-24 h-auto md:w-36 md:h-auto cursor-pointer"
                  src="/challanges/icons_new/AI Challange.png"
                  alt="AI Challenge"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-2 p-1 hover:font-semibold transition-transform transform hover:scale-110">
              <Link to="signal" smooth={true} duration={500}>
                <img
                  className="w-24 h-auto md:w-36 md:h-auto cursor-pointer"
                  src="/challanges/icons_new/Signal Challange 1.png"
                  alt="Signal Challenge"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center space-y-2 p-1 hover:font-semibold transition-transform transform hover:scale-110">
              <Link to="chips" smooth={true} duration={500}>
                <img
                  className="w-24 h-auto md:w-36 md:h-auto cursor-pointer"
                  src="/challanges/icons_new/Group 58.png"
                  alt="Chips Challenge"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
