import React from "react";
import Award from "../../assets/award/award.png";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const Achievements = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-chess-bg-2 text-text-white">
      <div className="absolute inset-0 chess-grid-overlay" aria-hidden />
      <div className="relative px-[5%] pt-24 lg:pt-32 pb-14 lg:px-[10%] cursor-default">
        <button
          className="flex items-center font-semibold text-lg md:text-xl text-text-white hover:text-chess-cyan transition-colors"
          onClick={() => navigate("/#home")}
        >
          <GoArrowLeft className="text-base md:text-2xl mr-2" />
          Back to home page
        </button>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl lg:text-4xl pt-10 font-bold text-center text-white chess-heading-underline mx-auto block w-fit mb-8">
            Recognized as the Best Sectional Project in IEEE Sri Lanka Section
            for 2024
          </h1>
          <div className="chess-card p-2 md:p-4 mb-8">
            <img
              src={Award}
              alt="award"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-base md:text-lg text-chess-muted mb-4 text-justify leading-relaxed">
            IEEE Challenge Sphere 2024 has been honored as the Best Sectional
            Project by the IEEE Sri Lanka Section, recognizing its significant
            contribution to empowering undergraduates and school students in
            engineering and technology. As Sri Lanka’s largest national
            competition series of its kind, the initiative bridges gaps in
            national contests, fostering innovation, collaboration, and skill
            development. With five unique challenges and expert mentorship, it
            creates a sustainable ecosystem for future engineers, preparing
            them for global success while advancing technological excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
