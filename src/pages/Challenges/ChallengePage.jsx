import React, { useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate, useLocation } from "react-router-dom";

import AIChallengeLogo from "../../assets/logos/challenges/AI_Challenge.png";
import ArduinoChallengeLogo from "../../assets/logos/challenges/Arduino_Challenge.png";
import CircuitsChallengeLogo from "../../assets/logos/challenges/Circuits_Challenge.png";
import ChipsChallengeLogo from "../../assets/logos/challenges/Chips_Challenge.png";
import CommunicationsChallengeLogo from "../../assets/logos/challenges/Commnunication_Challenge.png";
import HealthcareChallengeLogo from "../../assets/logos/challenges/Healthcare_Challenge.png";
import RoboticsChallengeLogo from "../../assets/logos/challenges/Robotics_Challenge.png";

import aiBackground from "../../assets/Backgrounds/AI Challenge.jpeg";
import arduinoBackground from "../../assets/Backgrounds/Arduino Challenge.jpeg";
import chipsBackground from "../../assets/Backgrounds/Chips Challenge.jpeg";
import circuitsBackground from "../../assets/Backgrounds/Curcit Challenge.jpeg";
import communicationsBackground from "../../assets/Backgrounds/Communication Challenge.jpeg";
import healthcareBackground from "../../assets/Backgrounds/Medical Challenge.jpeg";
import roboticsBackground from "../../assets/Backgrounds/Robotics Challenge.jpeg";

import ChallengeAchievementBlock from "../../Components/Achievements/ChallengeAchievementBlock";
import { getAchievementForPath } from "../../data/achievementsData";

const challenges = {
  "/aichallenge": {
    title: "Artificial Intelligence Challenge",
    image: AIChallengeLogo,
    background: aiBackground,
    description:
      "AICSL 2025, the premier AI Challenge in Sri Lanka hosted by ChallengeSphere 2025, offers a structured pathway with hands-on experience to develop AI agent-based applications. The event features a series of workshops followed by a 24-hour event that includes a workshop to develop an AI agent and a 12-hour hackathon.",
  },
  "/arduinochallenge": {
    title: "Arduino Challenge",
    image: ArduinoChallengeLogo,
    background: arduinoBackground,
    description:
      "If you are an individual or a team who is interested in Arduino, here's your chance to showcase your innovative skills in Sri Lanka's biggest Arduino competition. This challenge recognizes school students and undergraduate students who demonstrate exceptional skills in Arduino-based projects to solve real-world challenges.",
    registrationLink: "https://forms.gle/o3SYZWFv71AYbVdg9",
  },
  "/chipschallenge": {
    title: "Chips Challenge",
    image: ChipsChallengeLogo,
    background: chipsBackground,
    description:
      "This Challenge serves as the national selection for the International Microelectronics Olympiad in Armenia. This event in Sri Lanka allows students to demonstrate their knowledge in microelectronics and EDA software development through a one-hour closed-book exam.",
    registrationLink: "https://forms.gle/nG91C9FNioFa3Nda9",
  },
  "/circuitschallenge": {
    title: "Circuits Challenge",
    image: CircuitsChallengeLogo,
    background: circuitsBackground,
    description:
      "The Sri Lanka Circuits Challenge of the IEEE Sri Lanka ChallengeSphere 2025 is launched to facilitate innovation and open-ended electronic product design targeting the IEEE CASS Student Design Competition 2025-26.",
  },
  "/communicationschallenge": {
    title: "Communications Challenge",
    image: CommunicationsChallengeLogo,
    background: communicationsBackground,
    description:
      "The IEEE Communications Challenge of the IEEE Sri Lanka ChallengeSphere 2025 is launched to facilitate innovation and cutting-edge technology development in telecommunications, targeting undergraduate students. This competition invites participants to present their pioneering projects in the field of signal processing for communications, encouraging exploration and advancement in this critical area of technology.",
  },
  "/healthcareinnovationchallenge": {
    title: "Healthcare Innovation Challenge",
    image: HealthcareChallengeLogo,
    background: healthcareBackground,
    description:
      "If you're passionate about healthcare innovation and eager to make a positive impact on the world, the IEEE SL Challenge Sphere 2025 - Healthcare Challenge is the perfect opportunity for you. The IEEE Sri Lanka Challenge Sphere, a new initiative by the IEEE Sri Lanka Section, gathers students and recent graduates for a series of tech-oriented competitions designed to inspire and innovate.",
  },
  "/roboticschallenge": {
    title: "Robotics Challenge",
    image: RoboticsChallengeLogo,
    background: roboticsBackground,
    description:
      "If you're passionate about robotics and automation and eager to make a real-world impact, the IEEE Challenge Sphere 2025 - Robotics Challenge is the perfect opportunity for you. This challenge recognizes IEEE Student and Graduate Student Members who demonstrate outstanding engineering skills in robotics to solve real-world challenges.",
  },
};

