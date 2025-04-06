import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ChallengeCard from "../../Components/ChallengeLeads/ChallengeCard";
import TeamCard from "../../Components/TeamCard/TeamCard";

// Organizing Committee
import Chair from "../../assets/team/2024/oc/Speaker Photo 1.webp";
import ProjectChair from "../../assets/team/2024/oc/Speaker Photo 2.webp";
import PVLead from "../../assets/team/2024/oc/Speaker Photo 6.webp";
import FinanceLead from "../../assets/team/2024/oc/Speaker Photo 5.webp";
import ProgramLead from "../../assets/team/2024/oc/Speaker Photo 4.webp";
import Secretary from "../../assets/team/2024/oc/Speaker Photo 3.webp";
import coordinator1 from "../../assets/team/2024/oc/Speaker Photo 7.webp";
import coordinator2 from "../../assets/team/2024/oc/Speaker Photo 8.webp";
import coordinator3 from "../../assets/team/2024/oc/Speaker Photo 9.webp";
import coordinator4 from "../../assets/team/2024/oc/Speaker Photo 10.webp";
import coordinator5 from "../../assets/team/2024/oc/Speaker Photo 11.webp";
import coordinator6 from "../../assets/team/2024/oc/Speaker Photo 12.webp";
import coordinator7 from "../../assets/team/2024/oc/Speaker Photo 13.webp";
import coordinator8 from "../../assets/team/2024/oc/Speaker Photo 14.webp";
import coordinator9 from "../../assets/team/2024/oc/Speaker Photo 15.webp";
import coordinator10 from "../../assets/team/2024/oc/Speaker Photo 16.webp";

// Challenges
import AIChallenge from "../../assets/team/2025/logos/AI Challenge.png";
import ChipsChallenge from "../../assets/team/2025/logos/Chips Challenge.png";
import ArduinoChallenge from "../../assets/team/2025/logos/Arduino Challenge.png";
import CircuitsChallenge from "../../assets/team/2025/logos/Circuits Challenge.png";
import HealthcareChallenge from "../../assets/team/2025/logos/Signal Challenge.png";

