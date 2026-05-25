import React from "react";
import { useNavigate } from "react-router-dom";

import AIChallenge from "../../assets/logos/challenges/AI_Challenge.png";
import ChipsChallenge from "../../assets/logos/challenges/Chips_Challenge.png";
import ArduinoChallenge from "../../assets/logos/challenges/Arduino_Challenge.png";
import RoboticChallenge from "../../assets/logos/challenges/Robotics_Challenge.png";
import CircuitsChallenge from "../../assets/logos/challenges/Circuits_Challenge.png";
import HealthcareChallenge from "../../assets/logos/challenges/Healthcare_Challenge.png";
import CommnunicationChallenge from "../../assets/logos/challenges/Commnunication_Challenge.png";

const Challenges = () => {
  const navigate = useNavigate();

  const firstList = [
    { ChallengeName: AIChallenge, label: "AI Challenge", navigate: "/aichallenge" },
    { ChallengeName: CircuitsChallenge, label: "Circuits Challenge", navigate: "/circuitschallenge" },
    { ChallengeName: ArduinoChallenge, label: "Arduino Challenge", navigate: "/arduinochallenge" },
    { ChallengeName: RoboticChallenge, label: "Robotics Challenge", navigate: "/roboticschallenge" },
  ];

  const secondList = [
    { ChallengeName: HealthcareChallenge, label: "Healthcare Innovation Challenge", navigate: "/healthcareinnovationchallenge" },
    { ChallengeName: CommnunicationChallenge, label: "Communications Challenge", navigate: "/communicationschallenge" },
    { ChallengeName: ChipsChallenge, label: "Chips Challenge", navigate: "/chipschallenge" },
  ];

  const combinedList = [...firstList, ...secondList];

  const renderTile = (challenge, key) => (
    <button
      type="button"
      key={key}
      onClick={() => navigate(challenge.navigate)}
      className="group flex flex-col items-center justify-center p-4 rounded-xl chess-card w-full cursor-pointer"
      aria-label={challenge.label}
    >
      <img
        src={challenge.ChallengeName}
        alt={challenge.label}
        className="w-[70%] sm:w-[60%] md:w-[65%] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_18px_rgba(5,221,255,0.18)]"
      />
    </button>
  );

  return (
    <section id="challenges" className="relative bg-chess-bg-2">
      <div className="absolute inset-0 chess-grid-overlay" aria-hidden />
      <div className="relative flex flex-col w-full h-fit px-[5%] md:px-[10%] py-16 sm:py-20 cursor-default">
        <p className="text-white font-bold text-[200%] sm:text-[250%] md:text-[350%] text-center pb-8 chess-heading-underline self-center">
          Challenges
        </p>

        <div className="hidden sm:grid grid-cols-4 gap-6 w-full mt-6">
          {firstList.map((c, i) => renderTile(c, `f-${i}`))}
        </div>

        <div className="hidden sm:grid grid-cols-3 gap-6 w-full px-[8%] mt-6">
          {secondList.map((c, i) => renderTile(c, `s-${i}`))}
        </div>

        <div className="grid sm:hidden grid-cols-2 gap-4 w-full mt-2">
          {combinedList.map((c, i) => renderTile(c, `m-${i}`))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
