import React from "react";
import { Link } from "react-router-dom";

import AchievementCard from "./AchievementCard";
import {
  challengeAchievements,
  sectionAward,
} from "../../data/achievementsData";

const AchievementsPreview = () => {
  return (
    <section id="achievements" className="relative">
      <div className="relative flex flex-col w-full h-fit px-[5%] md:px-[10%] py-16 sm:py-20 cursor-default">
        <p className="text-white font-bold text-[200%] sm:text-[250%] lg:text-[350%] text-center chess-heading-underline self-center">
          Achievements
        </p>
        <p className="text-center text-chess-muted text-sm sm:text-base mt-4 mb-10 max-w-2xl mx-auto">
          Challenge Sphere 2025 national winners — plus our IEEE Sri Lanka
          Section Best Project recognition.
        </p>

        <div className="chess-card p-6 sm:p-8 mb-8 max-w-4xl mx-auto w-full border border-chess-cyan/25">
          <p className="text-chess-cyan text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold mb-2">
            {sectionAward.awardYear} Section Award
          </p>
          <h3 className="text-white text-lg sm:text-2xl font-semibold mb-3">
            {sectionAward.title}
          </h3>
          <p className="text-chess-muted text-sm sm:text-base leading-relaxed">
            {sectionAward.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {challengeAchievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              compact
            />
          ))}
        </div>

        <p className="text-center mt-10">
          <Link
            to="/highlights/achievements"
            className="text-chess-cyan font-semibold text-base sm:text-lg hover:text-chess-cyan-soft hover:underline"
          >
            View all achievements & award details →
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AchievementsPreview;
