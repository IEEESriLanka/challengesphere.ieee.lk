import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import bgImg from "../../assets/home/bg.webp";
import { footerLinkSections, siteNavLinks } from "../../data/siteNavLinks";

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

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-chess-muted text-sm hover:text-chess-cyan transition-colors"
    >
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const directLinks = siteNavLinks.filter((l) => l.link && !l.subLinks);

  return (
    <footer className="relative border-t border-chess-border overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#01040d]/88 via-[#020511]/92 to-[#01040d]/96" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 flex flex-col w-full px-[5%] md:px-[10%] pt-12 pb-6 text-text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start gap-4">
            <img
              src={logo}
              alt="ChallengeSphere logo"
              className="h-14 w-auto drop-shadow-[0_4px_18px_rgba(5,221,255,0.18)]"
            />
            <div className="text-center sm:text-start">
              <p className="font-semibold text-white text-lg">Challenge Sphere</p>
              <p className="font-light text-chess-muted text-sm mt-1">
                Where Limits Shatter and New Horizons Arise
              </p>
            </div>
            <div className="flex flex-row gap-3">
              {socials.map(({ href, label, icon: SocialIcon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-chess-border bg-chess-surface/80 text-text-white hover:text-chess-cyan hover:border-chess-cyan hover:shadow-chess-glow transition-all"
                >
                  <SocialIcon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {footerLinkSections.map((section) => (
            <div key={section.name}>
              <h3 className="text-white font-semibold text-sm tracking-wide mb-4">
                {section.name}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.subLinks.map((sub) => (
                  <FooterLink key={sub.name} to={sub.link}>
                    {sub.name}
                  </FooterLink>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {directLinks.map((item) => (
                <FooterLink key={item.name} to={item.link}>
                  {item.name}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-chess-border/80 mt-10" />

        <div className="w-full flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-2 mt-5 pb-1 text-chess-muted text-xs md:text-sm">
          <p className="font-medium text-left shrink-0">
            © 2026 IEEE Sri Lanka Challenge Sphere | All Rights Reserved
          </p>
          <p className="text-right shrink-0 ml-auto">
            Designed & Developed by{" "}
            <a
              href="https://www.rusirasandul.online/"
              className="font-medium text-chess-cyan hover:text-chess-cyan-soft whitespace-nowrap"
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
