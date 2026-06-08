import React from "react";

const ChallengeAchievementBlock = ({ achievement, accent }) => {
  if (!achievement) return null;

  const color = accent || achievement.accent;

  return (
    <div
      className="chess-card w-full max-w-3xl mx-auto p-6 md:p-8 mb-8 text-left border"
      style={{ borderColor: `${color}55` }}
    >
      <p
        className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-2"
        style={{ color }}
      >
        {achievement.year} Achievement
      </p>
      <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
        {achievement.headline}
      </h3>
      <p className="text-chess-muted text-sm sm:text-base leading-relaxed">
        {achievement.detail}
      </p>
    </div>
  );
};

export default ChallengeAchievementBlock;
