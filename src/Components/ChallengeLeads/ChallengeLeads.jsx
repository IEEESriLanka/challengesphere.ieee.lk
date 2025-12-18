import { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const ChallengeLeads = ({ selectedYear }) => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetch("/json/oc-data/challengeLeads/challengeLeadsByYear.json")
      .then((res) => res.json())
      .then((data) => {
        const oc = data[selectedYear];
        setChallenges(oc);
      });
  }, [selectedYear]);

  return (
    <div className="flex flex-col w-full h-fit px-[5%] lg:px-[10%] py-[10%] sm:py-[2%] cursor-default">
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
