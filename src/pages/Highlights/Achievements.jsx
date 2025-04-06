import React from "react";
import Award from "../../assets/award/award.png";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const Achievements = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-light-blue-50 px-[5%] pt-20 lg:pt-28 pb-14 lg:px-[10%] cursor-default">
      <button
        className="flex items-center font-semibold text-lg md:text-xl pt-5"
        onClick={() => navigate("/#home")}
      >
        <GoArrowLeft className="text-base md:text-2xl mr-2" />
        Back to home page
      </button>
      <div className="max-w-5xl mx-auto text-justify">
        <h1 className="text-2xl lg:text-5xl pt-10 font-bold text-center text-light-blue-600 mb-6">
          Recognized as the Best Sectional Project in IEEE Sri Lanka Section for
          2024
        </h1>
        <img src={Award} alt="award" className="w-auto mb-5" />
        <p className="text-lg text-light-blue-700 mb-4 text-justify">
          IEEE Challenge Sphere 2024 has been honored as the Best Sectional
          Project by the IEEE Sri Lanka Section, recognizing its significant
          contribution to empowering undergraduates and school students in
          engineering and technology. As Sri Lanka’s largest national
          competition series of its kind, the initiative bridges gaps in
          national contests, fostering innovation, collaboration, and skill
          development. With five unique challenges and expert mentorship, it
          creates a sustainable ecosystem for future engineers, preparing them
          for global success while advancing technological excellence.
        </p>
      </div>
    </div>
  );
};

export default Achievements;
