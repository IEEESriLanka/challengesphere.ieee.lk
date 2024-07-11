import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const firstSectionHeight = document.getElementById("home").offsetHeight;

      if (scrollY >= firstSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full  top-0 z-50 font-bold transition-all duration-300 ${
        isScrolled
          ? "bg-white text-blue-700 py-2 shadow-md "
          : "bg-blue-1000 text-blue-700 py-4"
      }`}
    >
      <nav className="flex justify-between items-center px-4">
        <Link to="home" smooth={true} duration={500} className="flex-shrink-0">
          <img
            src="/main-logo.svg"
            alt="Logo"
            className={`transition-all duration-300 ${
              isScrolled ? "h-12 w-auto" : "h-20 w-auto"
            }`}
          />
        </Link>
        <button
          className="block lg:hidden text-blue-700 focus:outline-none"
          onClick={toggleDropdown}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul
          className={`${
            dropdownOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 cursor-pointer  absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto ${
            isScrolled ? "bg-white" : "bg-blue-1000"
          } lg:bg-transparent cursor-pointer lg:items-center p-4 lg:p-0`}
        >
          <li className="hover:text-blue-900 transition duration-300">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={closeDropdown}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-blue-900 transition duration-300">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={closeDropdown}
            >
              Challenges
            </Link>
          </li>
          <li className="hover:text-blue-900 transition duration-300">
            <Link
              to="schedule"
              smooth={true}
              duration={500}
              onClick={closeDropdown}
            >
              Schedule
            </Link>
          </li>
          <li className="hover:text-blue-900 transition duration-300">
            <Link
              to="organizing"
              smooth={true}
              duration={500}
              onClick={closeDropdown}
            >
              Our Team
            </Link>
          </li>
          <li className="hover:text-blue-900 transition duration-300">
            <Link
              to="sponsors"
              smooth={true}
              duration={500}
              onClick={closeDropdown}
            >
              Sponsors
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
