import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const guidelineSections = [
  {
    title: "About the Competition",
    content: (
      <p>
        The Sri Lanka Chips Challenge of the IEEE Sri Lanka ChallengeSphere
        2026 is launched as the local competition (national selection) for the
        International Microelectronics Olympiad, which will be held in Armenia in
        November 2026.
      </p>
    ),
  },
  {
    title: "Overview",
    content: (
      <p>
        The Sri Lanka Chips Challenge will be the first Microelectronics
        Olympiad in Sri Lanka, enabling students to showcase their theoretical
        understanding of microelectronics and EDA software development.
      </p>
    ),
  },
  {
    title: "Purpose / Objectives",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Building microelectronics talent for the global chip industry</li>
        <li>
          Increase interest in microelectronics among undergraduates and graduate
          students.
        </li>
        <li>
          Understand the level of knowledge in the field of microelectronics
          among students in Sri Lanka.
        </li>
        <li>
          Creating a student community with an interest in microelectronics.
        </li>
      </ul>
    ),
  },
  {
    title: "Format",
    content: (
      <p>
        One-hour close book examination conducted in an examination hall at
        Curtin University Colombo.
      </p>
    ),
  },
  {
    title: "Rules and Regulations",
    content: (
      <div className="space-y-3">
        <p className="font-semibold text-white">Eligibility:</p>
        <p>
          Undergraduate or a full-time graduate student of any Sri Lankan
          university below age 30.
        </p>
      </div>
    ),
  },
  {
    title: "Guidelines",
    content: (
      <div className="space-y-3">
        <p>
          Before attending the exam, students need to refresh and enhance their
          knowledge in:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Digital integrated circuits</li>
          <li>Analog integrated circuits</li>
          <li>RF integrated circuits</li>
          <li>Semiconductor physics and electronic devices</li>
          <li>Semiconductor technology</li>
          <li>Numerical methods and optimization</li>
          <li>Discrete mathematics and theory of combinations</li>
          <li>Object-oriented programming.</li>
          <li>Nanoelectronics.</li>
        </ol>
        <p>
          Example test problems are available in:{" "}
          <a
            href="http://microelectronicsolympiad.org/file/2018/10/Olympiad_book_eng_VIII.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-chess-cyan hover:underline break-all"
          >
            Olympiad Book (English)
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Timeline",
    content: (
      <div className="space-y-3">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Registrations Open: 11th June 2024</li>
          <li>Registration Deadline: 9th July 2024</li>
          <li>
            ChallengeSphere Triumph (In-Person Awards Ceremony): In October
          </li>
        </ol>
        <p className="italic text-chess-muted/90">
          Exact dates will be announced in due course.
        </p>
      </div>
    ),
  },
  {
    title: "Judging Criteria",
    content: (
      <p>
        The person who obtains the highest mark for the exam will be the winner.
      </p>
    ),
  },
  {
    title: "Logistics",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-white mb-1">Registration Process</p>
          <p>
            Students can register by completing this form:{" "}
            <a
              href="https://challengesphere.ieee.lk/chipschallenge"
              target="_blank"
              rel="noreferrer"
              className="text-chess-cyan hover:underline break-all"
            >
              https://challengesphere.ieee.lk/chipschallenge
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-white mb-1">Location</p>
          <p>
            The final examination will be conducted in an examination hall at
            Curtin University Colombo.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white mb-1">Requirements</p>
          <p>
            Participants must provide proof of eligibility to be seated for the
            examination.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Awards",
    content: (
      <div className="space-y-3">
        <p>
          Certificates and awards will be given to the top 3 participants with
          the highest marks.
        </p>
        <p>
          The winner will be selected to attend the final competition in
          Armenia.
        </p>
      </div>
    ),
  },
];

const ChipsChallengeGuidelines = ({ accent = "#7469B6" }) => {
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
              Problem Statement — Sri Lanka Chips Challenge 2026
            </h3>
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

export default ChipsChallengeGuidelines;
