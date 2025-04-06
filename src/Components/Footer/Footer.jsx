import React from "react";
import logo from "../../assets/logos/logo.png";
import facebookIcon from "../../assets/socialMedia/facebook.png";
import instagramIcon from "../../assets/socialMedia/instagram.svg";
import whatsappIcon from "../../assets/socialMedia/whatsapp.svg";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-fit bg-background-white-2 md:px-[10%] pt-[4%] pb-[1%] px-[0.75%] mt-1">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center w-full md:w-[70%] lg:w-[80%]">
          <img
            src={logo}
            alt="challengesphere logo"
            className="w-[12%] md:w-[12%] lg:w-[8%]"
          />
          <div className="flex flex-col pl-3">
            <p className="font-semibold text-[120%] md:text-[110%] lg:text-[150%] text-center md:text-start cursor-default">
              Challenge Sphere
            </p>
            <p className="font-light mt-[-2%] text-[100%] md:text-[100%] lg:text-[120%] text-center md:text-start cursor-default">
              Where Limits Shatter and New Horizons Arise
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-10 w-full justify-center md:justify-between mt-5 md:mt-0 md:w-[30%] lg:w-[20%] px-2">
          <a
            href="https://www.facebook.com/IEEESriLanka"
            target="_blank"
            className="w-[10%] md:w-[18%] lg:w-[16%]"
          >
            <img
              src={facebookIcon}
              className="transition-transform transform hover:scale-125 duration-200 cursor-pointer"
            />
          </a>
          <a
            href="https://www.instagram.com/ieeesrilanka/"
            target="_blank"
            className="w-[10%] md:w-[18%] lg:w-[16%]"
          >
            <img
              src={instagramIcon}
              className="transition-transform transform hover:scale-125 duration-200 cursor-pointer"
            />
          </a>
          <a
            href="https://chat.whatsapp.com/I5vOXfOmzMG3REUXzCBBwd"
            target="_blank"
            className="w-[10%] md:w-[18%] lg:w-[16%]"
          >
            <img
              src={whatsappIcon}
              className="transition-transform transform hover:scale-125 duration-200 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="h-1 w-full bg-background-white-1 mt-6" />
      <div className="w-full text-center mt-2 text-base font-normal">
        <p className="font-medium text-[80%] md:text-[100%] cursor-default">
          © 2025 IEEE Sri Lanka Challenge Sphere | All Rights Reserved
        </p>
        <p className="text-[80%] md:text-[100%] -mt-1 md:mt-0 pb-1 cursor-default">
          Designed & Developed{" "}
          <a
            href="https://www.linkedin.com/in/raveeshavishwajith/"
            className="font-medium"
            target="_blank"
          >
            Raveesha Vishwajith
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
