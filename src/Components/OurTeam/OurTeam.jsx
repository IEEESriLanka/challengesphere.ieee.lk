import React, { useState } from "react";

import Chair from "../../assets/team/2025/oc/oc_dilini_chair.png";
import ProjectChair from "../../assets/team/2025/oc/oc_chamodi_project_chair.png";
import PVLead from "../../assets/team/2025/oc/oc_dushyantha_pv.png";
import FinanceLead from "../../assets/team/2025/oc/oc_subhaga_finance.png";
import ProgramLead from "../../assets/team/2025/oc/oc_deshitha_program.png";
import Secretary from "../../assets/team/2025/oc/oc_maheshika_secretary.png";
import ProposalCoordinator from "../../assets/team/2025/oc/oc_akeela_coordinator.png";
import LogisticsCoordinator from "../../assets/team/2025/oc/oc_sanoji_coordinator.png";
import FinanceCoordinator from "../../assets/team/2025/oc/oc_rashmitha_coordinator.png";
import PartnershipCoordinator from "../../assets/team/2025/oc/oc_yashmitha_coordinator.png";
import SocialMediaCoordinator from "../../assets/team/2025/oc/oc_kavindu_coordinator.png";
import ProgramCoordinator1 from "../../assets/team/2025/oc/oc_sankalpa_coordinator.png";
import ProgramCoordinator2 from "../../assets/team/2025/oc/oc_hashini_coordinator.png";
import ContentCoordinator from "../../assets/team/2025/oc/oc_hirushini_coordinator.png";
import DesignCoordinator from "../../assets/team/2025/oc/oc_dulshan_coordinator.png";
import WebCoordinator from "../../assets/team/2025/oc/oc_raveesha_coordinator.png";
import TeamCard from "../TeamCard/TeamCard";

const OutTeam = () => {
  const Leads = [
    {
      img: Chair,
      name: "Dilini Ekanayake",
      position:
        "Chair, Educational Activities Committee, IEEE Sri Lanka Section",
      in_link: "https://www.linkedin.com/in/dilini-ekanayaka/",
    },
    {
      img: ProjectChair,
      name: "Chamodi Hansika",
      position: "Project Chair",
      in_link: "https://www.linkedin.com/in/chamodi-hansika",
    },
  ];

  const VC = [
    {
      img: PVLead,
      name: "Dushyantha Anuradha",
      position: "Vice Chair, Public Visibility",
      in_link: "https://www.linkedin.com/in/dushyantha-thilakarathne",
    },
    {
      img: ProgramLead,
      name: "Deshitha Gallage",
      position: "Vice Chair, Program and Delivery",
      in_link: "http://www.linkedin.com/in/deshitha-gallage",
    },
    {
      img: FinanceLead,
      name: "Yasiru Amarasinghe",
      position: "Vice Chair, Finance and Partnership",
      in_link: "https://www.linkedin.com/in/subhaga-amarasinghe-15689a281/",
    },
    {
      img: Secretary,
      name: "Maheshika Madubashani",
      position: "Secretary",
      in_link: "https://www.linkedin.com/in/maheshikahbm",
    },
  ];

  const Coordinators = [
    {
      img: ProposalCoordinator,
      name: "Akeela Banu",
      in_link: "https://www.linkedin.com/in/akeela-ameer-6a4abb206",
    },
    {
      img: ProgramCoordinator1,
      name: "Kavindu Sankalpa",
      in_link: "https://www.linkedin.com/in/sankalpa-fernando",
    },
    {
      img: ProgramCoordinator2,
      name: "Hashini Rasanjali",
      in_link: "https://linkedin.com/in/hashini-rasanjali-8a3143263",
    },
    {
      img: PartnershipCoordinator,
      name: "Yashmitha Dilshan",
      in_link: "https://www.linkedin.com/in/yashmitha-dilshan-428b03212/",
    },
    {
      img: ContentCoordinator,
      name: "Hirushini Thathsara",
      in_link: "https://www.linkedin.com/in/hirushini-amarasekara-991aab316",
    },
    {
      img: DesignCoordinator,
      name: "Dulshan Rajeewa",
      in_link:
        "https://www.linkedin.com/in/dulshan-rajeewa-4ba412303?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHvSxC9g6R5WxivTvhP8%2ByA%3D%3D",
    },
    {
      img: FinanceCoordinator,
      name: "Anne Rashmitha",
      in_link: "http://www.linkedin.com/in/anne-rashmitha-nishshanka",
    },
    {
      img: WebCoordinator,
      name: "Raveesha Vishwajith",
      in_link: "https://www.linkedin.com/in/raveeshavishwajith",
    },
    {
      img: LogisticsCoordinator,
      name: "Sanoji Sasmika",
      in_link: "http://linkedin.com/in/sanoji-thilakarathna-926b5b2a3",
    },
    {
      img: SocialMediaCoordinator,
      name: "Kavindu Kariyawasam",
      in_link: "https://www.linkedin.com/in/kavindu-saumya-2b5979276/",
    },
  ];

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
