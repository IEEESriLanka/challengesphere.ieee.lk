/**
 * Challenge Sphere blog posts — add new entries at the TOP of `blogPosts`.
 *
 * Each post needs:
 *   slug       — URL path (e.g. "my-new-post" → /highlights/blogs/my-new-post)
 *   title      — headline
 *   date       — display string (e.g. "June 27, 2024")
 *   excerpt    — short summary for the listing card
 *   paragraphs — array of body paragraphs
 *   gallery    — optional array of image imports for a photo gallery
 */

import elevate1 from "../assets/sessions/elevate/DSC_3124_5_11zon.webp";
import elevate2 from "../assets/sessions/elevate/DSC09392_3_11zon.webp";
import elevate3 from "../assets/sessions/elevate/DSC_3154_6_11zon.webp";
import elevate4 from "../assets/sessions/elevate/DSC09397_1_11zon.webp";
import elevate5 from "../assets/sessions/elevate/DSC09413_2_11zon.webp";

export const blogPosts = [
  {
    slug: "elevate-session-2024",
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

export const getBlogBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);
