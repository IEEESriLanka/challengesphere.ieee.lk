import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
const logo = `${import.meta.env.BASE_URL}logo.png`;

const socials = [
  {
    href: "https://www.facebook.com/IEEESriLanka",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/ieeesrilanka/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://chat.whatsapp.com/I5vOXfOmzMG3REUXzCBBwd",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-chess-border bg-[#01040d]/60 backdrop-blur-sm">
      <div className="relative flex flex-col w-full px-[5%] md:px-[10%] pt-10 pb-6 text-text-white">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5">
            <img
              src={logo}
              alt="ChallengeSphere logo"
              className="h-14 md:h-16 w-auto drop-shadow-[0_4px_18px_rgba(5,221,255,0.18)]"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-white text-lg md:text-xl lg:text-2xl text-center md:text-start">
                Challenge Sphere
              </p>
              <p className="font-light text-chess-muted text-sm md:text-base text-center md:text-start">
                Where Limits Shatter and New Horizons Arise
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex items-center justify-center h-11 w-11 rounded-full border border-chess-border bg-chess-surface text-text-white hover:text-chess-cyan hover:border-chess-cyan hover:shadow-chess-glow transition-all"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-chess-border mt-8" />

        <div className="w-full text-center mt-4 text-base font-normal text-chess-muted">
          <p className="font-medium text-xs md:text-sm cursor-default">
            © 2026 IEEE Sri Lanka Challenge Sphere | All Rights Reserved
          </p>
          <p className="text-xs md:text-sm mt-1 pb-1 cursor-default">
            Designed & Developed by{" "}
            <a
              href="https://www.rusirasandul.online/"
              className="font-medium text-chess-cyan hover:text-chess-cyan-soft"
              target="_blank"
              rel="noreferrer"
            >
              Rusira Sandul
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
