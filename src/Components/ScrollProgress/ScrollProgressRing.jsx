import React, { useCallback, useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";

const SIZE = 52;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CENTER = SIZE / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ScrollProgressRing = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) {
      setProgress(0);
      setVisible(false);
      return;
    }

    const next = Math.min(Math.max(scrollTop / docHeight, 0), 1);
    setProgress(next);
    setVisible(scrollTop > 120);
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-[60] flex items-center justify-center rounded-full border border-chess-border/80 bg-chess-bg-2/85 backdrop-blur-md shadow-chess-glow transition-all duration-300 hover:border-chess-cyan hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-chess-cyan ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      style={{ width: SIZE, height: SIZE }}
    >
      <svg
        className="absolute inset-0 -rotate-90"
        width={SIZE}
        height={SIZE}
        aria-hidden
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="rgba(31, 42, 68, 0.9)"
          strokeWidth={STROKE}
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#05ddff"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-150 ease-out"
          style={{
            filter: "drop-shadow(0 0 6px rgba(5, 221, 255, 0.45))",
          }}
        />
      </svg>
      <IoChevronUp className="relative text-chess-cyan text-lg" />
    </button>
  );
};

export default ScrollProgressRing;
