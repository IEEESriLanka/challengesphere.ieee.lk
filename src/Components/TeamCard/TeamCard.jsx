import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

const TeamCard = ({ img, name, position, hoveredIndex, index, in_link }) => {
  return (
    <div className="flex flex-col px-2 items-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-50 rounded-lg py-[1%]">
      {in_link ? (
        <Link
          to={in_link}
          target="_blank"
          className="flex flex-col w-full items-center cursor-pointer "
        >
          <img
            src={img}
            className="flex w-[40%] tb:w-[70%] sm:w-[60%] md:w-[45%]"
            alt={name}
          />
          <div className="flex flex-col w-full items-center">
            <p className="font-semibold  w-full text-[120%] sm:text-[125%] text-center">
              {name}
            </p>
            <p className="font-normal sm:text-[105%] text-center">{position}</p>
            {in_link && (
              <div className="my-2 flex justify-center text-2xl">
                {hoveredIndex === index ? (
                  <IoLogoLinkedin className="text-[#0067A8]" />
                ) : (
                  <IoLogoLinkedin className="text-background-black" />
                )}
              </div>
            )}
          </div>
        </Link>
      ) : (
        <div
          to={in_link}
          target="_blank"
          className="flex flex-col w-full items-center"
        >
          <img
            src={img}
            className="flex w-[40%] tb:w-[70%] sm:w-[60%] md:w-[45%]"
            alt={name}
          />
          <div className="flex flex-col w-full items-center">
            <p className="font-semibold  w-full text-[120%] sm:text-[125%] text-center">
              {name}
            </p>
            <p className="font-normal sm:text-[105%] text-center">{position}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCard;
