import React, { useState } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="fixed w-full top-0 bg-blue-1000 z-50 text-blue-700 font-bold ">
      <nav className="flex justify-between items-center p-4">
        <Link to="home" smooth={true} duration={500} className="flex-shrink-0">
          <img src="/main-logo.svg" alt="Logo" className="px-8 h-20 w-auto" />
        </Link>
        <ul className="flex space-x-4">
          <li className=" hover:text-blue-900   transition duration-300">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className=" hover:text-blue-900   transition duration-300">
            <Link to="about" smooth={true} duration={500}>
              2024
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className=" px-3 hover:text-blue-900   hover:border-white transition duration-300 focus:outline-none"
            >
              Challenges
              <img
                src="/Sponsors/icons/icons8-play-button-96.png"
                alt="Arrow Down"
                className="inline-block w-4 h-4 ml-2 transform rotate-90"
              />
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 bg-blue-100 shadow-lg mt-2">
                <li className="px-4 py-1 hover:bg-slate-400  transition duration-300">
                  <Link
                    to="circuit"
                    smooth={true}
                    duration={500}
                    onClick={closeDropdown}
                  >
                    Circuits Challenge
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-slate-400  transition duration-300">
                  <Link
                    to="arduino"
                    smooth={true}
                    duration={500}
                    onClick={closeDropdown}
                  >
                    Arduino Challenge
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-slate-400  transition duration-300">
                  <Link
                    to="ai"
                    smooth={true}
                    duration={500}
                    onClick={closeDropdown}
                  >
                    Artificial Intelligence Challenge
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-slate-400  transition duration-300">
                  <Link
                    to="signal"
                    smooth={true}
                    duration={500}
                    onClick={closeDropdown}
                  >
                    Signal Processing for Communication Challenge
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-slate-400  transition duration-300">
                  <Link
                    to="chips"
                    smooth={true}
                    duration={500}
                    onClick={closeDropdown}
                  >
                    Chips Challenge
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className=" hover:text-blue-900  transition duration-300">
            <Link to="schedule" smooth={true} duration={500}>
              Schedule
            </Link>
          </li>
          <li className=" hover:text-blue-900   transition duration-300">
            <Link to="sponsors" smooth={true} duration={500}>
              Sponsers
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
