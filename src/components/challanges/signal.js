import React from "react";

const Signal = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-pink-900 to-black">
      <div className="max-w-5xl w-full md:flex bg-blue-1000 rounded-lg  overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Signal Processing for Communications Challenge
          </h1>
          <p className="text-lg  text-white mb-6">
            The Sri Lanka Circuits Challenge of the IEEE Sri Lanka
            ChallengeSphere 2024 is launched to facilitate innovation and
            open-ended electronic product design targeting the IEEE CASS Student
            Design Competition 2024-25.
          </p>
          <p className="text-lg  text-white mb-6">
            Registration is <p className="text-xl text-white font-bold">open</p>{" "}
            for the Circuits Challenge.
          </p>
          <p className="text-lg text-white mb-6 flex items-center">
            <img
              src="/calender.png"
              alt="calender icon"
              width={30}
              height={30}
              className=" justify-center items-center"
            />
            Registration deadline:{" "}
            <p className="text-lg font-bold text-cyan-300 ">
              28th July 2024, 11:59 PM IST
            </p>
          </p>
          <div className="flex space-x-4">
            <a
              href="https://bit.ly/CircuitsChallenge"
              target="_blank"
              rel="noopener noreferrer"
              className=" border-blue-600 shadow-black hover:bg-blue-600 font-bold text-white py-3 px-6 rounded-lg shadow-md transition duration-300 text-lg"
            >
              Register Now
            </a>
            <a
              href="https://docs.google.com/document/d/1XjbmKeflTUIaazvU5Zn0K2xnUtYCP9UL-uAFR0RdEqA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-blue-600 shadow-black hover:bg-blue-600 font-bold text-white py-3 px-6 rounded-lg shadow-md transition duration-300 text-lg"
            >
              Problem Statement
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            className="w-64 h-64 md:w-96 md:h-96 object-contain"
            src="/challanges/Signal.svg"
            alt="Circuit Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Signal;
