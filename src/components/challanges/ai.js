import React from "react";

const Ai = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-100 via-slate-100 to-blue-100">
      <div className="max-w-5xl w-full flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:w-1/2 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Artificial Intelligence Challenge
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            AICSL 2024, the premier AI Challenge in Sri Lanka hosted by
            ChallengeSphere 2024, offers a structured pathway with hands-on
            experience to develop AI agent-based applications. The event
            features a series of workshops followed by a 24-hour event that
            includes a workshop to develop an AI agent and a 12-hour hackathon.
          </p>
          <p className="text-xl text-red-700 font-bold mb-1 text-center">
            Stay tuned, registrations will open soon!
          </p>
          {/* <p className="text-lg text-gray-700 mb-6 flex flex-col items-center">
            <img
              src="/calender.png"
              alt="calendar icon"
              width={30}
              height={30}
              className="mb-2"
            />
            Registration Deadline:
            <span className="text-lg font-bold text-green-600">
              28th July, 11:59 PM
            </span>
          </p> */}
          {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="https://bit.ly/CircuitsChallenge"
              target="_blank"
              rel="noopener noreferrer"
              className="border-green-600 shadow-md hover:bg-green-600 font-bold text-white py-3 px-6 rounded-lg transition duration-300 text-lg bg-green-500 text-center"
            >
              Register Now
            </a>
            <a
              href="https://docs.google.com/document/d/1XjbmKeflTUIaazvU5Zn0K2xnUtYCP9UL-uAFR0RdEqA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-green-600 shadow-md hover:bg-green-600 font-bold text-white py-3 px-6 rounded-lg transition duration-300 text-lg bg-green-500 text-center"
            >
              Problem Statement
            </a>
          </div> */}
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center md:w-1/2 p-8">
          <img
            className="w-64 h-64 md:w-96 md:h-96 object-contain"
            src="/challanges/AI.svg"
            alt="Ai Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Ai;
