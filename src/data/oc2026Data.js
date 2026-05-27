// 2026 Organizing Committee — headshots
import neranjanaImg from "../assets/team/2026/oc/Neranjana Gamage.jpg";
import sidathImg from "../assets/team/2026/oc/Dr. Sidath.jpeg";
import metharaImg from "../assets/team/2026/oc/Methara Hewavithana.jpg";
import bosiluImg from "../assets/team/2026/oc/Bosilu Nisalitha.jpg";
import kanushanImg from "../assets/team/2026/oc/Kanushan - kanushan thavendren.png";
import virajImg from "../assets/team/2026/oc/Viraj Munaweera(1) - viraj munaweera.png";
import rusiraImg from "../assets/team/2026/oc/Rusira Sandul.png";
import suwarnadaranImg from "../assets/team/2026/oc/Suwarnadaran Pathmanathan.png";
import thuhinaImg from "../assets/team/2026/oc/thuhina nimnadira.jpeg";
import viduminiImg from "../assets/team/2026/oc/Vidumini Sanjula.png";
import damshaImg from "../assets/team/2026/oc/Damsha Gangaaddarawatta.jpeg";
import upaniImg from "../assets/team/2026/oc/Upani Movinya Perera.jpg";
import madhawaImg from "../assets/team/2026/oc/Madhawa Aloka.jpg";
import yasithImg from "../assets/team/2026/oc/Yasith.jpg";
import vidmalImg from "../assets/team/2026/oc/vidmal senanayake.jpeg";
import siluniImg from "../assets/team/2026/oc/Siluni Gallaba.jpg";

/** Normalize LinkedIn / mailto links for TeamCard */
export function normalizeMemberLink(link) {
  if (!link) return undefined;
  if (
    link.startsWith("http://") ||
    link.startsWith("https://") ||
    link.startsWith("mailto:")
  ) {
    return link;
  }
  if (link.startsWith("www.")) return `https://${link}`;
  return `https://${link}`;
}

/**
 * Optional per-member image tweaks (inside the circular avatar):
 *   imagePosition: "50% 30%"  — move focal point (left/right, up/down)
 *   imageScale: 1.15          — zoom in slightly (1 = default)
 */
