import React, { useEffect, useRef, useState } from "react";

const Chips = () => {
  const poweredByRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    const currentRef = poweredByRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-100 via-slate-100 to-blue-100">
      <div
        ref={poweredByRef}
        className="absolute inset-0 pointer-events-none"
      ></div>
      <div className="max-w-5xl w-full flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:w-1/2 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chips Challenge
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            This Challenge serves as the national selection for the
            International Microelectronics Olympiad in Armenia. This inaugural
            event in Sri Lanka allows students to demonstrate their knowledge in
            microelectronics and EDA software development through a one-hour
            closed-book exam.
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
              9th July, 11:59 PM
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {/* <div className="flex flex-col items-center border p-2 bg-red-200 shadow-md rounded-lg hover:bg-red-500">
              <img
                src="/challanges/icons/deadline.png"
                alt="calendar icon"
                width={32}
                height={30}
                className="mb-2"
              />
              <p className="text-lg font-semibold text-gray-900">
                Registration Deadline
              </p>
              <p className="text-lg font-bold text-red-700">July 28</p>
            </div> */}
            <div className="flex px-3 flex-col items-center border p-1 border-cyan-100 hover:bg-blue-200  shadow-md rounded-lg duration-1000">
              <img
                src="/challanges/icons/team.png"
                alt="calendar icon"
                width={36}
                height={30}
                className="mb-2"
              />
              <p className="text-lg font-semibold text-blue-800">
                Workshop (Seminar)
              </p>
              <p className="text-lg font-bold text-blue-500">July 21</p>
            </div>
            <div className="flex px-3 flex-col items-center border p-1 border-amber-200 shadow-md hover:bg-lime-200 rounded-lg duration-1000">
              <img
                src=" /challanges/icons/exam.png"
                alt="calendar icon"
                width={36}
                height={30}
                className="mb-2"
              />
              <p className="text-lg font-semibold text-lime-800 time">
                Written Exam
              </p>
              <p className="text-lg font-bold text-lime-500">July 27</p>
            </div>
          </div>
          <div className="flex mt-8 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="https://bit.ly/ChallengeSphereChipsChallenge"
              target="_blank"
              rel="noopener noreferrer"
              className="border-green-600 shadow-md hover:bg-green-600 font-bold text-white py-3 px-6 rounded-lg transition duration-300 text-lg bg-green-500 text-center"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center md:w-1/2 p-8">
          <img
            className="w-64 h-64 md:w-96 md:h-96 object-contain"
            src="/challanges/Chips.svg"
            alt="Chips Logo"
          />
        </div>
      </div>

      {/* Powered By Section */}
      <div
        className={`fixed bottom-60 right-4 p-4 bg-gradient-to-b from-sky-300 to-white rounded-lg shadow-xl transition-transform duration-500 ${
          isVisible
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-20 opacity-0"
        }`}
      >
        <p className="text-lg text-black font-serif">
          Chips Challenge <br />
        </p>
        <p className="text-gray-800 font-semibold ">Powered by</p>
        <a
          href="https://www.synopsys.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center shadow-md hover:bg-white p-2 rounded-lg transition duration-300 mt-2"
        >
          <img
            src="/challanges/synopsys-logo-color-rgb.png"
            alt="Synopsys Logo"
            className="w-36 h-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default Chips;
