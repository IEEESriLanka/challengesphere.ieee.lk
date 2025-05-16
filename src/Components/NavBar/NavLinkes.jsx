import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const NavLinks = ({ whiteColor }) => {
  const navigate = useNavigate();
  const links = [
    { name: "Home", link: "/#home" },
    {
      name: "Challenges",
      icon: <FaChevronDown className="ml-2 mt-1 text-base" />,
      subLinks: [
        {
          sublink: [
            { name: "AI Challenge", link: "/aichallenge" },
            {
              name: "Arduino Challenge",
              link: "/arduinochallenge",
            },
            {
              name: "Chips Challenge",
              link: "/chipschallenge",
            },
            {
              name: "Circuits Challenge",
              link: "/circuitschallenge",
            },
            {
              name: "Communications Challenge",
              link: "/communicationschallenge",
            },
            {
              name: "Healthcare Innovation Challenge",
              link: "/healthcareinnovationchallenge",
            },
            {
              name: "Robotics Challenge",
              link: "/roboticschallenge",
            },
          ],
        },
      ],
    },
    {
      name: "Our Highlights",
      icon: <FaChevronDown className="ml-2 mt-1 text-base" />,
      subLinks: [
        {
          sublink: [
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
        },
      ],
    },
    {
      name: "Our Team",
      icon: <FaChevronDown className="ml-2 mt-1 text-base" />,
      subLinks: [
        {
          sublink: [
            { name: "2025", link: "/#ourteam" },
            { name: "2024", link: "/organitioncommittee2024" },
          ],
        },
      ],
    },
    { name: "Sponsors", link: "/#sponsor" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <div
          key={index}
          className="flex flex-col justify-center cursor-pointer group"
        >
          <h1
            className="flex flex-row items-center"
            onClick={() => link.link && navigate(link.link)}
          >
            {link.name}
            {link.icon && link.icon}
          </h1>
          {link.subLinks && (
            <div>
              <div className="absolute top-16 hidden group-hover:block hover:block">
                <div className="py-3">
                  <div
                    className={`w-6 h-6 left-3 absolute mt-1 backdrop-blur-lg rotate-45 ${
                      whiteColor
                        ? "bg-background-black bg-opacity-100"
                        : "bg-background-white-1 bg-opacity-100"
                    }`}
                  ></div>
                </div>
                <div
                  className={`z-10 min-w-52 p-3.5 rounded-lg ${
                    whiteColor
                      ? "bg-background-black text-text-white"
                      : "bg-background-white-1 text-text-black"
                  }`}
                >
                  {link.subLinks.map((subLinkGroup, subIndex) => (
                    <div key={subIndex}>
                      {subLinkGroup.sublink.map((sub, index) => (
                        <div
                          key={index}
                          className={`py-2 ${
                            whiteColor
                              ? "hover:text-background-white-2"
                              : "hover:text-background-black"
                          }`}
                        >
                          <Link to={sub.link}>{sub.name}</Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
