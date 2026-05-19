import React from "react";

import globeImg from "../../assets/home/CSbgLay1.webp";
import kingImg from "../../assets/home/CSbgLay3.webp";

/**
 * Lightweight 2D fallback for viewports where the R3F canvas is skipped.
 */
export default function MobileHeroLayers() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden>
      <img
        src={globeImg}
        alt=""
        className="absolute left-1/2 top-[18%] w-[min(92vw,420px)] -translate-x-1/2 opacity-90"
        loading="eager"
        decoding="async"
      />
      <img
        src={kingImg}
        alt=""
        className="absolute bottom-[22%] left-1/2 w-[min(70vw,280px)] -translate-x-1/2"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
