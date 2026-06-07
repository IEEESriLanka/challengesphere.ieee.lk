import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { siteNavLinks } from "../../data/siteNavLinks";

const SideBar = ({ open, close }) => {
  const [heading, setHeading] = useState("");

  return (
    <div
      className={`fixed top-20 left-0 h-screen w-full pt-5 z-40 transition-transform duration-500 backdrop-blur-lg bg-chess-bg-2/95 border-t border-chess-border ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col gap-y-6 font-medium text-2xl px-6 text-text-white">
        {siteNavLinks.map((item) =>
          item.subLinks ? (
            <div key={item.name} className="flex flex-col">
              <button
                type="button"
                className="flex items-center cursor-pointer hover:text-chess-cyan transition-colors text-left"
                onClick={() => setHeading(heading !== item.name ? item.name : "")}
              >
                {item.name}
                <FaChevronDown
                  className={`ml-2 mt-1 text-base transition-transform ${
                    heading === item.name ? "rotate-180 text-chess-cyan" : ""
                  }`}
                />
              </button>
              <div className={`${heading !== item.name && "hidden"} py-3 pl-6`}>
                {item.subLinks.map(({ name, link }) => (
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
          ) : (
            <a
              key={item.name}
              href={item.link}
              className="cursor-pointer hover:text-chess-cyan transition-colors"
              onClick={() => close(false)}
            >
              {item.name}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default SideBar;
