// src/components/Navigation.js
import React from "react";
import { Link } from "react-scroll";

const Navigation = () => (
  <header className="fixed w-full top-0 bg-blue-1000  z-50">
    <nav className="flex justify-between items-center p-4">
      <Link to="home" smooth={true} duration={500} className="flex-shrink-0">
        <img src="/logo192.png" alt="Logo" className="h-10 w-auto" />
      </Link>
      <ul className="flex space-x-6">
        <li className="text-white font-semibold hover:text-blue-700 transition duration-300">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-white font-semibold hover:text-blue-700 transition duration-300">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-white font-semibold hover:text-blue-700 transition duration-300">
          <Link to="schedule" smooth={true} duration={500}>
            Schedule
          </Link>
        </li>
        <li className="text-white font-semibold hover:text-blue-700 transition duration-300">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
