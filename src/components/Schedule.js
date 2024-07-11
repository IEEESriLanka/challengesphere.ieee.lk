import React from "react";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaTrophy,
  FaFlagCheckered,
  FaFlag,
} from "react-icons/fa";

const Schedule = () => {
  return (
    <div className="schedule-section bg-gradient-to-b from-blue-100 via-slate-100 to-blue-100 text-blue-900 py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full relative">
        <h2 className="text-5xl font-bold text-center mb-16">Schedule</h2>

        <div className=" mt-1 md:mt-48 md:grid md:grid-cols-9 md:items-center flex flex-col space-y-8 md:space-y-0">
          {/* Start Event */}
          <div className="flex flex-col mb-14 items-center">
            <FaFlag className="text-green-500 mb-2" size={50} />
            <div className="p-2 rounded-lg text-center">
              <span className="block text-xl font-bold">Start</span>
            </div>
          </div>

          {/* Path Line */}
          <div className="hidden md:block relative">
            <div className="absolute left-8 w-10 h-1  top-1/2 transform -translate-y-1/2"></div>
          </div>

          {/* Elevate Session */}
          <div className="flex flex-col  items-center">
            <FaCalendarAlt className="text-red-500 mb-2" size={50} />
            <div className="p-2 rounded-lg text-center">
              <span className="block text-xl font-bold">27th June</span>
              <span className="block text-lg">Elevate Session</span>
            </div>
          </div>

          {/* Path Line */}
          <div className="hidden md:block relative">
            <div className="absolute left-8 w-10 h-1  top-1/2 transform -translate-y-1/2"></div>
          </div>

          {/* Workshops */}
          <div className="flex flex-col items-center">
            <FaChalkboardTeacher className="text-red-500 mb-2" size={50} />
            <div className="p-2 rounded-lg text-center">
              <span className="block text-xl font-bold">July</span>
              <br />
              <span className="block text-lg">Workshops</span>
            </div>
          </div>

          {/* Path Line */}
          <div className="hidden md:block relative">
            <div className="absolute left-8 w-10 h-1  top-1/2 transform -translate-y-1/2"></div>
          </div>

          {/* Semi Finals */}
          <div className="flex flex-col items-center">
            <FaTrophy className="text-red-500 mb-2" size={50} />
            <div className="p-2 rounded-lg text-center">
              <span className="block text-lg font-bold">August</span>
              <br />
              <span className="block text-lg">Semi Finals</span>
            </div>
          </div>

          {/* Path Line */}
          <div className="hidden md:block relative">
            <div className="absolute left-8 w-10 h-1  top-1/2 transform -translate-y-1/2"></div>
          </div>

          {/* Final Ceremony */}
          <div className="flex flex-col  items-center">
            <FaFlagCheckered className="text-red-500 mb-2" size={50} />
            <div className="p-2 rounded-lg text-center">
              <span className="block text-lg font-bold">September</span>

              <span className="block text-lg">Final Ceremony</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;