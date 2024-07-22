import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Background_Image.jpeg"
        alt="Background"
      />

      {/* Overlay for content */}
      <div className="relative z-2 flex flex-col justify-center h-full bg-black bg-opacity-50 text-white">
        {/* Center section for title and logo */}
        <div className="flex items-center justify-between h-full px-4 md:px-8 space-x-4 md:space-x-8">
          <h1 className="text-5xl md:text-9xl pl-8 font-bold text-left">
            <div>
              IEEE
              <br />
              Challenge Sphere
              <br />
              2024
            </div>
          </h1>
          <img
            className="h-10 absolute bottom-1 left-9 md:h-30"
            src="/logo-transparent 3.svg"
            alt="Secondary Logo"
          />
          <img
            className="hidden md:block w-56 h-56 md:w-72 md:h-72 slow-bounce absolute md:relative bottom-20 right-3.5"
            src="/main-logo.svg"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
