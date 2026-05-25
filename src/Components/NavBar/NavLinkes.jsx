import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const links = [
  { name: "Home", link: "/#home" },
  {
    name: "Challenges",
    icon: <FaChevronDown className="ml-2 mt-1 text-xs" />,
    subLinks: [
      {
        sublink: [
          { name: "AI Challenge", link: "/aichallenge" },
          { name: "Arduino Challenge", link: "/arduinochallenge" },
          { name: "Chips Challenge", link: "/chipschallenge" },
          { name: "Circuits Challenge", link: "/circuitschallenge" },
          {
            name: "Communications Challenge",
            link: "/communicationschallenge",
          },
          {
            name: "Healthcare Innovation Challenge",
            link: "/healthcareinnovationchallenge",
          },
          { name: "Robotics Challenge", link: "/roboticschallenge" },
        ],
      },
    ],
  },
  {
    name: "Our Highlights",
    icon: <FaChevronDown className="ml-2 mt-1 text-xs" />,
    subLinks: [
      {
        sublink: [
          { name: "Achievements", link: "/highlights/achievements" },
          { name: "Elevate Session", link: "/highlights/elevatesession" },
          { name: "Award Ceremony", link: "/highlights/awardceremony" },
        ],
      },
    ],
  },
  {
    name: "Our Team",
    icon: <FaChevronDown className="ml-2 mt-1 text-xs" />,
    subLinks: [
      {
        sublink: [
          { name: "2026", link: "/#ourteam" },
          { name: "2024", link: "/organitioncommittee2024" },
        ],
      },
    ],
  },
  { name: "Sponsors", link: "/#sponsor" },
];

const NavLinks = () => {
  const navigate = useNavigate();

  return (
    <>
      {links.map((link, index) => (
        <div
          key={index}
          className="flex flex-col justify-center cursor-pointer group relative"
        >
          <h1
            className="flex flex-row items-center text-text-white hover:text-chess-cyan transition-colors"
            onClick={() => link.link && navigate(link.link)}
          >
            {link.name}
            {link.icon && link.icon}
          </h1>
          {link.subLinks && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block hover:block">
              <div className="py-3">
                <div className="w-3 h-3 mx-auto bg-chess-surface border-l border-t border-chess-border rotate-45" />
              </div>
              <div className="z-10 min-w-56 p-3.5 rounded-xl bg-chess-surface text-text-white border border-chess-border shadow-chess-card -mt-2">
                {link.subLinks.map((subLinkGroup, subIndex) => (
                  <div key={subIndex}>
                    {subLinkGroup.sublink.map((sub) => (
                      <div
                        key={sub.name}
                        className="py-2 px-2 rounded hover:bg-chess-surface-2 hover:text-chess-cyan transition-colors"
                      >
                        <Link to={sub.link}>{sub.name}</Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
