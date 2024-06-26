// Schedule.js

import React from "react";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaMedal,
  FaRegLightbulb,
} from "react-icons/fa";

const Schedule = () => {
  const events = [
    {
      date: "27th June 2024",
      title: "Elevate Session",
      description: "[In-person Session]",
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
    },
    {
      date: "July/ August",
      title: "Workshops",
      description: "",
      icon: <FaRegLightbulb className="w-6 h-6" />,
    },
    {
      date: "August",
      title: "Semi Finals",
      description: "",
      icon: <FaMedal className="w-6 h-6" />,
    },
    {
      date: "September",
      title: "Final Ceremony",
      description: "",
      icon: <FaMedal className="w-6 h-6" />,
    },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-t from-blue-900 to-black text-white p-8">
      <div className="absolute top-8 left-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Challenge Sphere Timeline
        </h1>
      </div>

      {/* Road */}
      <div className="absolute top-0 left-28 bg-blue-300 w-2 h-full transform -translate-x-1/2"></div>

      {/* Icons */}
      <div className="absolute top-0 left-20">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-blue-800 rounded-full w-10 h-10 flex items-center justify-center mb-12"
            style={{ marginTop: index === 0 ? "0" : "24px" }}
          >
            {event.icon}
          </div>
        ))}
      </div>

      {/* Events */}
      <div className="relative w-full max-w-lg mx-auto">
        <ul className="divide-y divide-gray-400">
          {events.map((event, index) => (
            <li key={index} className="py-8 relative">
              <div className="ml-6">
                <div className="text-lg font-bold">{event.date}</div>
                <div className="text-lg font-semibold">{event.title}</div>
                <div className="text-sm">{event.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
