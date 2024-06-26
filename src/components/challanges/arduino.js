import React from "react";

const Arduino = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-100 via-slate-100 to-blue-100">
      <div className="max-w-5xl w-full md:flex bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Arduino Challenge
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            If you are an individual or a team who is interested in Arduino,
            Here's your chance to showcase your innovative skills in Sri Lanka's
            biggest Arduino competition.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Registration is{" "}
            <span className="text-xl text-gray-900 font-bold">open</span> for
            the Arduino Challenge.
          </p>
          {/* <p className="text-lg text-gray-700 mb-6 flex items-center">
            <img
              src="/calender.png"
              alt="calendar icon"
              width={30}
              height={30}
              className="justify-center items-center"
            />
            Registration deadline:{" "}
            <span className="text-lg font-bold text-green-600">
              28th July 2024, 11:59 PM IST
            </span>
          </p> */}
          <div className="">
            <a
              href="https://forms.gle/JJng4zpyMuNNEUvM8"
              target="_blank"
              rel="noopener noreferrer"
              className="border-green-600 border-2 shadow-md hover:bg-green-600 font-bold text-white py-3 px-6 rounded-lg shadow-md transition duration-300 text-lg bg-green-500"
            >
              Register Now
            </a>
            {/* <a
              href="https://docs.google.com/document/d/1XjbmKeflTUIaazvU5Zn0K2xnUtYCP9UL-uAFR0RdEqA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-green-600 shadow-md hover:bg-green-600 font-bold text-white py-3 px-6 rounded-lg shadow-md transition duration-300 text-lg bg-green-500"
            >
              Problem Statement
            </a> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            className="w-64 h-64 md:w-96 md:h-96 object-contain"
            src="/challanges/Arduno.svg"
            alt="Arduino Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Arduino;
