import React, { useEffect } from "react";
import Home from "../../Components/Home/Home";
import Challenges from "../../Components/Challenges/Challenges";
import AchievementsPreview from "../../Components/Achievements/AchievementsPreview";
import OurMemories from "../../Components/Memories/OurMemories";
import SponsorBar from "../../Components/SponsorBar/SponsorBar";
import SiteBackground from "../../Components/Layout/SiteBackground";
import Footer from "../../Components/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === "#ourteam") {
      navigate("/organitioncommittee2026", { replace: true });
      return;
    }

    const scrollTargets = {
      "#home": { id: "home", offset: 0 },
      "#challenges": { id: "challenges", offset: -96 },
      "#achievements": { id: "achievements", offset: -96 },
      "#memories": { id: "memories", offset: -96 },
      "#sponsor": { id: "sponsor", offset: -96 },
    };

    const target = scrollTargets[location.hash];
    if (!target) return;

    const el = document.getElementById(target.id);
    if (!el) return;

    const timer = setTimeout(() => {
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + target.offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [location, navigate]);

  return (
    <div className="relative flex flex-col">
      <Home />
      <SiteBackground>
        <Challenges />
        <AchievementsPreview />
        <OurMemories limit={8} grayscaleHover compact />
        <SponsorBar />
        <Footer />
      </SiteBackground>
    </div>
  );
};

export default Index;