const getChallengeAccent = (title) => {
  switch (title) {
    case "Artificial Intelligence Challenge":
      return "#FF7719";
    case "Arduino Challenge":
      return "#07989D";
    case "Chips Challenge":
      return "#7469B6";
    case "Circuits Challenge":
      return "#4A9D70";
    case "Communications Challenge":
      return "#D74B61";
    case "Healthcare Innovation Challenge":
      return "#EA81B4";
    case "Robotics Challenge":
      return "#5DA6BC";
    default:
      return "#05ddff";
  }
};

const ChallengePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const challenge = challenges[location.pathname];

  useEffect(() => {
    if (!challenge) {
      navigate("");
    }
  }, [challenge, navigate]);

  if (!challenge) {
    return null;
  }

  const accent = getChallengeAccent(challenge.title);
  const achievement = getAchievementForPath(location.pathname);

  const achievementBlock = (
    <ChallengeAchievementBlock achievement={achievement} accent={accent} />
  );

  const registrationBlock = (
    <div className="text-center text-lg md:text-xl md:px-[15%] pt-2 w-full">
      <div className="flex flex-col items-center gap-y-6 chess-card p-6 md:p-8 max-w-xl mx-auto">
        {challenge.registrationLink ? (
          <>
            <p className="text-text-white">
              Registration for the{" "}
              <b className="text-chess-cyan">{challenge.title}</b> is now open!
            </p>
            <a
              href={challenge.registrationLink}
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold text-lg md:text-xl px-6 py-3 rounded-xl shadow-chess-card hover:opacity-90 hover:scale-105 transition-all tracking-wide"
              style={{ backgroundColor: accent }}
              title="Register now"
            >
              Register Now
            </a>
          </>
        ) : (
          <>
            <p className="text-text-white">
              Registration for the{" "}
              <b className="text-chess-cyan">{challenge.title}</b> will open
              shortly.
            </p>
            <button
              type="button"
              disabled
              className="text-white font-semibold text-lg md:text-xl px-6 py-3 rounded-xl shadow-chess-card opacity-70 cursor-not-allowed tracking-wide"
              style={{ backgroundColor: accent }}
              title="Registration starting soon"
            >
              Registration Starting Soon
            </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen text-text-white overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <img
          src={challenge.background}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020511]/85 via-[#020511]/70 to-[#020511]/92" />
        <div className="absolute inset-0 chess-grid-overlay opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col w-full px-[5%] pt-24 lg:pt-32 pb-14 lg:px-[10%] cursor-default">
        <button
          type="button"
          className="flex items-center font-semibold text-lg md:text-xl text-text-white hover:text-chess-cyan transition-colors"
          onClick={() => navigate("/#challenges")}
        >
          <GoArrowLeft className="text-base md:text-2xl mr-2" />
          Back to home page
        </button>

        <div className="flex flex-col w-full items-center h-full mt-6">
          <p className="text-3xl md:text-5xl font-semibold mb-4 md:mb-10 text-center mt-5 text-white chess-heading-underline">
            {challenge.title}
          </p>
          <img
            src={challenge.image}
            alt={`${challenge.title} Logo`}
            className="w-auto md:h-60 h-52 mb-6 drop-shadow-[0_8px_30px_rgba(5,221,255,0.2)]"
          />
          <p className="text-center text-base md:text-lg md:px-[15%] mb-6 text-chess-muted leading-relaxed">
            {challenge.description}
          </p>

          {challenge.registrationLink ? (
            <>
              {registrationBlock}
              {achievement && <div className="mt-8 w-full">{achievementBlock}</div>}
            </>
          ) : (
            <>
              {achievementBlock}
              {registrationBlock}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
