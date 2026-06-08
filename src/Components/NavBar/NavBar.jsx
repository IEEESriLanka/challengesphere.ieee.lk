import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const logo = `${import.meta.env.BASE_URL}logo.png`;
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import SideBar from "../SideBar/SideBar";
import NavLinks from "./NavLinkes";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [navBarShow, setNavBarShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = navBarShow ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navBarShow]);

  const baseShell =
    "fixed z-50 transition-all duration-300 text-text-white backdrop-blur-md border-b";
  const desktopBg = scrolled
    ? "bg-chess-bg-2/90 border-chess-border shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
    : "bg-chess-bg-2/30 border-transparent";
  const mobileBg =
    scrolled || navBarShow
      ? "bg-chess-bg-2/95 border-chess-border shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
      : "bg-chess-bg-2/30 border-transparent";

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`${baseShell} ${desktopBg} hidden lg:flex flex-row justify-between items-center w-full h-24 px-[10%]`}
      >
        <button
          type="button"
          onClick={() => navigate("/#home")}
          className="flex items-center cursor-pointer"
          aria-label="Go to home"
        >
          <img
            src={logo}
            alt="ChallengeSphere logo"
            className="h-16 w-auto max-w-[5rem] object-contain"
          />
        </button>
        <div className="flex flex-row gap-x-6 xl:gap-x-10 font-medium text-lg xl:text-xl items-center">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`${baseShell} ${mobileBg} flex flex-col justify-center w-full h-20 px-[5%] top-0 lg:hidden`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <button
            type="button"
            onClick={() => navigate("/#home")}
            aria-label="Go to home"
          >
            <img
              src={logo}
              alt="ChallengeSphere logo"
              className="h-14 w-auto max-w-[4.5rem] object-contain"
            />
          </button>
          <button
            type="button"
            onClick={() => setNavBarShow((v) => !v)}
            aria-label={navBarShow ? "Close menu" : "Open menu"}
            className="text-2xl text-text-white hover:text-chess-cyan transition-colors"
          >
            {navBarShow ? <RxCross2 /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>
      <SideBar open={navBarShow} close={setNavBarShow} />
    </>
  );
};

export default NavBar;
