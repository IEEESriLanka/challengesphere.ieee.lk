import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const menuItem = {
  Challenges: [
    { name: "AI Challenge", link: "/aichallenge" },
    { name: "Chips Challenge", link: "/chipschallenge" },
    { name: "Arduino Challenge", link: "/arduinochallenge" },
    { name: "Robotics Challenge", link: "/roboticschallenge" },
    { name: "Circuits Challenge", link: "/circuitschallenge" },
    {
      name: "Healthcare Innovation Challenge",
      link: "/healthcareinnovationchallenge",
    },
    { name: "Communications Challenge", link: "/communicationschallenge" },
  ],
  "Our Highlights": [
    { name: "Achievements", link: "/highlights/achievements" },
    { name: "Elevate Session", link: "/highlights/elevatesession" },
    { name: "Award Ceremony", link: "/highlights/awardceremony" },
  ],
  "Our Team": [
    { name: "2026", link: "/organitioncommittee2026" },
    { name: "2024", link: "/organitioncommittee2024" },
  ],
};

const SideBar = ({ open, close }) => {
  const [heading, setHeading] = useState("");

  return (
    <div
      className={`fixed top-20 left-0 h-screen w-full pt-5 z-40 transition-transform duration-500 backdrop-blur-lg bg-chess-bg-2/95 border-t border-chess-border ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col gap-y-6 font-medium text-2xl px-6 text-text-white">
        <a
          className="cursor-pointer hover:text-chess-cyan transition-colors"
          href="/#home"
          onClick={() => close(false)}
        >
          Home
        </a>
        {Object.keys(menuItem).map((key) => (
          <div key={key} className="flex flex-col">
            <button
              type="button"
              className="flex items-center cursor-pointer hover:text-chess-cyan transition-colors text-left"
              onClick={() => setHeading(heading !== key ? key : "")}
            >
              {key}
              <FaChevronDown
                className={`ml-2 mt-1 text-base transition-transform ${
                  heading === key ? "rotate-180 text-chess-cyan" : ""
                }`}
              />
            </button>
            <div className={`${heading !== key && "hidden"} py-3 pl-6`}>
              {menuItem[key].map(({ name, link }) => (
                <div key={name} className="text-lg my-2.5">
                  <a
                    href={link}
                    className="text-text-white hover:text-chess-cyan transition-colors"
                    onClick={() => close(false)}
                  >
                    {name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
        <a
          className="cursor-pointer hover:text-chess-cyan transition-colors"
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
