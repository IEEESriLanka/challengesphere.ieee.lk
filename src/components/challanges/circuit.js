import React from "react";

const Circuit = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-100 via-slate-100 to-blue-100">
      <div className="max-w-5xl w-full flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:w-1/2 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Circuit Challenge
          </h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            The Sri Lanka Circuits Challenge of the IEEE Sri Lanka
            ChallengeSphere 2024 is launched to facilitate innovation and
            open-ended electronic product design targeting the IEEE CASS Student
            Design Competition 2024-25.
          </p>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Registration is{" "}
            <span className="text-xl text-gray-900 font-bold">open</span> for
            the Circuits Challenge.
          </p>

          <p className="text-lg text-gray-700 mb-6 flex flex-col items-center">
            <img
              src="/calender.png"
              alt="calendar icon"
              width={30}
              height={30}
              className="mb-2"
            />
            Registration Deadline:
            <span className="text-lg font-bold text-green-600">
              31st August, 11:59 PM
            </span>
          </p>
          {/* Deadlines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div className="flex px-3 flex-col items-center border p-1 border-cyan-100 hover:bg-blue-200  shadow-md rounded-lg duration-1000">
              <img
                src="/challanges/icons/team.png"
                alt="calendar icon"
                width={32}
                height={30}
                className="mb-2"
              />
              <p className="text-lg font-semibold text-blue-800">Workshop 1</p>
              <p className="text-lg font-bold text-blue-500">July 23</p>
            </div>
            <div className="flex px-3 flex-col items-center border p-1 border-cyan-100 shadow-md hover:bg-blue-200 rounded-lg duration-1000">
              <img
                src=" /challanges/icons/team.png"
                alt="calendar icon"
                width={32}
                height={30}
                className="mb-2"
              />
              <p className="text-lg font-semibold text-blue-800">Workshop 2</p>
              <p className="text-lg font-bold text-blue-500">Aug 3</p>
            </div>
          </div>

          <div className="flex pt-6 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
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
          </div>
          {/* Contact Button */}
          <div className="flex flex-col items-start mt-5 -ml-28 ">
            <p className=" text-black  font-bold ">For more Information, please contact:</p>
            <div className="inline-flex mt-2">
              <a
                href="mailto:anujayavidmal@gmail.com"
                className="inline-flex items-end border-black  shadow-md shadow-blue-300 hover:bg-blue-200 font-bold text-black py-2 px-3 rounded-lg transition duration-300 text-lg bg-white text-center"
              >
                <img
                  src="/pngwing.com.png" // replace with the correct path to your email icon
                  alt="email icon"
                  width={24}
                  height={24}
                  className="mr-2 pb-1"
                />


                <p className="text-start text-xl">Anujaya</p>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center md:w-1/2 p-8">
          <img
            className="w-64 h-64 md:w-96 md:h-96 object-contain"
            src="/challanges/Circuits.svg"
            alt="Circuit Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Circuit;
