import React from "react";
import ChallengeCard from "./ChallengeCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Challenges
import AIChallenge from "../../assets/logos/challenges/AI_Challenge.png";
import ChipsChallenge from "../../assets/logos/challenges/Chips_Challenge.png";
import ArduinoChallenge from "../../assets/logos/challenges/Arduino_Challenge.png";
import RoboticsChallenge from "../../assets/logos/challenges/Robotics_Challenge.png";
import CircuitsChallenge from "../../assets/logos/challenges/Circuits_Challenge.png";
import HealthcareChallenge from "../../assets/logos/challenges/Healthcare_Challenge.png";
import CommnunicationChallenge from "../../assets/logos/challenges/Commnunication_Challenge.png";

// Leads Images
import AI01 from "../../assets/team/2025/challenges_leads/ai_01.png";
import AI02 from "../../assets/team/2025/challenges_leads/ai_02.png";
import Arduino01 from "../../assets/team/2025/challenges_leads/arduino_01.png";
import Arduino02 from "../../assets/team/2025/challenges_leads/arduino_02.png";
import Chips01 from "../../assets/team/2025/challenges_leads/chips_01.png";
import Chips02 from "../../assets/team/2025/challenges_leads/chips_02.png";
import Circuits01 from "../../assets/team/2025/challenges_leads/circuits_01.png";
import Healthcare01 from "../../assets/team/2025/challenges_leads/healthcare_01.png";
import Robotics01 from "../../assets/team/2025/challenges_leads/robotics_01.png";
import Robotics02 from "../../assets/team/2025/challenges_leads/robotics_02.png";

const ChallengeLeads = () => {
  const challenges = [
    {
      title: "Artificial Intelligence Challenge",
      badge: AIChallenge,
      leads: [
        {
          name: "Sasanka Premaratne",
          position: "Chair - AI-Driven Sri Lanka ",
          image: AI01,
          in_link: "https://www.linkedin.com/in/sasanka-udana",
        },
        {
          name: "Athsara Fernando",
          position: "AI Challenge Co-Chair - AI-Driven Sri Lanka",
          image: AI02,
          in_link: "https://www.linkedin.com/in/athsara-fernando",
        },
      ],
    },
    {
      title: "Arduino Challenge",
      badge: ArduinoChallenge,
      leads: [
        {
          name: "Thimira Chandrasekara",
          position:
            "Secretary - IEEE Industrial Electronics Society Sri Lanka Chapter",
          image: Arduino01,
          in_link: "https://www.linkedin.com/in/thimirachandrasekara",
        },
        {
          name: "Lakshitha Abeywickrama ",
          position:
            "Chair - IEEE Industrial Electronics Society Student Branch Chapter of SLTC",
          image: Arduino02,
          in_link:
            "https://www.linkedin.com/in/lakshitha-abeywickrama-47b9a6303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      title: "Chips Challenge",
      badge: ChipsChallenge,
      leads: [
        {
          name: "Achintha Kondarage",
          position:
            "Chair - IEEE Sri Lanka Section Circuits and Systems Society & Council on Electronic Design Automation Joint Chapter",
          image: Chips01,
          in_link: "https://www.linkedin.com/in/achintha-iroshan-kondarage/",
        },
        {
          name: "Warunika Hippola",
          position:
            "Secretary - IEEE Sri Lanka Section Circuits and Systems Society & Council on Electronic Design Automation Joint Chapter",
          image: Chips02,
          in_link: "https://www.linkedin.com/in/warunika-hippola",
        },
      ],
    },
    {
      title: "Circuits Challenge",
      badge: CircuitsChallenge,
      leads: [
        {
          name: "Thimira Chandrasekara",
          position:
            "Treasurer -  IEEE Sri Lanka Section Circuits and Systems Society & Council on Electronic Design Automation Joint Chapter",
          image: Circuits01,
          in_link: "https://www.linkedin.com/in/thimirachandrasekara",
        },
      ],
    },
    {
      title: "Healthcare Innovation Challenge",
      badge: HealthcareChallenge,
      leads: [
        {
          name: "Manjitha Kularatne",
          position:
            "Webmaster - IEEE Engineering in Medicine and Biology Society Sri Lanka Chapter",
          image: Healthcare01,
          in_link: "https://www.linkedin.com/in/manjitha-kularatne/",
        },
      ],
    },
    {
      title: "Robotics Challenge",
      badge: RoboticsChallenge,
      leads: [
        {
          name: "Bhanuka Dayawansa",
          position:
            "Vice-Chair - IEEE Industry Applications Society Sri Lanka Chapter",
          image: Robotics01,
          in_link: "https://www.linkedin.com/in/bhanuka-dayawansa",
        },
        {
          name: "Ramudu Welikala",
          position:
            "Committee Member - IEEE Industry Applications Society Sri Lanka Chapter",
          image: Robotics02,
          in_link: "https://www.linkedin.com/in/ramudu-welikala-434788230",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full h-fit bg-background-white-1 md:px-[10%] py-[10%] sm:py-[2%] cursor-default">
      <p className="text-text-black font-bold text-[250%] md:text-[350%] text-center pb-[3%]">
        Challenges Leads
      </p>
      <div className="tb:block hidden">
        <VerticalTimeline lineColor="#006791">
          {challenges.map((challenge, index) => (
            <VerticalTimelineElement
              key={index}
              position={index % 2 === 0 ? "left" : "right"}
              iconStyle={{
                background: "transparent",
                boxShadow: "none",
              }}
              contentStyle={{
                background: "#f0f8ff",
                color: "#000",
              }}
              contentArrowStyle={{
                background: "transparent",
                borderRight: "12px solid #006791",
              }}
            >
              <ChallengeCard
                index={index}
                title={challenge.title}
                badge={challenge.badge}
                leads={challenge.leads}
              />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <div className="tb:hidden px-[5%] w-full flex flex-col justify-center items-center">
        {challenges.map((challenge, index) => (
          <div className="w-full flex flex-col pt-10">
            <ChallengeCard
              index={index}
              title={challenge.title}
              badge={challenge.badge}
              leads={challenge.leads}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengeLeads;
