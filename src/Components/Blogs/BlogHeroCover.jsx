import React from "react";

import bgImg from "../../assets/home/bg.webp";

const BlogHeroCover = ({ title, compact = false }) => (
  <div
    className={`relative w-full overflow-hidden border border-chess-border min-h-[180px] ${
      compact
        ? "rounded-t-xl border-x-0 border-t-0 aspect-[16/9]"
        : "rounded-xl mb-8 aspect-[16/9] sm:aspect-[21/9] min-h-[220px]"
    }`}
  >
    <img
      src={bgImg}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center"
      aria-hidden
    />
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#01040d]/60 via-[#01040d]/40 to-[#01040d]/85" />

    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center select-none">
      <span className="text-chess-cyan tracking-[0.35em] text-[9px] sm:text-xs font-semibold uppercase mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
        IEEE Sri Lanka Section Presents
      </span>
      <p className="text-white font-black tracking-[0.12em] leading-none hero-text-glow text-[clamp(2rem,8vw,5.5rem)]">
        IEEE
      </p>
      <p className="font-extrabold uppercase tracking-tight leading-none hero-text-gradient mt-2 text-[clamp(1rem,4vw,3rem)]">
        Challenge Sphere
      </p>
      <p className="text-white font-bold tracking-[0.2em] hero-text-glow mt-2 text-[clamp(0.9rem,3vw,2rem)]">
        2026
      </p>
      {title && (
        <p className="sr-only">{title}</p>
      )}
    </div>
  </div>
);

export default BlogHeroCover;
