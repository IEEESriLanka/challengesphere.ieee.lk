import React, { useState } from "react";

import TeamCard from "../TeamCard/TeamCard";

const OutTeam = () => {

  const [leadHoveredIndex, setLeadHoveredIndex] = useState();
  const [vcHoveredIndex, setVcHoveredIndex] = useState();
  const [coordinatorHoveredIndex, setCoordinatorHoveredIndex] = useState();

  return (
    <section id="ourteam">
      <div className="flex flex-col w-full h-fit bg-background-white-2 px-[5%] lg:px-[10%] py-[10%] sm:py-[2%] cursor-default">
        <p className="text-text-black font-bold text-[250%] lg:text-[350%] text-center pb-[5%]">
          Our Team
        </p>

        <h2 className="md:hidden text-center font-bold text-[175%]">Chairs</h2>
        <div className="flex flex-wrap w-full gap-y-5 md:gap-x-10 justify-center">
          {Leads.map((lead, index) => (
            <div
              className="flex flex-row w-full md:w-1/4 tb:w-1/2"
              onMouseEnter={() => setLeadHoveredIndex(index)}
              onMouseLeave={() => setLeadHoveredIndex(null)}
            >
              <TeamCard
                key={index}
                img={lead.img}
                name={lead.name}
                position={lead.position}
                index={index}
                hoveredIndex={leadHoveredIndex}
                in_link={lead.in_link}
              />
            </div>
          ))}
        </div>

        <h2 className="md:hidden text-center font-bold text-[175%] mt-10">
          Vice Chairs
        </h2>
        <div className="flex flex-wrap w-full gap-y-10 justify-center md:mt-14">
          {VC.map((lead, index) => (
            <div
              className="flex w-full tb:w-1/2 md:w-1/4"
              onMouseEnter={() => setVcHoveredIndex(index)}
              onMouseLeave={() => setVcHoveredIndex(null)}
            >
              <TeamCard
                key={index}
                img={lead.img}
                name={lead.name}
                position={lead.position}
                index={index}
                hoveredIndex={vcHoveredIndex}
                in_link={lead.in_link}
              />
            </div>
          ))}
        </div>

        <h2 className="text-center font-bold text-[175%] md:text-[200%] mt-16">
          Coordinators
        </h2>
        <div className="flex flex-wrap w-full gap-y-10 justify-center mt-5">
          {Coordinators.map((coordinator, index) => (
            <div
              className="flex w-full tb:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
              onMouseEnter={() => setCoordinatorHoveredIndex(index)}
              onMouseLeave={() => setCoordinatorHoveredIndex(null)}
            >
              <TeamCard
                key={index}
                index={index}
                img={coordinator.img}
                name={coordinator.name}
                hoveredIndex={coordinatorHoveredIndex}
                in_link={coordinator.in_link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutTeam;
