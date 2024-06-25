import React from "react";

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
      <div className="relative z-10 flex flex-col justify-between h-full bg-black bg-opacity-50 text-white">
        {/* Top section for logo */}
        <div className="flex justify-end p-4">
          <img
            className="w-32 h-32 animate-bounce"
            src="path/to/logo.png"
            alt="Logo"
          />
        </div>
        {/* Center section for title */}
        <div className="flex items-start justify-start h-full px-4 md:px-8">
          <h1 className="text-7xl md:text-9xl font-bold text-left">
            CHALLENGE
            <br />
            SPHERE
          </h1>
        </div>

        {/* <div className="flex justify-start p-4 md:p-8">
          <div className=" text-white p-4 rounded-lg shadow-lg w-64 md:w-96">
            <p className="text-lg">Your description goes here</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
