/**
 * Achievements & highlights — edit copy here when new results are confirmed.
 */

/** Best Sectional Project — kept on home landing achievements preview */
export const sectionAward = {
  awardYear: "2024",
  title: "Best Sectional Project — IEEE Sri Lanka Section",
  summary:
    "IEEE Challenge Sphere was recognized as the Best Sectional Project by the IEEE Sri Lanka Section for empowering undergraduates and school students through Sri Lanka's largest national engineering competition series.",
};

export const challengeHighlightsYear = "2025";

export const challengeAchievements = [
  {
    id: "chips",
    path: "/chipschallenge",
    label: "Chips Challenge",
    year: "2025",
    accent: "#7469B6",
    headline: "National winner advanced to the International Microelectronics Olympiad",
    summary:
      "The 2025 Chips Challenge national winner secured a place at the International Microelectronics Olympiad (IMO) in Armenia — the global stage for microelectronics excellence.",
    detail:
      "As Sri Lanka's national selection pathway for the International Microelectronics Olympiad, the Chips Challenge continues to connect top local talent with international recognition in microelectronics and EDA.",
  },
  {
    id: "arduino",
    path: "/arduinochallenge",
    label: "Arduino Challenge",
    year: "2025",
    accent: "#07989D",
    headline: "Team Voltron crowned national Arduino Challenge champions",
    summary:
      "At Challenge Sphere 2025, Team Voltron from the University of Sri Jayewardenepura won the Sri Lanka Arduino Challenge, with SLIIT Health Guard and We Make IT (USJ) as 1st and 2nd runners-up.",
    detail:
      "The Arduino Challenge brings together university innovators for embedded systems solutions. The 2025 finals celebrated nationally competitive projects and strong representation from multiple institutions across Sri Lanka.",
  },
];

/** Lookup achievement copy for a challenge detail route */
export const getAchievementForPath = (pathname) =>
  challengeAchievements.find((item) => item.path === pathname);
