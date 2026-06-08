/** Shared nav structure for navbar dropdowns and footer link columns */

export const siteNavLinks = [
  { name: "Home", link: "/#home" },
  {
    name: "Challenges",
    subLinks: [
      { name: "AI Challenge", link: "/aichallenge" },
      { name: "Arduino Challenge", link: "/arduinochallenge" },
      { name: "Chips Challenge", link: "/chipschallenge" },
      { name: "Circuits Challenge", link: "/circuitschallenge" },
      { name: "Communications Challenge", link: "/communicationschallenge" },
      {
        name: "Healthcare Innovation Challenge",
        link: "/healthcareinnovationchallenge",
      },
      { name: "Robotics Challenge", link: "/roboticschallenge" },
    ],
  },
  {
    name: "Our Highlights",
    subLinks: [
      { name: "Achievements", link: "/highlights/achievements" },
      { name: "Blogs", link: "/highlights/blogs" },
      { name: "Our Memories", link: "/highlights/memories" },
      { name: "Award Ceremony", link: "/highlights/awardceremony" },
    ],
  },
  {
    name: "Our Team",
    link: "/organitioncommittee2026",
  },
  { name: "Sponsors", link: "/#sponsor" },
];

/** Sections with child links (for footer columns) */
export const footerLinkSections = siteNavLinks.filter(
  (item) => item.subLinks?.length
);
