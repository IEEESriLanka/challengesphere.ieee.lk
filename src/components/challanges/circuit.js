import React from "react";

const Circuit = () => {
  return (
    <div
      id="about"
      className="flex items-center justify-center h-screen bg-gradient-to-bl from-blue-900 to-black text-white p-8"
    >
      <div className="flex flex-col md:flex-row items-start w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-7">
        <div className="flex-1">
          {/* Main Title */}
          <h1 className="text-5xl text-left self-start font-bold mb-4">
            Circuit Challenge
          </h1>

          {/* About Text */}
          <div className="bg-blue-1000 text-left text-white p-6 rounded-lg shadow-2xl shadow-black">
            <p className="mb-4 text-lg">
              The IEEE Sri Lanka Section, part of the world’s largest technical
              professional society, promotes electrotechnology and related
              disciplines for humanity's benefit. With 430,000+ members
              globally, IEEE develops crucial standards and publishes over 100
              peer-reviewed journals, contributing 30% of the world’s technical
              literature.
            </p>
          </div>
        </div>

        {/* Main Logo */}
        <div className="flex-shrink-0">
          <img
            className="w-56 h-56"
            src="/challanges/Citcuits.svg"
            alt="Circuit Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Circuit;
