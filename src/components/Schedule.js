import React from "react";

const Schedule = () => {
  // Example array of events
  const events = [
    { id: 1, time: "10:00 AM", description: "Event 1 Description" },
    { id: 2, time: "11:00 AM", description: "Event 2 Description" },
    { id: 3, time: "12:00 PM", description: "Event 3 Description" },
    { id: 4, time: "01:00 PM", description: "Event 4 Description" },
    { id: 5, time: "02:00 PM", description: "Event 5 Description" },
    { id: 6, time: "03:00 PM", description: "Event 6 Description" },
    { id: 7, time: "04:00 PM", description: "Event 7 Description" },
    { id: 8, time: "05:00 PM", description: "Event 8 Description" },
  ];

  return (
    <div
      id="schedule"
      className="flex items-center justify-center h-screen bg-gradient-to-r from-black to-gray-900 text-white p-8"
    >
      <div className="flex flex-col items-center w-full max-w-full">
        <h2 className="text-3xl font-bold mb-8">Schedule</h2>

        <div className="relative w-full overflow-x-auto">
          <div className="flex space-x-8 h-full">
            {/* Road */}
            <div className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-gray-700 w-full"></div>

            {events.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex-shrink-0 flex flex-col items-center justify-center ${
                  index % 2 === 0 ? "mt-4" : "mb-4"
                } w-60`}
              >
                <div className="bg-blue-800 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">{event.time}</p>
                  <p>{event.description}</p>
                </div>

                {/* Circle on the road */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-700 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
