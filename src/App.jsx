import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Index from "./pages/Index/Index";
import ChallengePage from "./pages/Challenges/ChallengePage";
import OrganizingCommitee2026 from "./pages/OrganizingCommitee/OrganizingCommitee2026";
import NavBar from "./Components/NavBar/NavBar";
import Achievements from "./pages/Highlights/Achievements";
import Blogs from "./pages/Highlights/Blogs";
import BlogPost from "./pages/Highlights/BlogPost";
import Memories from "./pages/Highlights/Memories";
import AwardCeremony from "./pages/Highlights/AwardCeremony";
import PageShell from "./Components/Layout/PageShell";
import ScrollProgressRing from "./Components/ScrollProgress/ScrollProgressRing";

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
            <PageShell bare>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/arduinochallenge"
          element={
            <PageShell bare>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/chipschallenge"
          element={
            <PageShell bare>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/communicationschallenge"
          element={
            <PageShell bare>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/circuitschallenge"
          element={
            <PageShell bare>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/healthcareinnovationchallenge"
          element={
            <PageShell bare>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/roboticschallenge"
          element={
            <PageShell bare>
              <ChallengePage />
            </PageShell>
          }
        />
        <Route
          path="/organitioncommittee2024"
          element={<Navigate to="/organitioncommittee2026" replace />}
        />
        <Route
          path="/organitioncommittee2025"
          element={<Navigate to="/organitioncommittee2026" replace />}
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
          element={<Navigate to="/highlights/blogs/elevate-session-2024" replace />}
        />
        <Route
          path="/highlights/blogs"
          element={
            <PageShell>
              <Blogs />
            </PageShell>
          }
        />
        <Route
          path="/highlights/blogs/:slug"
          element={
            <PageShell>
              <BlogPost />
            </PageShell>
          }
        />
        <Route
          path="/highlights/memories"
          element={
            <PageShell>
              <Memories />
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
      <ScrollProgressRing />
    </div>
  );
};

export default App;