export const oc2026Data = [
  {
    name: "Neranjana Rashmi",
    role: "Project Chair",
    position: "Project Chair",
    img: neranjanaImg,
    university: null,
    linkedin: "https://www.linkedin.com/in/neranjana-rashmi",
    imagePosition: "50% 25%",
    imageScale: 1.1,
    // imagePosition: "50% 25%",
    // imageScale: 1.1,
  },
  {
    name: "Dr. Sidath Ravindra Liyanage",
    role: "EAC Chair",
    position:
      "Chair, Educational Activities Committee, IEEE Sri Lanka Section",
    img: sidathImg,
    university: null,
    linkedin: "https://www.linkedin.com/in/sidathliyanage",
    imagePosition: "50% 1%",
    imageScale: 1.09,
  },
  {
    name: "Methara Minsandhi Hewavithana",
    role: "Secretary",
    position: "Secretary",
    img: metharaImg,
    university: "General Sir John Kotelawala Defence University (KDU)",
    linkedin: "http://www.linkedin.com/in/methara",
  },
  {
    name: "Bosilu Nisalitha Pupulewela",
    role: "VC - PV",
    position: "Vice Chair, Public Visibility",
    img: bosiluImg,
    university: "Sri Lanka Technological Campus (SLTC)",
    linkedin: "mailto:bosilunisalitha12345@gmail.com",
    imagePosition: "50% 12%",
    imageScale: 2.1,
  },
  {
    name: "Kanushan Thavendren",
    role: "VC - Program",
    position: "Vice Chair, Program and Delivery",
    img: kanushanImg,
    university: "Informatics Institute of Technology (IIT)",
    linkedin: "http://www.linkedin.com/in/kanushan-thavendren-tech",
  },
  {
    name: "Viraj Kavindu Munaweera",
    role: "VC - Finance",
    position: "Vice Chair, Finance and Partnership",
    img: virajImg,
    university: "Informatics Institute of Technology (IIT)",
    linkedin: "https://www.linkedin.com/in/virajmunaweera/",
  },
  {
    name: "Rusira Sandul",
    role: "Website",
    position: "Coordinator",
    img: rusiraImg,
    university: "University of Sri Jayewardenepura (USJP)",
    linkedin: "https://www.linkedin.com/in/rusira-sandul-b6bb87292",
  },
  {
    name: "Suwarnadaran Pathmanathan",
    role: "Design",
    position: "Coordinator",
    img: suwarnadaranImg,
    university: "Curtin University",
    linkedin: "https://www.linkedin.com/in/suwarnadaran-pathmanathan",
    imagePosition: "45% 12%",
    imageScale: 1.2,
  },
  {
    name: "Thuhina Nimnadira",
    role: "Design",
    position: "Coordinator",
    img: thuhinaImg,
    university: "General Sir John Kotelawala Defence University (KDU)",
    linkedin: "mailto:nimnadirathuhina@gmail.com",
  },
  {
    name: "Vidumini Sanjula",
    role: "Coordinator",
    position: "Coordinator",
    img: viduminiImg,
    university: null,
    linkedin: null,
    imagePosition: "45% 12%",
    imageScale: 1.2,
  },
  {
    name: "Tharidi Damsha Gangaaddarawaththa",
    role: "Finance",
    position: "Coordinator",
    img: damshaImg,
    university: "General Sir John Kotelawala Defence University (KDU)",
    linkedin:
      "https://www.linkedin.com/in/damsha-gangaaddarawaththa-5a2b81364",
  },
  {
    name: "Upani Movinya Perera",
    role: "Finance",
    position: "Coordinator",
    img: upaniImg,
    university: "National School of Business Management (NSBM)",
    linkedin: "https://www.linkedin.com/in/upani-movinya-perera-883070326",
  },
  {
    name: "Madhawa Aloka",
    role: "Program",
    position: "Coordinator",
    img: madhawaImg,
    university: "University of Colombo School of Computing (UCSC)",
    linkedin: "mailto:madawa.aloka@gmail.com",
    imagePosition: "45% 12%",
    imageScale: 1.2,
  },
  {
    name: "Yasith Tharuka",
    role: "Program",
    position: "Coordinator",
    img: yasithImg,
    university: "Sri Lanka Institute of Information Technology (SLIIT)",
    linkedin: "mailto:yasiththaruka08@gmail.com",
  },
  {
    name: "Vidmal Senanayake",
    role: "Program",
    position: "Coordinator",
    img: vidmalImg,
    university: "University of Kelaniya (UOK)",
    linkedin: "http://linkedin.com/in/vidmal-senanayake",
  },
  {
    name: "Siluni Methmanthi Gallaba",
    role: "Asst. Secretary",
    position: "Assistant Secretary",
    img: siluniImg,
    university: "University of Kelaniya (UOK)",
    linkedin: "https://www.linkedin.com/in/siluni-gallaba-b17661356",
  },
];

const LEAD_ROLES = new Set(["EAC Chair", "Project Chair", "Secretary", "Asst. Secretary"]);
const VC_ROLES = new Set(["VC - PV", "VC - Program", "VC - Finance"]);

/** 1st row: Dr. Sidath alone */
export const oc2026TopLead = oc2026Data.filter((m) => m.role === "EAC Chair");

/** 2nd row: Project Chair and Secretary side-by-side */
export const oc2026SubLeads = oc2026Data.filter(
  (m) => m.role === "Project Chair" || m.role === "Secretary" || m.role === "Asst. Secretary"
);

export const oc2026ViceChairs = oc2026Data.filter((m) => VC_ROLES.has(m.role));
export const oc2026Coordinators = oc2026Data.filter(
  (m) => !LEAD_ROLES.has(m.role) && !VC_ROLES.has(m.role)
);
