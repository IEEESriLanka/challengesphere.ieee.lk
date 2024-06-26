import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay for content */}
      <div className="relative z-2 flex flex-col justify-center h-full bg-black bg-opacity-50 text-white">
        {/* Center section for title and logo */}
        <div className="flex items-center justify-between h-full px-4 md:px-8 space-x-4 md:space-x-8">
          <h1 className="text-5xl md:text-9xl font-bold text-left">
            <img
              className="w-25 h-20 absolute  bottom-4 left-6 "
              src="/ieee-srilanka.svg"
              alt="Secondary Logo"
            />
            IEEE
            <br />
            Challenge Sphere
            <br />
            2024
          </h1>
          <img
            className="w-56 h-56 absolute bottom-70 right-3.5 md:w-72 md:h-72 slow-bounce"
            src="/main-logo.svg"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
