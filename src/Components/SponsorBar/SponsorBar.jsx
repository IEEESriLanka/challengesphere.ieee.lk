import React from "react";
import LogoSliderBar from "../LogoSliderBar/LogoSliderBar";
import SLSECHorizontalLogo from "../../assets/logos/IEEE SL Logo - Horizontal - White.svg";

const SponsorBar = () => {
  return (
    <section id="sponsor" className="relative">
      <div className="relative flex flex-col w-full items-center py-16 sm:py-20 cursor-default">
        <div className="flex flex-col w-full items-center px-4">
          <p className="text-2xl sm:text-3xl font-bold text-center text-white chess-heading-underline">
            An Initiative By
          </p>
          {/* Use the current SLSEC wordmark on a dark glass surface so it stays readable. */}
          <div className="mt-6 bg-white/[0.04] rounded-2xl px-6 py-4 chess-card">
            <img
              src={SLSECHorizontalLogo}
              className="w-auto h-10 sm:h-14"
              alt="IEEE Sri Lanka Section"
            />
          </div>
        </div>

        <div className="flex flex-col w-full items-center px-4">
          <p className="text-2xl sm:text-3xl font-bold text-center text-white chess-heading-underline">
            In Collaboration with
          </p>
          <div className="mt-6 w-full">
            <LogoSliderBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorBar;
