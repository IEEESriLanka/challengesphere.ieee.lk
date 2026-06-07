import React from "react";
import Award from "../../assets/award/award.png";
import { useNavigate, Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import AchievementCard from "../../Components/Achievements/AchievementCard";
import {
  challengeAchievements,
  challengeHighlightsYear,
  sectionAward,
} from "../../data/achievementsData";

const Achievements = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen text-text-white">
      <div className="relative px-[5%] pt-24 lg:pt-32 pb-14 lg:px-[10%] cursor-default">
        <button
          type="button"
          className="flex items-center font-semibold text-lg md:text-xl text-text-white hover:text-chess-cyan transition-colors"
          onClick={() => navigate("/#achievements")}
        >
          <GoArrowLeft className="text-base md:text-2xl mr-2" />
          Back to home page
        </button>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl lg:text-4xl pt-10 font-bold text-center text-white chess-heading-underline mx-auto block w-fit mb-4">
            Achievements & Highlights
          </h1>
          <p className="text-center text-chess-muted text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            Challenge Sphere {challengeHighlightsYear} track results and our
            IEEE Sri Lanka Section Best Project award.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 chess-heading-underline w-fit mx-auto">
            {sectionAward.awardYear} — Section Recognition
          </h2>
          <div className="chess-card p-2 md:p-4 mb-6">
            <img
              src={Award}
              alt="IEEE Sri Lanka Section award"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-base md:text-lg text-chess-muted mb-4 text-justify leading-relaxed">
            IEEE Challenge Sphere {sectionAward.awardYear} was honored as the{" "}
            <span className="text-white font-medium">{sectionAward.title}</span>
            , recognizing its significant contribution to empowering
            undergraduates and school students in engineering and technology.
          </p>
          <p className="text-base md:text-lg text-chess-muted mb-12 text-justify leading-relaxed">
            {sectionAward.summary}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 chess-heading-underline w-fit mx-auto">
            {challengeHighlightsYear} — Challenge Track Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {challengeAchievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>

          <p className="text-center mt-8">
            <Link
              to="/#challenges"
              className="text-chess-cyan font-semibold hover:underline"
            >
              Explore all challenges on the home page →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
