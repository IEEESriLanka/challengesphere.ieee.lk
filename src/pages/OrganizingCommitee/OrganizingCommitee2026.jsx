import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import TeamCard from "../../Components/TeamCard/TeamCard";
import {
  normalizeMemberLink,
  oc2026Coordinators,
  oc2026SubLeads,
  oc2026TopLead,
  oc2026ViceChairs,
} from "../../data/oc2026Data";

const OrganizingCommitee2026 = () => {
  const navigate = useNavigate();
  const [topLeadHoveredIndex, setTopLeadHoveredIndex] = useState();
  const [subLeadHoveredIndex, setSubLeadHoveredIndex] = useState();
  const [vcHoveredIndex, setVcHoveredIndex] = useState();
  const [coordinatorHoveredIndex, setCoordinatorHoveredIndex] = useState();

  const mapToCard = (member) => ({
    img: member.img,
    name: member.name,
    position: member.position,
    university: member.university,
    in_link: normalizeMemberLink(member.linkedin),
    imagePosition: member.imagePosition,
    imageScale: member.imageScale,
  });

  const topLeads = oc2026TopLead.map(mapToCard);
  const subLeads = oc2026SubLeads.map(mapToCard);
  const viceChairs = oc2026ViceChairs.map(mapToCard);
  const coordinators = oc2026Coordinators.map(mapToCard);

  return (
    <div className="relative min-h-screen text-text-white">
      <div className="relative flex flex-col w-full px-[5%] pt-24 lg:pt-32 pb-14 lg:px-[10%] cursor-default">
        <button
          type="button"
          className="flex items-center font-semibold text-lg md:text-xl text-text-white hover:text-chess-cyan transition-colors"
          onClick={() => navigate("/")}
        >
          <GoArrowLeft className="text-base md:text-2xl mr-2" />
          Back to home page
        </button>

        <p className="text-white font-bold text-[200%] sm:text-[250%] lg:text-[350%] text-center mt-10 chess-heading-underline self-center">
          Our Team — Organizing Committee 2026
        </p>
        <p className="text-center text-chess-muted text-sm sm:text-base mt-4 max-w-2xl mx-auto">
          Meet the Challenge Sphere 2026 organizing committee leading tracks,
          operations, and delivery across the national competition series.
        </p>

        <h2 className="text-center font-bold text-[150%] md:text-[175%] text-chess-cyan mt-10 mb-6">
          Core Leads
        </h2>

        <div className="grid grid-cols-1 justify-items-center w-full max-w-[320px] mx-auto mb-8">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center w-full max-w-5xl mx-auto mb-16 md:mb-20">
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

        <h2 className="text-center font-bold text-[175%] md:text-[200%] text-white mb-8 chess-heading-underline self-center">
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
    </div>
  );
};

export default OrganizingCommitee2026;
