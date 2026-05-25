import React from "react";
import LogoSliderBar from "../LogoSliderBar/LogoSliderBar";
import IEEESLLogo from "../../assets/logos/ieeesls-colored.svg";
import IESChapter from "../../assets/logos/sponsors/ies_chapter.png";
import Synopsys from "../../assets/logos/sponsors/synopsys.png";

const SponsorBar = () => {
  return (
    <section id="sponsor" className="relative bg-chess-bg-2">
      <div className="absolute inset-0 chess-grid-overlay" aria-hidden />
      <div className="relative flex flex-col w-full items-center py-16 sm:py-20 cursor-default">
        <div className="flex flex-col w-full items-center px-4">
          <p className="text-2xl sm:text-3xl font-bold text-center text-white chess-heading-underline">
            An Initiative By
          </p>
          <div className="mt-6 bg-white rounded-2xl px-6 py-4 shadow-chess-card">
            <img
              src={IEEESLLogo}
              className="w-auto h-12 sm:h-16"
              alt="IEEE Sri Lanka Section"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full lg:w-9/12 justify-center gap-10 my-12 px-4">
          <div className="flex flex-col w-full lg:w-1/2 items-center chess-card p-6">
            <p className="text-xl sm:text-2xl font-bold text-center text-chess-cyan">
              Platinum Sponsor
            </p>
            <div className="mt-5 bg-white rounded-xl px-6 py-4">
              <img
                src={Synopsys}
                className="w-auto h-12 sm:h-16"
                alt="Synopsys"
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 items-center chess-card p-6">
            <p className="text-xl sm:text-2xl font-bold text-center text-chess-cyan">
              Student Branch Support
            </p>
            <div className="mt-3 bg-white rounded-xl px-6 py-3">
              <img
                src={IESChapter}
                className="w-auto h-16 sm:h-20"
                alt="IES Chapter"
              />
            </div>
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