// Leads Images
import AI01 from "../../assets/team/2024/challenges_leads/Speaker Photo 17.png";
import AI02 from "../../assets/team/2024/challenges_leads/Speaker Photo 23.png";
import Arduino01 from "../../assets/team/2024/challenges_leads/Speaker Photo 16.png";
import Arduino02 from "../../assets/team/2024/challenges_leads/Speaker Photo 20.png";
import Chips01 from "../../assets/team/2024/challenges_leads/Speaker Photo 21.png";
import Circuits01 from "../../assets/team/2024/challenges_leads/Speaker Photo 15.png";
import Circuits02 from "../../assets/team/2024/challenges_leads/Speaker Photo 22.png";
import Signal01 from "../../assets/team/2024/challenges_leads/Speaker Photo 18.png";
import Signal02 from "../../assets/team/2024/challenges_leads/Speaker Photo 19.png";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const OrganizingCommitee2024 = () => {
  const navigate = useNavigate();

  const Leads = [
    {
      img: Chair,
      name: "Dr. Subodha Charles",
      position:
        "Chair, Educational Activities Committee, IEEE Sri Lanka Section",
    },
    { img: ProjectChair, name: "Shani Fernando", position: "Project Chair" },
  ];

  const VC = [
    {
      img: PVLead,
      name: "Kaveen Pasindumal",
      position: "Vice Chair, Public Visibility",
    },
    {
      img: ProgramLead,
      name: "Chamodi Indrajith",
      position: "Vice Chair, Program and Delivery",
    },
    {
      img: FinanceLead,
      name: "Kulunu Chakshana",
      position: "Vice Chair, Finance and Partnership",
    },
    { img: Secretary, name: "Malkini Medhavi", position: "Secretary" },
  ];

  const Coordinators = [
    { img: coordinator1, name: "Thinuki Weerasinghe" },
    { img: coordinator2, name: "Deshitha Gallage" },
    { img: coordinator3, name: "Hiranya Hashini" },
    { img: coordinator4, name: "Salina Sandinu" },
    { img: coordinator5, name: "Anujaya Vidmal" },
    { img: coordinator9, name: "Pasindu Nimesh" },
    { img: coordinator10, name: "Akila Dhambure" },
    { img: coordinator6, name: "Thisuri Peiris" },
    { img: coordinator7, name: "Kavin Gunasekara" },
    { img: coordinator8, name: "Chalana Gayan" },
  ];

  const challenges = [
    {
      title: "Artificial Intelligence Challenge",
      badge: AIChallenge,
      leads: [
        {
          name: "Sanuda Kannangara",
          position: "Chair, IEEE AI-Driven Sri Lanka",
          image: AI01,
        },
        {
          name: "Sasanka Premaratne",
          position: "Program Vice Chairperson AIDSL, Event Chair AICSL",
          image: AI02,
        },
      ],
    },
    {
      title: "Arduino Challenge",
      badge: ArduinoChallenge,
      leads: [
        {
          name: "Kavinga Ekanayake",
          position:
            "Chair, IEEE Industrial Electronics Society, Sri Lanka Chapter",
          image: Arduino01,
        },
        {
          name: "Tharushi Liyanage",
          position:
            "Chair, IEEE Industrial Electronics Society, Student Branch Chapter of SLTC",
          image: Arduino02,
        },
      ],
    },
    {
      title: "Chips Challenge",
      badge: ChipsChallenge,
      leads: [
        {
          name: "Dr. Achintha Kondarage",
          position: "Synopsys",
          image: Chips01,
        },
      ],
    },
    {
      title: "Circuits Challenge",
      badge: CircuitsChallenge,
      leads: [
        {
          name: "Dr. Subhoda Charles",
          position:
            "Chair, Educational Activities Committee, IEEE Sri Lanka Section",
          image: Circuits01,
        },
        {
          name: "Shani Fernando",
          position:
            "Member, Educational Activities Committee, IEEE Sri Lanka Section",
          image: Circuits02,
        },
      ],
    },
    {
      title: "Signal Processing for Communications Challenge",
      badge: HealthcareChallenge,
      leads: [
        {
          name: "Yasitha Wickramage",
          position: "Chair, IEEE Communications Society, Sri Lanka Chapter",
          image: Signal01,
        },
        {
          name: "Dr. Samiru Gayan",
          position:
            "Chair, IEEE Sri Lanka Section Signal Processing Society Chapter",
          image: Signal02,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full h-full px-[5%] pt-20 lg:pt-28 pb-14 lg:px-[10%] cursor-default">
      <button
        className="flex items-center font-semibold text-lg md:text-xl"
        onClick={() => navigate("/#Home")}
      >
        <GoArrowLeft className="text-base md:text-2xl mr-2" />
        Back to home page
      </button>
      <div className="pt-10" />
      <p className="text-text-black font-bold text-[250%] lg:text-[350%] text-center pb-[5%]">
        Our Team
      </p>

      <h2 className="md:hidden text-center font-bold text-[175%]">Chairs</h2>
      <div className="flex flex-wrap w-full gap-y-5 md:gap-x-10 justify-center">
        {Leads.map((lead, index) => (
          <div className="flex flex-row w-full md:w-1/4 tb:w-1/2">
            <TeamCard
              key={index}
              img={lead.img}
              name={lead.name}
              position={lead.position}
            />
          </div>
        ))}
      </div>

      <h2 className="md:hidden text-center font-bold text-[175%] mt-10">
        Vice Chairs
      </h2>
      <div className="flex flex-wrap w-full gap-y-10 justify-center md:mt-14">
        {VC.map((lead, index) => (
          <div className="flex w-full tb:w-1/2 md:w-1/4">
            <TeamCard
              key={index}
              img={lead.img}
              name={lead.name}
              position={lead.position}
            />
          </div>
        ))}
      </div>

      <h2 className="text-center font-bold text-[175%] md:text-[200%] mt-16">
        Coordinators
      </h2>
      <div className="flex flex-wrap w-full gap-y-10 justify-center mt-5">
        {Coordinators.map((coordinator, index) => (
          <div className="flex w-full tb:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <TeamCard
              key={index}
              img={coordinator.img}
              name={coordinator.name}
            />
          </div>
        ))}
      </div>

      <div className="pt-10" />
      <p className="text-text-black font-bold text-[250%] lg:text-[350%] text-center pb-[5%]">
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

export default OrganizingCommitee2024;
