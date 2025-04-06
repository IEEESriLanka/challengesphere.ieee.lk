import React, { useEffect } from "react";
import Home from "../../Components/Home/Home";
import Challenges from "../../Components/Challenges/Challenges";
import OutTeam from "../../Components/OurTeam/OurTeam";
import ChallengeLeads from "../../Components/ChallengeLeads/ChallengeLeads";
import SponsorBar from "../../Components/SponsorBar/SponsorBar";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#home") {
      const el = document.getElementById("home");
      if (el) {
        setTimeout(() => {
          const yOffset = 0;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    } else if (location.hash === "#challenges") {
      const el = document.getElementById("challenges");
      if (el) {
        setTimeout(() => {
          const yOffset = -96;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    } else if (location.hash === "#ourteam") {
      const el = document.getElementById("ourteam");
      if (el) {
        setTimeout(() => {
          const yOffset = -96;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    } else if (location.hash === "#sponsor") {
      const el = document.getElementById("sponsor");
      if (el) {
        setTimeout(() => {
          const yOffset = -96;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="relative flex flex-col">
      <Home />
      <Challenges />
      <OutTeam />
      <ChallengeLeads />
      <SponsorBar />
    </div>
  );
};

export default Index;
