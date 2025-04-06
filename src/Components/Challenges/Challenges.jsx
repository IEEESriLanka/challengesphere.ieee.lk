import React from "react";
import AIChallenge from "../../assets/logos/challenges/AI_Challenge.png";
import ChipsChallenge from "../../assets/logos/challenges/Chips_Challenge.png";
import ArduinoChallenge from "../../assets/logos/challenges/Arduino_Challenge.png";
import RoboticChallenge from "../../assets/logos/challenges/Robotics_Challenge.png";
import CircuitsChallenge from "../../assets/logos/challenges/Circuits_Challenge.png";
import HealthcareChallenge from "../../assets/logos/challenges/Healthcare_Challenge.png";
import CommnunicationChallenge from "../../assets/logos/challenges/Commnunication_Challenge.png";
import { useNavigate } from "react-router-dom";

const Challenges = () => {
  const navigate = useNavigate();

  const firstList = [
    {
      ChallengeName: AIChallenge,
      ChallengeRedirectLink: "#AIChallenge",
      navigate: "/aichallenge",
    },
    {
      ChallengeName: CircuitsChallenge,
      ChallengeRedirectLink: "#CircuitsChallenge",
      navigate: "/circuitschallenge",
    },
    {
      ChallengeName: ArduinoChallenge,
      ChallengeRedirectLink: "#ArduinoChallenge",
      navigate: "/arduinochallenge",
    },
    {
      ChallengeName: RoboticChallenge,
      ChallengeRedirectLink: "#RoboticsChallenge",
      navigate: "/roboticschallenge",
    },
  ];

  const secondList = [
    {
      ChallengeName: HealthcareChallenge,
      ChallengeRedirectLink: "#HealthcareChallenge",
      navigate: "/healthcareinnovationchallenge",
    },
    {
      ChallengeName: CommnunicationChallenge,
      ChallengeRedirectLink: "#CommnunicationsChallenge",
      navigate: "/communicationschallenge",
    },
    {
      ChallengeName: ChipsChallenge,
      ChallengeRedirectLink: "#ChipsChallenge",
      navigate: "/chipschallenge",
    },
  ];

  const combinedList = [...firstList, ...secondList];

  return (
    <section id="challenges">
      <div className="flex flex-col w-full h-fit bg-background-white-1 md:px-[10%] py-[10%] sm:py-[2%] cursor-default">
        <p className="text-text-black font-bold text-[250%] md:text-[350%] text-center pb-[3%]">
          Challenges
        </p>

        <div className="hidden sm:flex flex-wrap justify-center md:justify-between w-full">
          {firstList.map((challenge, index) => (
            <div
              className="flex justify-center items-center w-1/4 p-2"
              key={index}
              onClick={() => {
                navigate(challenge.navigate);
              }}
            >
              <img
                src={challenge.ChallengeName}
                className="w-[55%] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="hidden sm:flex flex-wrap justify-center md:justify-between w-full px-[10%] mt-[4%]">
          {secondList.map((challenge, index) => (
            <div
              className="flex justify-center items-center w-1/3 p-2"
              key={index}
              onClick={() => {
                navigate(challenge.navigate);
              }}
            >
              <img
                src={challenge.ChallengeName}
                className="w-[50%] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap sm:hidden justify-center md:justify-between w-full">
          {combinedList.map((challenge, index) => (
            <div
              className="flex justify-center w-1/3 md:w-1/4 p-2"
              key={index}
              onClick={() => {
                navigate(challenge.navigate);
              }}
            >
              <img
                src={challenge.ChallengeName}
                className="w-[70%] md:w-[50%] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
