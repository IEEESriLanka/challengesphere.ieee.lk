import React from "react";
import ypsl from "../../assets/logos/collaborations/ypsl.png";
import ies_sl from "../../assets/logos/collaborations/ies_sl.png";
import joint_chapter from "../../assets/logos/collaborations/joint_chapter.png";
import aidsl from "../../assets/logos/collaborations/aid_sl.png";
import compsoc from "../../assets/logos/collaborations/compsoc_sl.png";
import ras from "../../assets/logos/collaborations/ras.png";
import edu_week from "../../assets/logos/collaborations/edu_week.png";
import embs from "../../assets/logos/collaborations/embs.png";
import ias_sl from "../../assets/logos/collaborations/ias_sl.png";

const LogoSliderBar = () => {
  const collaborations = [
    { logo: ypsl, size: "h-8 sm:h-12" },
    { logo: ies_sl, size: "h-8 sm:h-12" },
    { logo: compsoc, size: "h-8 sm:h-12" },
    { logo: aidsl, size: "h-8 sm:h-12" },
    { logo: embs, size: "h-8 sm:h-12" },
    { logo: ias_sl, size: "h-8 sm:h-12" },
    { logo: joint_chapter, size: "h-6 sm:h-10" },
    { logo: ras, size: "h-8 sm:h-12" },
    { logo: edu_week, size: "h-8 sm:h-14" },
  ];

  return (
    <div className="relative overflow-hidden bg-gray-100 py-4 sm:max-w-[80%] mx-auto w-full">
      <div className="flex w-max animate-marquee items-center">
        {[...collaborations, ...collaborations].map((collaboration, index) => (
          <img
            key={index}
            src={collaboration.logo}
            alt="Logo"
            className={`w-auto mx-4 sm:mx-8 ${collaboration.size}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSliderBar;
