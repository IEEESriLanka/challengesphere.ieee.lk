import React, { useState, useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate, useLocation, Link } from "react-router-dom";

import AIChallengeLogo from "../../assets/logos/challenges/AI_Challenge.png";
import ArduinoChallengeLogo from "../../assets/logos/challenges/Arduino_Challenge.png";
import CircuitsChallengeLogo from "../../assets/logos/challenges/Circuits_Challenge.png";
import ChipsChallengeLogo from "../../assets/logos/challenges/Chips_Challenge.png";
import CommunicationsChallengeLogo from "../../assets/logos/challenges/Commnunication_Challenge.png";
import HealthcareChallengeLogo from "../../assets/logos/challenges/Healthcare_Challenge.png";
import RoboticsChallengeLogo from "../../assets/logos/challenges/Robotics_Challenge.png";
import { IoCalendarSharp } from "react-icons/io5";

const challenges = {
  "/aichallenge": {
    title: "Artificial Intelligence Challenge",
    image: AIChallengeLogo,
    description:
      "AICSL 2025, the premier AI Challenge in Sri Lanka hosted by ChallengeSphere 2025, offers a structured pathway with hands-on experience to develop AI agent-based applications. The event features a series of workshops followed by a 24-hour event that includes a workshop to develop an AI agent and a 12-hour hackathon.",
    status: "opened",
    deadline: "7th June 2025, 11:59 PM",
    form_link: "https://forms.gle/5uyq8YtART2pSnwK6",
  },
  "/arduinochallenge": {
    title: "Arduino Challenge",
    image: ArduinoChallengeLogo,
    description:
      "If you are an individual or a team who is interested in Arduino, here's your chance to showcase your innovative skills in Sri Lanka's biggest Arduino competition. This challenge recognizes school students and undergraduate students who demonstrate exceptional skills in Arduino-based projects to solve real-world challenges.",
    status: "opened",
    deadline: "31st May 2025, 11:59 PM",
    form_link: "https://forms.gle/XVze5EtW6uBntHug9",
  },
  "/chipschallenge": {
    title: "Chips Challenge",
    image: ChipsChallengeLogo,
    description:
      "This Challenge serves as the national selection for the International Microelectronics Olympiad in Armenia. This event in Sri Lanka allows students to demonstrate their knowledge in microelectronics and EDA software development through a one-hour closed-book exam.",
    status: "opened",
    deadline: "31st May 2025, 11:59 PM",
    form_link: "https://forms.gle/aDNVoEYeSbQUWRsG8",
  },
  "/circuitschallenge": {
    title: "Circuits Challenge",
    image: CircuitsChallengeLogo,
    description:
      "The Sri Lanka Circuits Challenge of the IEEE Sri Lanka ChallengeSphere 2025 is launched to facilitate innovation and open-ended electronic product design targeting the IEEE CASS Student Design Competition 2025-26.",
    status: "soon",
  },
  "/communicationschallenge": {
    title: "Communications Challenge",
    image: CommunicationsChallengeLogo,
    description:
      "The IEEE Communications Challenge of the IEEE Sri Lanka ChallengeSphere 2025 is launched to facilitate innovation and cutting-edge technology development in telecommunications, targeting undergraduate students. This competition invites participants to present their pioneering projects in the field of signal processing for communications, encouraging exploration and advancement in this critical area of technology.",
    status: "soon",
  },
  "/healthcareinnovationchallenge": {
    title: "Healthcare Innovation Challenge",
    image: HealthcareChallengeLogo,
    description:
      "If you're passionate about healthcare innovation and eager to make a positive impact on the world, the IEEE SL Challenge Sphere 2025 - Healthcare Challenge is the perfect opportunity for you. The IEEE Sri Lanka Challenge Sphere, a new initiative by the IEEE Sri Lanka Section, gathers students and recent graduates for a series of tech-oriented competitions designed to inspire and innovate.",
      status: "opened",
    deadline: "31st May 2025, 11:59 PM",
    form_link: "https://forms.gle/1oEGGrM55io9DLsj8",
  },
  "/roboticschallenge": {
    title: "Robotics Challenge",
    image: RoboticsChallengeLogo,
    description:
      "If you're passionate about robotics and automation and eager to make a real-world impact, the IEEE Challenge Sphere 2025 -  Robotics Challenge is the perfect opportunity for you. This challenge recognizes IEEE Student and Graduate Student Members who demonstrate outstanding engineering skills in robotics to solve real-world challenges.",
      status: "opened",
    deadline: "23rd May 2025, 11:59 PM",
    form_link: "https://forms.gle/K98SZn7BpNLiDen48",
  },
};

