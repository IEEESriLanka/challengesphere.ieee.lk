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
    <div className="schedule-section bg-gradient-to-b from-black via-blue-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full relative">
        <h2 className="text-5xl font-bold text-center mb-12">Schedule</h2>

        <div className="grid grid-cols-9 items-center">
          {/* Start Event */}
          <div className="flex flex-col items-center">
            <FaFlag className="text-green-500 mb-2" size={32} />
            <div className=" p-2 rounded-lg text-center">
              <span className="block text-sm font-bold">Start</span>
            </div>
          </div>

          {/* Path Line */}
          <div className="relative">
            <div className="absolute left-5 w-10  h-1 bg-green-500 top-1/2 transform -translate-y-1/2"></div>
          </div>

          {/* Elevate Session */}
          <div className="flex flex-col items-center">
            <FaCalendarAlt className="text-red-500 mb-2" size={32} />
            <div className=" p-2 rounded-lg text-center">
              <span className="block text-xs font-bold ">27th June</span>
              <br />
              <span className="block text-xs">Elevate Session</span>
              <span className="block text-xs">[In-person Session]</span>
            </div>
          </div>

          {/* Path Line */}
          <div className="relative">
            <div className="absolute left-5 w-10  h-1 bg-green-500 top-1/2 transform -translate-y-1/2"></div>
          </div>

          {/* Workshops */}
          <div className="flex flex-col items-center">
            <FaChalkboardTeacher className="text-red-500 mb-2" size={32} />
            <div className=" p-2 rounded-lg text-center">
              <span className="block text-xs font-bold">July</span>
              <br />
              <span className="block text-xs">Workshops</span>
            </div>
          </div>

          {/* Path Line */}
          <div className="relative">
            <div className="absolute left-5 w-10  h-1 bg-green-500 top-1/2 transform -translate-y-1/2"></div>
          </div>

          {/* Semi Finals */}
          <div className="flex flex-col items-center">
            <FaTrophy className="text-red-500 mb-2" size={32} />
            <div className=" p-2 rounded-lg text-center">
              <span className="block text-xs font-bold">August</span>
              <br />
              <span className="block text-xs">Semi Finals</span>
            </div>
          </div>

          {/* Path Line */}
          <div className="relative">
            <div className="absolute left-5 w-10  h-1 bg-green-500 top-1/2 transform -translate-y-1/2"></div>
          </div>

          {/* Final Ceremony */}
          <div className="flex flex-col items-center">
            <FaFlagCheckered className="text-red-500 mb-2" size={32} />
            <div className=" p-2 rounded-lg text-center">
              <span className="block text-xs font-bold">September</span>
              <br />
              <span className="block text-xs">Final Ceremony</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
