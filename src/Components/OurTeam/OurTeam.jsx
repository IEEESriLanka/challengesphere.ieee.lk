import React, { useState } from "react";
import { Link } from "react-router-dom";

import TeamCard from "../TeamCard/TeamCard";
import {
  normalizeMemberLink,
  oc2026Coordinators,
  oc2026SubLeads,
  oc2026TopLead,
  oc2026ViceChairs,
} from "../../data/oc2026Data";

const OutTeam = () => {
  const [topLeadHoveredIndex, setTopLeadHoveredIndex] = useState();
  const [subLeadHoveredIndex, setSubLeadHoveredIndex] = useState();
  const [vcHoveredIndex, setVcHoveredIndex] = useState();
  const [coordinatorHoveredIndex, setCoordinatorHoveredIndex] = useState();

  const mapToCard = (member) => ({
    img: member.img,
    name: member.name,
    position: member.position,
    in_link: normalizeMemberLink(member.linkedin),
    imagePosition: member.imagePosition,
    imageScale: member.imageScale,
  });

  const topLeads = oc2026TopLead.map(mapToCard);
  const subLeads = oc2026SubLeads.map(mapToCard);
  const viceChairs = oc2026ViceChairs.map(mapToCard);
  const coordinators = oc2026Coordinators.map(mapToCard);

  return (
    <section id="ourteam" className="relative">
      <div className="relative flex flex-col w-full h-fit px-[5%] lg:px-[10%] py-16 sm:py-20 cursor-default">
        <p className="text-white font-bold text-[200%] sm:text-[250%] lg:text-[350%] text-center chess-heading-underline self-center">
          Our Team
        </p>
        <p className="text-center pb-10 pt-4">
          <Link
            to="/organitioncommittee2026"
            className="text-chess-cyan font-semibold text-base sm:text-lg hover:text-chess-cyan-soft hover:underline"
          >
            View full 2026 organizing committee profiles →
          </Link>
        </p>

        <h2 className="md:hidden text-center font-bold text-[175%] text-white">
          Chairs
        </h2>

        <div className="grid grid-cols-1 justify-items-center w-full max-w-[320px] mx-auto mb-6">
          {topLeads.map((lead, index) => (
            <div
              key={lead.name}
              className="w-full flex justify-center"
              onMouseEnter={() => setTopLeadHoveredIndex(index)}
              onMouseLeave={() => setTopLeadHoveredIndex(null)}
            >
              <TeamCard
                {...lead}
                index={index}
                hoveredIndex={topLeadHoveredIndex}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center w-full max-w-5xl mx-auto mb-10 md:mb-14">
          {subLeads.map((lead, index) => (
            <div
              key={lead.name}
              className="w-full flex justify-center"
              onMouseEnter={() => setSubLeadHoveredIndex(index)}
              onMouseLeave={() => setSubLeadHoveredIndex(null)}
            >
              <TeamCard
                {...lead}
                index={index}
                hoveredIndex={subLeadHoveredIndex}
              />
            </div>
          ))}
        </div>

        <h2 className="text-center font-bold text-[175%] md:text-[200%] text-white mt-10 mb-8 chess-heading-underline self-center">
          Vice Chairs
        </h2>
        <div className="flex flex-wrap w-full gap-y-10 justify-center">
          {viceChairs.map((lead, index) => (
            <div
              key={lead.name}
              className="flex w-full tb:w-1/2 md:w-1/4"
              onMouseEnter={() => setVcHoveredIndex(index)}
              onMouseLeave={() => setVcHoveredIndex(null)}
            >
              <TeamCard
                {...lead}
                index={index}
                hoveredIndex={vcHoveredIndex}
              />
            </div>
          ))}
        </div>

        <h2 className="text-center font-bold text-[175%] md:text-[200%] text-white mt-16 mb-8 chess-heading-underline self-center">
          Coordinators
        </h2>
        <div className="flex flex-wrap w-full gap-y-10 justify-center">
          {coordinators.map((coordinator, index) => (
            <div
              key={coordinator.name}
              className="flex w-full tb:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
              onMouseEnter={() => setCoordinatorHoveredIndex(index)}
              onMouseLeave={() => setCoordinatorHoveredIndex(null)}
            >
              <TeamCard
                {...coordinator}
                index={index}
                hoveredIndex={coordinatorHoveredIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutTeam;