const getChallengeColors = (title) => {
  switch (title) {
    case "Artificial Intelligence Challenge":
      return { bgColor: "#FF7719", hoverColor: "#EB4F06" };
    case "Arduino Challenge":
      return { bgColor: "#07989D", hoverColor: "#108185" };
    case "Chips Challenge":
      return { bgColor: "#7469B6", hoverColor: "#504979" };
    case "Circuits Challenge":
      return { bgColor: "#4A9D70", hoverColor: "#2F7E54" };
    case "Communications Challenge":
      return { bgColor: "#D74B61", hoverColor: "#8E2736" };
    case "Healthcare Innovation Challenge":
      return { bgColor: "#EA81B4", hoverColor: "#DD539B" };
    case "Robotics Challenge":
      return { bgColor: "#5DA6BC", hoverColor: "#17687F" };
    default:
      return { bgColor: "#000", hoverColor: "#000" };
  }
};

const ChallengePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const challenge = challenges[location.pathname];

  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!challenge) {
      navigate("");
    }
  }, [challenge, navigate]);

  if (!challenge) {
    return null;
  }

  const { bgColor, hoverColor } = getChallengeColors(challenge.title);

  return (
    <div className="flex flex-col w-full h-full px-[5%] pt-20 lg:pt-28 pb-14 lg:px-[10%] cursor-default">
      <button
        className="flex items-center font-semibold text-lg md:text-xl"
        onClick={() => navigate("/#challenges")}
      >
        <GoArrowLeft className="text-base md:text-2xl mr-2" />
        Back to home page
      </button>
      <div className="flex flex-col w-full items-center h-full">
        <p className="text-3xl md:text-5xl font-semibold mb-4 md:mb-10 text-center mt-5">
          {challenge.title}
        </p>
        <img
          src={challenge.image}
          alt={`${challenge.title} Logo`}
          className="w-auto md:h-60 h-52 mb-4 md:mb-5"
        />
        <p className="text-center text-lg md:text-xl md:px-[15%] mb-4 md:mb-5">
          {challenge.description}
        </p>
        <div className="text-center text-lg md:text-xl md:px-[15%] pt-[1%]">
          {challenge.status === "opened" && (
            <div className="flex flex-col items-center gap-y-8">
              <p>
                Registration is <b>open</b> for the {challenge.title}.
              </p>
              {challenge.deadline && (
                <div className="flex flex-row gap-x-5 items-center">
                  <IoCalendarSharp className="text-4xl" />
                  <p>
                    Registration Deadline:{" "}
                    <span className="font-semibold" style={{ color: bgColor }}>
                      {challenge.deadline}
                    </span>
                  </p>
                </div>
              )}
              <Link
                to={challenge.form_link}
                target="_blank"
                className="text-white font-semibold text-2xl px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: hover ? hoverColor : bgColor,
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Register Now
              </Link>
            </div>
          )}
          {challenge.status === "closed" && (
            <div className="flex flex-col items-center gap-y-8">
              <p>
                Registration is <b className="text-red">closed</b> for the{" "}
                {challenge.title}.
              </p>
              <Link
                className="text-white font-semibold text-2xl px-4 py-2 rounded-xl opacity-60"
                style={{ backgroundColor: bgColor }}
                disabled
                title="Registration is closed"
              >
                Register Now
              </Link>
            </div>
          )}
          {challenge.status === "soon" && (
            <p className="text-red font-medium">
              Stay tuned, registrations will open soon!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
