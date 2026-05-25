import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

const TeamCard = ({
  img,
  name,
  position,
  university,
  hoveredIndex,
  index,
  in_link,
}) => {
  const isHovered = hoveredIndex === index;

  const cardInner = (
    <>
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto">
        <div
          className={`absolute -inset-2 rounded-full blur-xl transition-opacity duration-300 ${
            isHovered ? "opacity-70" : "opacity-30"
          } bg-chess-cyan/30`}
        />
        <img
          src={img}
          alt={name}
          loading="lazy"
          className={`relative w-full h-full rounded-full object-cover object-center ring-2 transition-all duration-300 ${
            isHovered
              ? "ring-chess-cyan shadow-[0_0_24px_rgba(5,221,255,0.35)]"
              : "ring-chess-border"
          }`}
        />
      </div>
      <div className="flex flex-col w-full items-center mt-3">
        <p className="font-semibold w-full text-[110%] sm:text-[120%] text-center text-white">
          {name}
        </p>
        {position && (
          <p className="font-normal text-[95%] sm:text-[100%] text-center text-chess-cyan-soft px-2">
            {position}
          </p>
        )}
        {university && (
          <p className="font-normal text-[85%] sm:text-[90%] text-center text-chess-muted px-2 mt-1">
            {university}
          </p>
        )}
        {in_link && (
          <div className="my-2 flex justify-center text-2xl">
            <IoLogoLinkedin
              className={`transition-colors ${
                isHovered ? "text-chess-cyan" : "text-chess-muted"
              }`}
            />
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="flex flex-col px-3 items-center transition-transform transform hover:scale-105 rounded-2xl py-4 w-full">
      {in_link ? (
        <Link
          to={in_link}
          target="_blank"
          className="flex flex-col w-full items-center cursor-pointer"
        >
          {cardInner}
        </Link>
      ) : (
        <div className="flex flex-col w-full items-center">{cardInner}</div>
      )}
    </div>
  );
};

export default TeamCard;
