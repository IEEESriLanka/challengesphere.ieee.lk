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
    <div className="schedule-section bg-gradient-to-b from-black to-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full relative">
        <h2 className="text-3xl font-bold text-center mb-12">Schedule</h2>

        <svg
          className="w-full h-64 mx-auto"
          viewBox="0 0 400 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Green starting part of the path */}
          <path
            d="M 0,50 Q 100,0 200,50 T 400,50"
            fill="none"
            stroke="green"
            strokeWidth="4"
          />

          {/* Remaining part of the path */}
          <path
            d="M 200,50 Q 300,100 400,50"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />

          {/* Start and End Points */}
          <circle cx="0" cy="50" r="5" fill="green" />
          <circle cx="100" cy="0" r="5" fill="red" />
          <circle cx="200" cy="50" r="5" fill="red" />
          <circle cx="300" cy="100" r="5" fill="red" />
          <circle cx="400" cy="50" r="5" fill="red" />

          {/* Start Label */}
          <g className="event-label">
            <rect
              x="-25"
              y="60"
              width="70"
              height="30"
              fill="rgba(0,0,0,0.7)"
              rx="8"
              ry="8"
            />
            <text x="-15" y="80" fill="white" fontSize="10">
              Start
            </text>
            <FaFlag x="35" y="68" color="white" />
          </g>

          {/* Event Labels */}
          <g className="event-label">
            <rect
              x="65"
              y="-50"
              width="140"
              height="50"
              fill="rgba(0,0,0,0.7)"
              rx="8"
              ry="8"
            />
            <text x="75" y="-30" fill="white" fontSize="8">
              27th June 2024
            </text>
            <text x="75" y="-20" fill="white" fontSize="8">
              Elevate Session
            </text>
            <text x="75" y="-10" fill="white" fontSize="8">
              [In-person Session]
            </text>
            <FaCalendarAlt x="190" y="-30" color="white" />
          </g>

          <g className="event-label">
            <rect
              x="165"
              y="60"
              width="120"
              height="50"
              fill="rgba(0,0,0,0.7)"
              rx="8"
              ry="8"
            />
            <text x="175" y="80" fill="white" fontSize="8">
              July/August
            </text>
            <text x="175" y="90" fill="white" fontSize="8">
              Workshops
            </text>
            <FaChalkboardTeacher x="280" y="75" color="white" />
          </g>

          <g className="event-label">
            <rect
              x="265"
              y="-50"
              width="110"
              height="50"
              fill="rgba(0,0,0,0.7)"
              rx="8"
              ry="8"
            />
            <text x="275" y="-30" fill="white" fontSize="8">
              August
            </text>
            <text x="275" y="-20" fill="white" fontSize="8">
              Semi Finals
            </text>
            <FaTrophy x="370" y="-30" color="white" />
          </g>

          <g className="event-label">
            <rect
              x="365"
              y="60"
              width="120"
              height="50"
              fill="rgba(0,0,0,0.7)"
              rx="8"
              ry="8"
            />
            <text x="375" y="80" fill="white" fontSize="8">
              September
            </text>
            <text x="375" y="90" fill="white" fontSize="8">
              Final Ceremony
            </text>
            <FaFlagCheckered x="490" y="75" color="white" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Schedule;
