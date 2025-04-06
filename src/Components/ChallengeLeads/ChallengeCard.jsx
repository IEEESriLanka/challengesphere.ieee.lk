import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

const ChallengeCard = ({ title, badge, leads, index }) => {
  return (
    <div className="flex flex-col w-full ">
      <div
        className={`flex flex-row items-center w-full ${
          index % 2 === 0 ? "md:justify-end justify-start" : "justify-start"
        }`}
      >
        {index % 2 != 0 && (
          <img
            src={badge}
            alt={title}
            className="hidden md:block h-16 w-auto"
          />
        )}
        <img src={badge} alt={title} className="md:hidden h-16 w-auto" />
        <h1 className="text-[1.5rem] font-semibold text-blue-600 px-2 pb-2">
          {title}
        </h1>
        {index % 2 === 0 && (
          <img
            src={badge}
            alt={title}
            className="hidden md:block h-16 w-auto"
          />
        )}
      </div>
      <div className="w-full flex flex-col items-center tb:items-start tb:flex-row justify-center tb:space-x-6 space-x-0 space-y-4 tb:space-y-0">
        {leads.map((lead, index) =>
          lead.in_link ? (
            <Link
              to={lead.in_link}
              target="_blank"
              key={index}
              className="flex flex-col w-11/12 tb:w-1/2 items-center hover:scale-105 duration-300 cursor-pointer"
            >
              <img
                src={lead.image}
                alt={lead.name}
                className="w-40 h-40 my-1"
              />
              <h2 className="text-lg font-semibold text-background-black text-center">
                {lead.name}
              </h2>
              <h3 className="text-base text-background-black text-center">
                {lead.position}
              </h3>
              <IoLogoLinkedin className="text-[#0067A8] text-2xl mt-3" />
            </Link>
          ) : (
            <div
              key={index}
              className="flex flex-col w-11/12 tb:w-1/2 items-center hover:scale-105 duration-300 cursor-default"
            >
              <img
                src={lead.image}
                alt={lead.name}
                className="w-40 h-40 my-1"
              />
              <h2 className="text-lg font-semibold text-background-black text-center">
                {lead.name}
              </h2>
              <h3 className="text-base text-background-black text-center">
                {lead.position}
              </h3>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ChallengeCard;
