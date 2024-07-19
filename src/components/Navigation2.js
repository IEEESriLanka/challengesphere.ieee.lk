import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Navigation2 = () => {
    const navigate = useNavigate();

    const handleNavigation = (section) => {
        navigate("/");
        setTimeout(() => {
            scroll.scrollTo(document.getElementById(section).offsetTop, {
                duration: 500,
                smooth: "easeInOutQuad",
            });
        }, 100);
    };

    return (
        <header className="fixed w-full top-0 z-50 bg-white text-blue-700 py-4 shadow-md font-bold">
            <nav className="flex justify-between items-center px-4">
                <RouterLink to="/" className="flex-shrink-0">
                    <img src="/main-logo.svg" alt="Logo" className="h-12 w-auto" />
                </RouterLink>
                <ul className="flex space-x-4 cursor-pointer items-center">
                    <li
                        className="hover:text-blue-900 transition duration-300"
                        onClick={() => handleNavigation("home")}
                    >
                        Home
                    </li>
                    <li
                        className="hover:text-blue-900 transition duration-300"
                        onClick={() => handleNavigation("about")}
                    >
                        Challenges
                    </li>
                    <li
                        className="hover:text-blue-900 transition duration-300"
                        onClick={() => handleNavigation("schedule")}
                    >
                        Schedule
                    </li>
                    <li
                        className="hover:text-blue-900 transition duration-300"
                        onClick={() => handleNavigation("organizing")}
                    >
                        Our Team
                    </li>
                    <li
                        className="hover:text-blue-900 transition duration-300"
                        onClick={() => handleNavigation("sponsors")}
                    >
                        Sponsors
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation2;
