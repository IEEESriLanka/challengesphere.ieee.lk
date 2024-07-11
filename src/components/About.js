import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      id="about"
      className="relative flex items-center justify-center h-screen bg-gradient-to-b from-black via-blue-500 to-blue-100 text-blue-800 font-semibold p-8"
    >
      {/* Main Title */}

      {/* Content */}
      <div className="flex flex-col items-center w-full max-w-5xl space-y-8">
        {/* Main Logo */}
        <img
          className="w-56 h-56 mb-6 mt-8"
          src="/main-logo.svg"
          alt="Main Logo"
        />

        {/* Small Logos */}
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="flex flex-col items-center space-y-2 p-1 hover:font-semibold transition-transform transform hover:scale-110">
            <Link to="circuit" smooth={true} duration={500}>
              <img
                className="w-28 h-auto ml-1 md:w-40 md:h-auto cursor-pointer"
                src="/challanges/Circuits.svg"
                alt="Circuits Challenge"
              />
              {/* <span className="text-center">Circuits Challenge</span> */}
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2 p-1 hover:font-semibold transition-transform transform hover:scale-110">
            <Link to="arduino" smooth={true} duration={500}>
              <img
                className="w-28 h-auto ml-2 md:w-40 md:h-auto cursor-pointer"
                src="/challanges/Arduino.svg"
                alt="Arduino Challenge"
              />
              {/* <span className="text-center">Arduino Challenge</span> */}
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-2 p-1 hover:font-semibold transition-transform transform hover:scale-110">
            <Link to="ai" smooth={true} duration={500}>
              <img
                className="w-28 h-auto md:w-40 md:h-auto cursor-pointer"
                src="/challanges/AI.svg"
                alt="AI Challenge"
              />
              {/* <span className="text-center">AI Challenge</span> */}
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-2 p-1 hover:font-semibold transition-transform transform hover:scale-110">
            <Link to="signal" smooth={true} duration={500}>
              <img
                className="w-28 h-auto md:w-40 md:h-auto cursor-pointer"
                src="/challanges/Signal.svg"
                alt="Signal Challenge"
              />
              {/* <span className="text-center ">
                Signal Processing for <br /> Communications Challenge
              </span> */}
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2 p-1 hover:font-semibold transition-transform transform hover:scale-110">
            <Link to="chips" smooth={true} duration={500}>
              <img
                className="w-28 h-auto mb-2 md:w-36 md:h-auto cursor-pointer"
                src="/challanges/chips logo.png"
                alt="Chips Challenge"
              />
              {/* <span className="text-center">Chips Challenge</span> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
