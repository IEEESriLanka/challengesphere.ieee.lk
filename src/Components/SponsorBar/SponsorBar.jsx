import React from "react";
import LogoSliderBar from "../LogoSliderBar/LogoSliderBar";
import IEEESLLogo from "../../assets/logos/ieeesls-colored.svg";
import IESChapter from "../../assets/logos/sponsors/ies_chapter.png";
import Synopsys from "../../assets/logos/sponsors/synopsys.png";

const SponsorBar = () => {
  return (
    <section id="sponsor">
      <div className="flex flex-col w-full bg-background-white-2 items-center py-[2%] cursor-default">
        <div className="flex flex-col w-full items-center">
          <p className="text-2xl sm:text-3xl font-bold text-center text-text-black">
            An Initiative By
          </p>
          <img src={IEEESLLogo} className="w-auto h-12 sm:h-16 mt-2" />
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:w-8/12 justify-center my-8">
          <div className="flex flex-col w-full lg:w-1/2 items-center">
            <p className="text-2xl sm:text-3xl font-bold text-center text-text-black">
              Platinum Sponsor
            </p>
            <img src={Synopsys} className="w-auto h-12 sm:h-16 mt-4" />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 items-center mt-8 lg:mt-0">
            <p className="text-2xl sm:text-3xl font-bold text-center text-text-black">
              Student Branch Support
            </p>
            <img src={IESChapter} className="w-auto h-16 sm:h-20 mt-2" />
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <p className="text-2xl sm:text-3xl font-bold text-center text-text-black">
            In Collaboration with
          </p>
          <LogoSliderBar />
        </div>
      </div>
    </section>
  );
};

export default SponsorBar;
