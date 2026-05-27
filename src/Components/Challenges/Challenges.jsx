import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import AIChallenge from "../../assets/logos/challenges/AI_Challenge.png";
import ChipsChallenge from "../../assets/logos/challenges/Chips_Challenge.png";
import ArduinoChallenge from "../../assets/logos/challenges/Arduino_Challenge.png";
import RoboticChallenge from "../../assets/logos/challenges/Robotics_Challenge.png";
import CircuitsChallenge from "../../assets/logos/challenges/Circuits_Challenge.png";
import HealthcareChallenge from "../../assets/logos/challenges/Healthcare_Challenge.png";
import CommnunicationChallenge from "../../assets/logos/challenges/Commnunication_Challenge.png";

import RingCarousel3D from "./RingCarousel3D";

// Order chosen so visually-similar badges aren't adjacent on the ring.
const challenges = [
  { key: "ai", img: AIChallenge, label: "AI Challenge", path: "/aichallenge" },
  {
    key: "circuits",
    img: CircuitsChallenge,
    label: "Circuits Challenge",
    path: "/circuitschallenge",
  },
  {
    key: "arduino",
    img: ArduinoChallenge,
    label: "Arduino Challenge",
    path: "/arduinochallenge",
  },
  {
    key: "robotics",
    img: RoboticChallenge,
    label: "Robotics Challenge",
    path: "/roboticschallenge",
  },
  {
    key: "healthcare",
    img: HealthcareChallenge,
    label: "Healthcare Innovation Challenge",
    path: "/healthcareinnovationchallenge",
  },
  {
    key: "communications",
    img: CommnunicationChallenge,
    label: "Communications Challenge",
    path: "/communicationschallenge",
  },
  {
    key: "chips",
    img: ChipsChallenge,
    label: "Chips Challenge",
    path: "/chipschallenge",
  },
];

// Responsive ring/badge sizing — bigger as the viewport grows.
const computeSize = (w) => {
  if (w < 480) return { radius: 150, badgeSize: 120 };
  if (w < 768) return { radius: 210, badgeSize: 160 };
  if (w < 1024) return { radius: 280, badgeSize: 190 };
  if (w < 1280) return { radius: 320, badgeSize: 210 };
  return { radius: 360, badgeSize: 230 };
};

const Challenges = () => {
  const navigate = useNavigate();

  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const size = useMemo(() => computeSize(vw), [vw]);

  return (
    <section id="challenges" className="relative">
      <div className="relative flex flex-col w-full h-fit px-[5%] md:px-[10%] py-16 sm:py-20 cursor-default">
        <p className="text-white font-bold text-[200%] sm:text-[250%] md:text-[350%] text-center pb-2 chess-heading-underline self-center">
          Challenges
        </p>
        <p className="text-center text-chess-muted text-sm sm:text-base mt-4 mb-8 max-w-2xl mx-auto">
          Seven flagship arenas — pick your battlefield. Drag the ring, tap a
          badge to bring it to the front, then click again to dive in.
        </p>

        <RingCarousel3D
          items={challenges}
          radius={size.radius}
          badgeSize={size.badgeSize}
          onSelect={(item) => navigate(item.path)}
        />
      </div>
    </section>
  );
};

export default Challenges;
