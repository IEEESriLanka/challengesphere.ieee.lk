import React from "react";
import { Link } from "react-router-dom";

const AchievementCard = ({ achievement, compact = false }) => {
  const { label, year, headline, summary, path, accent } = achievement;

  return (
    <article
      className={`chess-card flex flex-col h-full border transition-colors hover:border-chess-cyan/40 ${
        compact ? "p-5 sm:p-6" : "p-6 sm:p-8"
      }`}
      style={{ borderColor: `${accent}55` }}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${accent}22`, color: accent }}
        >
          {label}
        </span>
        <span className="text-chess-muted text-xs sm:text-sm">{year}</span>
      </div>
      <h3
        className={`font-semibold text-white leading-snug mb-2 ${
          compact ? "text-base sm:text-lg" : "text-lg sm:text-xl"
        }`}
      >
        {headline}
      </h3>
      <p
        className={`text-chess-muted leading-relaxed flex-grow ${
          compact ? "text-sm" : "text-sm sm:text-base"
        }`}
      >
        {summary}
      </p>
      {path && (
        <Link
          to={path}
          className="mt-4 text-chess-cyan text-sm font-semibold hover:text-chess-cyan-soft hover:underline w-fit"
        >
          View challenge →
        </Link>
      )}
    </article>
  );
};

export default AchievementCard;
