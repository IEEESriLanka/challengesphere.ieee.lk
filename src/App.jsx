import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Index from "./pages/Index/Index";
import Footer from "./Components/Footer/Footer";
import ChallengePage from "./pages/Challenges/ChallengePage";
import OrganizingCommitee2024 from "./pages/OrganizingCommitee/OrganizingCommitee2024";
import NavBar from "./Components/NavBar/NavBar";
import Achievements from "./pages/Highlights/Achievements";
import ElevateSession from "./pages/Highlights/ElevateSession";
import AwardCeremony from "./pages/Highlights/AwardCeremony";

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
        <Route
          path="/aichallenge"
          element={<ChallengePage />}
        />
        <Route
          path="/arduinochallenge"
          element={<ChallengePage />}
        />
        <Route
          path="/chipschallenge"
          element={<ChallengePage />}
        />
        <Route
          path="/communicationschallenge"
          element={<ChallengePage />}
        />
        <Route
          path="/circuitschallenge"
          element={<ChallengePage />}
        />
        <Route
          path="/healthcareinnovationchallenge"
          element={<ChallengePage />}
        />
        <Route
          path="/roboticschallenge"
          element={<ChallengePage />}
        />
        <Route
          path="/organitioncommittee2024"
          element={<OrganizingCommitee2024 />}
        />
        <Route
          path="/highlights/elevatesession"
          element={<ElevateSession />}
        />
        <Route
          path="/highlights/achievements"
          element={<Achievements />}
        />
        <Route
          path="/highlights/awardceremony"
          element={<AwardCeremony />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
