import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Index from "./pages/Index/Index";
import Footer from "./Components/Footer/Footer";
import ChallengePage from "./pages/Challenges/ChallengePage";
import NavBar from "./Components/NavBar/NavBar";
// import Achievements from "./pages/Highlights/Achievements";
// import ElevateSession from "./pages/Highlights/ElevateSession";
// import AwardCeremony from "./pages/Highlights/AwardCeremony";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { OurTeam } from "./pages/OurTeam/OurTeam";
import { Highlights } from "./pages/Highlights/Highlights";
import { HighlightDetails } from "./pages/Highlights/HighlightDetails";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, []);

  return (
    <div className="w-full h-full">
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ourteam" element={<OurTeam />} />

        <Route path="/arduinochallenge" element={<ChallengePage />} />
        <Route path="/aichallenge" element={<ChallengePage />} />
        <Route path="/chipschallenge" element={<ChallengePage />} />
        <Route path="/communicationschallenge" element={<ChallengePage />} />
        <Route path="/circuitschallenge" element={<ChallengePage />} />
        <Route
          path="/healthcareinnovationchallenge"
          element={<ChallengePage />}
        />
        <Route path="/roboticschallenge" element={<ChallengePage />} />

        <Route path="/highlights" element={<Highlights />} />
        <Route path="/highlights/:id" element={<HighlightDetails />} />

        {/* <Route path="/highlights/elevatesession" element={<ElevateSession />} /> */}
        {/* <Route path="/highlights/achievements" element={<Achievements />} /> */}
        {/* <Route path="/highlights/awardceremony" element={<AwardCeremony />} /> */}
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
