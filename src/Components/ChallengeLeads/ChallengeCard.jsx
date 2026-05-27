import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

const ChallengeCard = ({ title, badge, leads, index }) => {
  return (
    <div className="flex flex-col w-full text-text-white">
      <div
        className={`flex flex-row items-center w-full gap-3 ${
          index % 2 === 0 ? "md:justify-end justify-start" : "justify-start"
        }`}
      >
        {index % 2 !== 0 && (
          <img
            src={badge}
            alt={title}
            className="hidden md:block h-16 w-auto drop-shadow-[0_4px_18px_rgba(5,221,255,0.18)]"
          />
        )}
        <img
          src={badge}
          alt={title}
          className="md:hidden h-14 w-auto drop-shadow-[0_4px_18px_rgba(5,221,255,0.18)]"
        />
        <h1 className="text-[1.4rem] md:text-[1.6rem] font-semibold text-chess-cyan px-1 pb-1">
          {title}
        </h1>
        {index % 2 === 0 && (
          <img
            src={badge}
            alt={title}
            className="hidden md:block h-16 w-auto drop-shadow-[0_4px_18px_rgba(5,221,255,0.18)]"
          />
        )}
      </div>
      <div className="w-full flex flex-col items-center tb:items-start tb:flex-row justify-center tb:space-x-6 space-x-0 space-y-4 tb:space-y-0 mt-4">
        {leads.map((lead, leadIndex) =>
          lead.in_link ? (
            <Link
              to={lead.in_link}
              target="_blank"
              key={leadIndex}
              className="flex flex-col w-11/12 tb:w-1/2 items-center hover:scale-105 duration-300 cursor-pointer"
            >
              <img
                src={lead.image}
                alt={lead.name}
                className="w-40 h-40 my-1 rounded-full object-cover ring-2 ring-chess-border hover:ring-chess-cyan transition"
              />
              <h2 className="text-lg font-semibold text-white text-center mt-2">
                {lead.name}
              </h2>
              <h3 className="text-sm text-chess-muted text-center px-2">
                {lead.position}
              </h3>
              <IoLogoLinkedin className="text-chess-cyan text-2xl mt-3" />
            </Link>
          ) : (
            <div
              key={leadIndex}
              className="flex flex-col w-11/12 tb:w-1/2 items-center hover:scale-105 duration-300 cursor-default"
            >
              <img
                src={lead.image}
                alt={lead.name}
                className="w-40 h-40 my-1 rounded-full object-cover ring-2 ring-chess-border"
              />
              <h2 className="text-lg font-semibold text-white text-center mt-2">
                {lead.name}
              </h2>
              <h3 className="text-sm text-chess-muted text-center px-2">
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
