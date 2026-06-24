import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const guidelineSections = [
  {
    title: "About the Competition",
    content: (
      <div className="space-y-4">
        <p>
          The Communications Challenge 2026 is a four-month open-ended
          undergraduate competition jointly organized by the IEEE Communications
          Society Sri Lanka Chapter and the IEEE Signal Processing Society Sri
          Lanka Chapter. The challenge invites students to identify real-world
          problems aligned with one or more United Nations Sustainable
          Development Goals (SDGs) and develop innovative solutions where
          telecommunications and/or signal processing form the technical core.
        </p>
        <p>
          Participants are encouraged to explore diverse application areas
          including healthcare, education, agriculture, environmental
          sustainability, climate action, accessibility, and smart cities.
          Through this challenge, teams will design, prototype, and validate
          impactful solutions that address societal needs while demonstrating
          technical excellence and innovation.
        </p>
      </div>
    ),
  },
  {
    title: "Key Information",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <span className="text-white font-medium">Eligibility:</span>{" "}
          Undergraduate students enrolled at recognized higher education
          institutions in Sri Lanka.
        </li>
        <li>
          <span className="text-white font-medium">Team Size:</span> 3–5 members
          per team.
        </li>
        <li>
          <span className="text-white font-medium">Duration:</span>{" "}
          Approximately 16 weeks (4 months).
        </li>
        <li>
          <span className="text-white font-medium">Focus Areas:</span>{" "}
          Telecommunications, Signal Processing, IoT, Wireless Communications,
          Networking, RF Sensing, Biomedical Signal Analysis, Image and Speech
          Processing, and related technologies.
        </li>
        <li>
          <span className="text-white font-medium">Expected Deliverables:</span>{" "}
          A working prototype, IEEE-format technical report, demonstration
          video, and final presentation.
        </li>
        <li>
          <span className="text-white font-medium">Final Showcase:</span> Live
          demonstration and presentation before a panel of academic and industry
          experts.
        </li>
      </ul>
    ),
  },
  {
    title: "Evaluation Criteria",
    content: (
      <p>
        Teams will be evaluated based on SDG impact, technical depth,
        innovation, feasibility, validation strategy, prototype performance, and
        presentation quality.
      </p>
    ),
  },
  {
    title: "Why Compete?",
    content: (
      <p>
        Communications Challenge 2026 offers a unique opportunity to apply
        engineering knowledge to solve meaningful real-world challenges.
        Participants will gain hands-on experience in developing innovative
        technologies, collaborate within multidisciplinary teams, strengthen
        their research and problem-solving skills, and showcase their work
        before academic and industry experts. Beyond the competition, it serves
        as a platform to transform ideas into impactful solutions and contribute
        towards a more sustainable future.
      </p>
    ),
  },
  {
    title: "Registration",
    content: (
      <p>
        Students can register by completing the form at{" "}
        <a
          href="https://challengesphere.ieee.lk/communicationschallenge"
          className="text-chess-cyan hover:underline break-all"
        >
          https://challengesphere.ieee.lk/communicationschallenge
        </a>
        .
      </p>
    ),
  },
];

const CommunicationsChallengeGuidelines = ({ accent = "#D74B61" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto mt-6 px-0 md:px-[15%]">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 chess-card px-5 py-4 md:px-6 md:py-5 text-left border transition-all hover:opacity-95"
        style={{ borderColor: `${accent}55` }}
      >
        <span className="text-base md:text-lg font-semibold text-white">
          About the Competition and Guidelines
        </span>
        <FaChevronDown
          className={`shrink-0 text-lg transition-transform duration-300 ${
            open ? "rotate-180 text-chess-cyan" : "text-chess-muted"
          }`}
        />
      </button>

      {open && (
        <div
          className="chess-card mt-3 p-5 md:p-8 text-left border text-sm md:text-base text-chess-muted leading-relaxed space-y-6"
          style={{ borderColor: `${accent}44` }}
        >
          <div className="space-y-1 pb-4 border-b border-chess-border">
            <p
              className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase"
              style={{ color: accent }}
            >
              IEEE Sri Lanka Challenge Sphere 2026
            </p>
            <h3 className="text-white text-lg md:text-xl font-semibold">
              Communications Challenge 2026
            </h3>
            <p className="text-chess-muted text-sm">
              Jointly organized by IEEE ComSoc Sri Lanka Chapter & IEEE Signal
              Processing Society Sri Lanka Chapter
            </p>
          </div>

          {guidelineSections.map((section) => (
            <section key={section.title}>
              <h4
                className="text-white font-semibold text-base md:text-lg mb-2"
                style={{ color: accent }}
              >
                {section.title}
              </h4>
              <div>{section.content}</div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunicationsChallengeGuidelines;
