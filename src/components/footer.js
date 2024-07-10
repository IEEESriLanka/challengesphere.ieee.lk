import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <img
            className="w-20 h-20 "
            src="/main-logo.svg"
            alt="Challengesphere Logo"
          />
          <p className="text-center md:text-left">
            <p className="font-semibold text-lg">Challenge Sphere</p> Where
            Limits Shatter and New Horizons Arise
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/ChallengeSphere/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8 h-8" src="/social/fb.png" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/challenge_sphere/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8 h-8" src="/social/insta.png" alt="Insta" />
          </a>
          <a
            href="#0"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8"
              src="/social/linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="mt-8 text-center border-t pt-4">
        <p>&copy; 2024 IEEE Sri Lanka Challengsphere | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
