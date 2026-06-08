import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import OurMemories from "../../Components/Memories/OurMemories";

const Memories = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen text-text-white">
      <div className="relative px-[5%] pt-24 lg:pt-32 pb-6 lg:px-[10%] cursor-default">
        <button
          type="button"
          className="flex items-center font-semibold text-lg md:text-xl text-text-white hover:text-chess-cyan transition-colors"
          onClick={() => navigate("/#memories")}
        >
          <GoArrowLeft className="text-base md:text-2xl mr-2" />
          Back to home page
        </button>
      </div>
      <OurMemories showViewAll={false} compact />
    </div>
  );
};

export default Memories;
