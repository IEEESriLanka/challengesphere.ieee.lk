import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-800 py-8 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <img
            className="w-20 h-20"
            src="/main-logo.svg"
            alt="Challengesphere Logo"
          />
          <p className="text-center md:text-left">
            <span className="font-semibold text-lg">Challenge Sphere</span>
            <br />
            Where Limits Shatter and New Horizons Arise
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://chat.whatsapp.com/I5vOXfOmzMG3REUXzCBBwd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 h-10"
              src="/social/whatsapp.png"
              alt="Whatsapp"
            />
          </a>
          <a
            href="https://www.facebook.com/IEEESriLanka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-10 h-10" src="/social/fb.png" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/ieeesrilanka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-10 h-10" src="/social/insta.png" alt="Instagram" />
          </a>
          {/* <a
            href="https://www.linkedin.com/in/chalana-gayan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 h-10"
              src="/social/linkedin.png"
              alt="LinkedIn"
            />
          </a> */}
        </div>
      </div>

      {/* Copyright Information */}
      <div className="mt-8 text-center border-t pt-4">
        <p>&copy; 2024 IEEE Sri Lanka Challengsphere | All Rights Reserved</p>
        <p className="mt-2">
          Designed & Developed{" "}
          <a
            href="https://www.linkedin.com/in/chalana-gayan-b6b60212a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Chalana Gayan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
