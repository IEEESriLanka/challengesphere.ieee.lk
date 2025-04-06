import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SideBar = ({ open, close, whiteColor }) => {
  const [heading, setHeading] = useState("");

  const menuItem = {
    Challenges: [
      { name: "AI Challenge", link: "/aichallenge" },
      { name: "Chips Challenge", link: "/chipschallenge" },
      { name: "Arduino Challenge", link: "/arduinochallenge" },
      {
        name: "Robotics Challenge",
        link: "/roboticschallenge",
      },
      {
        name: "Circuits Challenge",
        link: "/circuitschallenge",
      },
      {
        name: "Healthcare Innovation Challenge",
        link: "/healthcareinnovationchallenge",
      },
      {
        name: "Communications Challenge",
        link: "/communicationschallenge",
      },
    ],
    "Our Highlights": [
      {
        name: "Achievements",
        link: "/highlights/achievements",
      },
      {
        name: "Elevate Session",
        link: "/highlights/elevatesession",
      },
      {
        name: "Award Ceremony",
        link: "/highlights/awardceremony",
      },
    ],
    "Our Team": [
      { name: "2024", link: "/organitioncommittee2024" },
      { name: "2025", link: "/#ourteam" },
    ],
  };

  return (
    <div
      className={`backdrop-blur-lg bg-opacity-60 fixed top-20 left-0 h-screen w-full pt-5 z-50 transition-transform duration-500 ${
        open ? "translate-x-0" : "-translate-x-full"
      } ${whiteColor ? "bg-background-white-1" : "bg-background-black"}`}
    >
      <div
        className={`flex flex-col gap-y-10 font-medium text-2xl px-6 ${
          whiteColor ? "text-text-black" : "text-text-white"
        }`}
      >
        <a
          className="cursor-pointer"
          href="/#home"
          onClick={() => close(false)}
        >
          Home
        </a>
        {Object.keys(menuItem).map((key) => (
          <div key={key} className="flex flex-col">
            <a
              className="flex items-center cursor-pointer"
              onClick={() => {
                setHeading(heading !== key ? key : "");
              }}
            >
              {key} <FaChevronDown className="ml-2 mt-1 text-base" />
            </a>
            <div className={`${heading !== key && "hidden"} py-3 pl-6`}>
              {menuItem[key].map(({ name, link }) => (
                <div key={name} className="text-lg my-2.5">
                  <a
                    href={link}
                    className={`${
                      whiteColor
                        ? "text-background-black hover:text-text-black"
                        : "text-text-white hover:text-background-white-2"
                    }`}
                  >
                    {name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
        <a
          className="cursor-pointer"
          href="/#sponsor"
          onClick={() => close(false)}
        >
          Sponsors
        </a>
      </div>
    </div>
  );
};

export default SideBar;
