/**
 * Launching Ceremony 2026 — IEEE Challenge Sphere at IEEE Education Week.
 * Photos auto-load from src/assets/IEEEEduWeekLaunching/
 */

const launchPhotoModules = import.meta.glob(
  "../assets/IEEEEduWeekLaunching/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);

export const launchingCeremony = {
  year: "2026",
  title: "Launching Ceremony 2026",
  subtitle:
    "IEEE Challenge Sphere 2026 — Official Launch at IEEE Education Week Sri Lanka",
  venue: "TRACE Expert City",
  event: "IEEE Education Week Sri Lanka 2026",
  accent: "#05ddff",
  paragraphs: [
    "The energy at TRACE Expert City was absolutely electric as the engineering and tech community gathered for IEEE Education Week Sri Lanka 2026. Amidst an incredible lineup of expert-led career guidance sessions, deep dives into AI-augmented engineering, and networking tracks, came the moment undergraduate tech enthusiasts had been waiting for: the official launch of IEEE Challenge Sphere 2026!",
    "Launching during IEEE Education Week is no coincidence. While global Education Week initiatives celebrate the educators and frameworks shaping our technical futures, the IEEE Challenge Sphere serves as the perfect arena for students to actively put those lessons to the test.",
    "It is more than just a competition; it is an incubation playground across seven specialized domains — Robotics, Arduino, Artificial Intelligence, Chips, Signal Processing for Communications, Healthcare Innovation, and Circuits — empowering the next generation of problem solvers to design, build, and scale local innovations for a global stage.",
    "With the launch ceremony successfully wrapping up the undergraduate segment at TRACE Expert City, the gates are officially open. Teams from across the island's university network are preparing to prototype, code, and engineer their way to the top, with pathways to represent Sri Lanka at global IEEE competitive levels.",
  ],
  quote:
    "The primary goal of the Challenge Sphere is to bridge the gap between academic theory and industry reality, empowering the next generation of problem solvers to design, build, and scale local innovations for a global stage.",
  highlights: [
    "Official IEEE Challenge Sphere 2026 launch",
    "Held during IEEE Education Week Sri Lanka 2026",
    "Seven specialized innovation tracks unveiled",
    "Undergraduate tech community from across Sri Lanka",
  ],
  blogLink: "/highlights/blogs/challenge-sphere-2026-launch-ieee-education-week",
};

export const launchingCeremonyPhotos = Object.entries(launchPhotoModules)
  .map(([path, src], index) => ({
    id: `launch-${index}`,
    src,
    alt: "IEEE Challenge Sphere 2026 launching ceremony",
    album: "Launching Ceremony 2026",
  }))
  .sort((a, b) => a.src.localeCompare(b.src));
