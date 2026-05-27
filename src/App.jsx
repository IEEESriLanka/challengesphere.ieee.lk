import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Index from "./pages/Index/Index";
import ChallengePage from "./pages/Challenges/ChallengePage";
import OrganizingCommitee2024 from "./pages/OrganizingCommitee/OrganizingCommitee2024";
import OrganizingCommitee2026 from "./pages/OrganizingCommitee/OrganizingCommitee2026";
import NavBar from "./Components/NavBar/NavBar";
import Achievements from "./pages/Highlights/Achievements";
import ElevateSession from "./pages/Highlights/ElevateSession";
import AwardCeremony from "./pages/Highlights/AwardCeremony";
import PageShell from "./Components/Layout/PageShell";

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
          element={
            <PageShell>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/arduinochallenge"
          element={
            <PageShell>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/chipschallenge"
          element={
            <PageShell>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/communicationschallenge"
          element={
            <PageShell>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/circuitschallenge"
          element={
            <PageShell>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/healthcareinnovationchallenge"
          element={
            <PageShell>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/roboticschallenge"
          element={
            <PageShell>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/organitioncommittee2024"
          element={
            <PageShell>
              <OrganizingCommitee2024 />
            </PageShell>
          }
        />
        <Route
          path="/organitioncommittee2026"
          element={
            <PageShell>
              <OrganizingCommitee2026 />
            </PageShell>
          }
        />
        <Route
          path="/highlights/elevatesession"
          element={
            <PageShell>
              <ElevateSession />
            </PageShell>
          }
        />
        <Route
          path="/highlights/achievements"
          element={
            <PageShell>
              <Achievements />
            </PageShell>
          }
        />
        <Route
          path="/highlights/awardceremony"
          element={
            <PageShell>
              <AwardCeremony />
            </PageShell>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
