import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { siteNavLinks } from "../../data/siteNavLinks";

const NavLinks = () => {
  const navigate = useNavigate();

  return (
    <>
      {siteNavLinks.map((link) => (
        <div
          key={link.name}
          className="flex flex-col justify-center cursor-pointer group relative"
        >
          <h1
            className="flex flex-row items-center text-text-white hover:text-chess-cyan transition-colors"
            onClick={() => link.link && navigate(link.link)}
          >
            {link.name}
            {link.subLinks && (
              <FaChevronDown className="ml-2 mt-1 text-xs" />
            )}
          </h1>
          {link.subLinks && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block hover:block">
              <div className="py-3">
                <div className="w-3 h-3 mx-auto bg-chess-surface border-l border-t border-chess-border rotate-45" />
              </div>
              <div className="z-10 min-w-56 p-3.5 rounded-xl bg-chess-surface text-text-white border border-chess-border shadow-chess-card -mt-2">
                {link.subLinks.map((sub) => (
                  <div
                    key={sub.name}
                    className="py-2 px-2 rounded hover:bg-chess-surface-2 hover:text-chess-cyan transition-colors"
                  >
                    <Link to={sub.link}>{sub.name}</Link>
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
