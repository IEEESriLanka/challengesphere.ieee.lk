// src/components/Sections.js
import React from "react";

const About = () => {
  // Example array of small logos
  const smallLogos = [
    { id: 1, imageUrl: "/logo192.png" },
    { id: 2, imageUrl: "/logo192.png" },
    { id: 3, imageUrl: "/logo192.png" },
    { id: 4, imageUrl: "/logo192.png" },
    { id: 5, imageUrl: "/logo192.png" },
  ];

  return (
    <>
      <div
        id="about"
        className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-black text-white p-8"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-8">
          {/* About Text */}
          <div className="bg-blue-1000 text-white p-6 rounded-lg shadow-2xl shadow-black flex-1">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="mb-4">
              IEEE Education Week Sri Lanka is a unique opportunity for students
              and undergraduates to connect with top professionals and educators
              from the world of engineering and technology. It will be held at
              TRACE Expert City on the 24th & 25th of April this year, and will
              provide educational programs and resources for students,
              educators, and technical professionals. This event is the perfect
              chance to expand your knowledge, enhance your skills, and build
              your network. IEEE Education Week Sri Lanka will feature a seminar
              on higher education pathways for students, an open forum on
              education, technical sessions, panel discussions, industry stalls,
              IEEE awareness sessions, etc. This event is also a showcase of all
              of the amazing work that IEEE volunteers and members do every day
              to promote education at every level.
            </p>
          </div>

          {/* Main Logo and Small Logos */}
          <div className="flex flex-col items-center">
            <img
              className="w-48 h-48 mb-8"
              src="/logo512.png"
              alt="Main Logo"
            />
            <div className="flex space-x-4">
              {smallLogos.map((logo) => (
                <img
                  key={logo.id}
                  className="w-12 h-12"
                  src={logo.imageUrl}
                  alt={`Small Logo ${logo.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
