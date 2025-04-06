import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import SideBar from "../SideBar/SideBar";
import NavLinks from "./NavLinkes";

const NavBar = () => {
  const location = useLocation();
  const [color, setColor] = useState(false);
  const [whiteColor, setWhiteColor] = useState(false);
  const [navBarShow, setNavBarShow] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (location.pathname !== "/") {
        setWhiteColor(true);
        setColor(false);
        return;
      }

      if (window.scrollY >= window.innerHeight - 60) {
        setWhiteColor(true);
        setColor(false);
      } else if (window.scrollY >= 100) {
        setWhiteColor(false);
        setColor(true);
      } else {
        setColor(false);
        setWhiteColor(false);
      }
    };

    changeColor();
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = navBarShow ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navBarShow]);

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:flex flex-row justify-between items-center w-full h-24 px-[10%] fixed z-10 ${
          whiteColor
            ? "backdrop-blur-lg bg-background-white-1 bg-opacity-40 text-text-black"
            : color
            ? "backdrop-blur-lg bg-background-black bg-opacity-40 text-text-white drop-shadow-2xl"
            : "text-text-white"
        }`}
      >
        <div>
          <img src={logo} alt="challengesphere logo" className="h-18 w-20" />
        </div>
        <div className="flex flex-row gap-x-6 xl:gap-x-10 font-medium text-xl items-center">
          <NavLinks whiteColor={whiteColor} color={color} />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`flex flex-col justify-center w-full h-20 px-[5%] fixed top-0 z-10 lg:hidden ${
          whiteColor
            ? "backdrop-blur-lg bg-background-white-1 bg-opacity-40 text-text-black"
            : color || navBarShow
            ? "backdrop-blur-lg bg-background-black bg-opacity-60 text-text-white"
            : "text-text-white"
        }`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <img src={logo} alt="challengesphere logo" className="h-14 w-18" />
          <div>
            {navBarShow ? (
              <RxCross2
                className={`text-2xl ${
                  whiteColor ? "text-text-black" : "text-text-white"
                }`}
                onClick={() => setNavBarShow(false)}
              />
            ) : (
              <HiOutlineMenuAlt3
                className={`text-2xl ${
                  whiteColor ? "text-text-black" : "text-text-white"
                }`}
                onClick={() => setNavBarShow(true)}
              />
            )}
          </div>
        </div>
      </div>
      <SideBar
        open={navBarShow}
        close={setNavBarShow}
        whiteColor={whiteColor}
      />
    </>
  );
};

export default NavBar;
