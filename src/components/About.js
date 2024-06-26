import React from "react";
import { Link } from "react-scroll";

const About = () => {
  // Array of small logos with their respective labels and link targets
  const smallLogos = [
    {
      id: 1,
      imageUrl: "/challanges/AI.svg",
      label: "AI Challenge",
      link: "ai",
    },
    {
      id: 2,
      imageUrl: "/challanges/Arduno.svg",
      label: "Arduino Challenge",
      link: "arduino",
    },
    {
      id: 3,
      imageUrl: "/challanges/Chips.svg",
      label: "Chips Challenge",
      link: "chips",
    },
    {
      id: 4,
      imageUrl: "/challanges/Circuits.svg",
      label: "Circuits Challenge",
      link: "circuit",
    },
    {
      id: 5,
      imageUrl: "/challanges/Signal.svg",
      label: "Signal Challenge",
      link: "signal",
    },
  ];

  return (
    <div
      id="about"
      className="relative flex items-center justify-center h-screen bg-gradient-to-t from-black via-blue-700 to-black text-white p-8"
    >
      {/* Main Title */}
      <div className="absolute top-8 left-8">
        <h1 className="text-4xl md:text-5xl font-bold ">
          2024 Focused Challenges
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center w-full max-w-5xl space-y-8">
        {/* Main Logo */}
        <img
          className="w-56 h-56 mb-6 mt-8 "
          src="/main-logo.svg"
          alt="Main Logo"
        />

        {/* Small Logos */}
        <div className="flex flex-wrap justify-center space-x-4">
          {smallLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex flex-col items-center space-y-2 p-1  hover:font-semibold transition-transform transform hover:scale-110"
            >
              <Link to={logo.link} smooth={true} duration={500}>
                <img
                  className="w-28 h-28 md:w-40 md:h-40 cursor-pointer "
                  src={logo.imageUrl}
                  alt={logo.label}
                />
                <span className="text-center ">{logo.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
