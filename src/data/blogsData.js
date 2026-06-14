/**
 * Challenge Sphere blog posts — add new entries at the TOP of `blogPosts`.
 *
 * Each post needs:
 *   slug       — URL path (e.g. "my-new-post" → /highlights/blogs/my-new-post)
 *   title      — headline
 *   topic      — tab category on the blogs page (e.g. "Topic", "Events")
 *   date       — display string (e.g. "June 27, 2024")
 *   excerpt    — short summary for the listing card
 *   coverImage — optional hero image (landing-style cover uses home bg)
 *   sections   — structured body blocks (heading, paragraph, quote, list, hashtags)
 *   paragraphs — fallback array of body paragraphs
 *   gallery    — optional array of image imports for a photo gallery
 */

import homeHeroBg from "../assets/home/bg.webp";
import elevate1 from "../assets/sessions/elevate/DSC_3124_5_11zon.webp";
import elevate2 from "../assets/sessions/elevate/DSC09392_3_11zon.webp";
import elevate3 from "../assets/sessions/elevate/DSC_3154_6_11zon.webp";
import elevate4 from "../assets/sessions/elevate/DSC09397_1_11zon.webp";
import elevate5 from "../assets/sessions/elevate/DSC09413_2_11zon.webp";

export const blogPosts = [
  {
    slug: "challenge-sphere-2026-launch-ieee-education-week",
    topic: "Topic",
    title:
      "Tech Innovation Unleashed: IEEE Challenge Sphere 2026 Officially Launches at IEEE Education Week!",
    date: "June 2026",
    excerpt:
      "The official launch of IEEE Challenge Sphere 2026 at IEEE Education Week Sri Lanka brought electrifying energy to TRACE Expert City — opening seven specialized innovation tracks for undergraduates nationwide.",
    coverImage: homeHeroBg,
    sections: [
      {
        type: "paragraph",
        text: "The energy at TRACE Expert City was absolutely electric as the engineering and tech community gathered for IEEE Education Week Sri Lanka 2026. Amidst an incredible lineup of expert-led career guidance sessions, deep dives into AI-augmented engineering, and networking tracks, came the moment undergraduate tech enthusiasts had been waiting for: the official launch of IEEE Challenge Sphere 2026!",
      },
      {
        type: "quote",
        text: "The primary goal of the Challenge Sphere is to bridge the gap between academic theory and industry reality, empowering the next generation of problem solvers to design, build, and scale local innovations for a global stage.",
      },
      {
        type: "heading",
        text: "Celebrating Education by Driving Innovation",
      },
      {
        type: "paragraph",
        text: "Launching during IEEE Education Week is no coincidence. While global Education Week initiatives celebrate the educators and frameworks shaping our technical futures, the IEEE Challenge Sphere serves as the perfect arena for students to actively put those lessons to the test.",
      },
      {
        type: "paragraph",
        text: "It is more than just a competition; it is an incubation playground across seven specialized domains:",
      },
      {
        type: "list",
        items: [
          {
            icon: "🤖",
            title: "Robotics Challenge",
            text: "Exploring robotics, automation, and intelligent engineering solutions through hands-on innovation.",
          },
          {
            icon: "🔧",
            title: "Arduino Challenge",
            text: "Encouraging participants to develop smart and sustainable Arduino-based solutions to solve real-world challenges.",
          },
          {
            icon: "🧠",
            title: "Artificial Intelligence Challenge",
            text: "Exploring intelligent systems and AI-powered innovation through creative problem-solving.",
          },
          {
            icon: "🔌",
            title: "Chips Challenge",
            text: "Providing opportunities to explore semiconductor technologies, integrated circuits, and microelectronics.",
          },
          {
            icon: "📡",
            title: "Signal Processing for Communications Challenge",
            text: "Applying communication technologies and signal processing concepts to solve modern connectivity challenges.",
          },
          {
            icon: "🩺",
            title: "Healthcare Innovation Challenge",
            text: "Developing impactful technology-driven solutions for real-world healthcare needs.",
          },
        ],
      },
      {
        type: "heading",
        text: "What Lies Ahead?",
      },
      {
        type: "paragraph",
        text: "With the launch ceremony successfully wrapping up the undergraduate segment at TRACE Expert City, the gates are officially open. Teams from across the island's university network are preparing to prototype, code, and engineer their way to the top. Winning teams won't just walk away with prizes, they gain direct mentorship and pathways to represent Sri Lanka at global IEEE competitive levels, including the international Circuits and Systems (CAS) stages.",
      },
      {
        type: "paragraph",
        text: "The stage is set, the challenges are open, and the countdown has begun. It's time to find your team, pick your sphere, and engineer the future!",
      },
      {
        type: "paragraph",
        text: "Stay tuned to our official channels for the upcoming registration timelines, virtual awareness webinars, and track-specific guidelines.",
      },
      {
        type: "hashtags",
        tags: [
          "#IEEEChallengeSphere2026",
          "#IEEEEduWeek",
          "#IEEESriLanka",
          "#TechInnovation",
          "#STEM",
        ],
      },
    ],
  },
  {
    slug: "elevate-session-2024",
    topic: "Events",
    title: "Challenge Sphere Elevate Session 2024",
    date: "June 27, 2024",
    excerpt:
      "Over 200 delegates joined the Elevate Session for expert-led insights on Arduino, circuits, AI, signal processing, and microelectronics.",
    gallery: [elevate1, elevate2, elevate3, elevate4, elevate5],
    paragraphs: [
      "On June 27th, 2024, the IEEE Sri Lanka Section proudly hosted an electrifying event, the Challenge Sphere Elevate Session, attracting over 200 enthusiastic delegates from various fields. This unforgettable session, held with great enthusiasm, aimed to equip participants with insights and preparation techniques for tackling challenges in cutting-edge technological areas such as Arduino, Circuit Design, Artificial Intelligence, Signal Processing, and Microelectronics.",
      "The day was packed with engaging activities and informative sessions led by experts in the field. Participants had the opportunity to delve deep into the intricacies of each domain, gaining valuable knowledge and hands-on experience. The session not only highlighted the importance of these technologies but also provided practical guidance on how to approach and solve related challenges effectively.",
      "The success of the event was evident in the active participation and positive feedback from the delegates. The atmosphere was charged with curiosity, learning, and collaboration, reflecting the true spirit of IEEE's mission to foster technological innovation and excellence for the benefit of humanity.",
      "A heartfelt thank you goes out to everyone who participated and contributed to making this event a resounding success. Your enthusiasm and dedication were truly inspiring, and we look forward to many more such successful collaborations and advancements in the future.",
    ],
  },
];

export const getBlogTopics = () => [
  "All",
  ...new Set(blogPosts.map((post) => post.topic).filter(Boolean)),
];

export const getBlogBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);

