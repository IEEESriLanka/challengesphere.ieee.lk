import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { arduinoChallenge2026 } from "../../data/arduinoChallenge2026Data";

const guidelineSections = [
  {
    title: "About the Competition",
    content: (
      <div className="space-y-4">
        <p>{arduinoChallenge2026.overview.introduction}</p>
        <p>{arduinoChallenge2026.overview.recognition}</p>
        <p className="text-chess-cyan font-semibold italic">
          "{arduinoChallenge2026.motto}"
        </p>
      </div>
    ),
  },
  {
    title: "Theme & Objectives",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">
            Theme: {arduinoChallenge2026.theme}
          </h4>
          <p>{arduinoChallenge2026.themeDescription}</p>
        </div>
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">Example Ideas:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {arduinoChallenge2026.themeExamples.map((example, idx) => (
              <li key={idx}>{example}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">
            Competition Objectives:
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            {arduinoChallenge2026.objectives.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Eligibility & Requirements",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">Team Composition:</h4>
          <p>{arduinoChallenge2026.eligibility.teamSize}</p>
        </div>
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">
            Eligible Participants:
          </h4>
          {arduinoChallenge2026.eligibility.categories.map((cat, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-medium text-white">{cat.name}</p>
              <p className="text-chess-muted">{cat.details}</p>
            </div>
          ))}
        </div>
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">Important Rules:</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {arduinoChallenge2026.eligibility.rules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Project Guidelines",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">Main Focus:</h4>
          <p>{arduinoChallenge2026.projectGuidelines.mainFocus}</p>
        </div>
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">Key Requirements:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {arduinoChallenge2026.projectGuidelines.keyRequirements.map(
              (req, idx) => (
                <li key={idx}>{req}</li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">Allowed Components:</h4>
          <p className="text-sm mb-3">
            {arduinoChallenge2026.projectGuidelines.allowedComponents.description}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-chess-border rounded-lg">
              <thead>
                <tr className="border-b border-chess-border bg-chess-surface">
                  <th className="px-4 py-2 text-left text-chess-cyan">
                    Component
                  </th>
                  <th className="px-4 py-2 text-center text-chess-cyan">
                    Max Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {arduinoChallenge2026.projectGuidelines.allowedComponents.components.map(
                  (comp, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-chess-border ${
                        idx % 2 === 0 ? "bg-chess-surface/30" : ""
                      }`}
                    >
                      <td className="px-4 py-2">{comp.name}</td>
                      <td className="px-4 py-2 text-center">{comp.max}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Event Schedule",
    content: (
      <div className="space-y-4">
        {arduinoChallenge2026.structure.phases.map((phase, idx) => (
          <div key={idx}>
            <h4 className="text-chess-cyan font-semibold mb-3">{phase.name}</h4>
            <div className="space-y-3">
              {phase.events.map((event, eventIdx) => (
                <div
                  key={eventIdx}
                  className="border border-chess-border rounded-lg p-4 bg-chess-surface/20"
                >
                  <h5 className="text-white font-medium mb-2">{event.title}</h5>
                  {event.subtitle && (
                    <p className="text-sm text-chess-muted mb-2">
                      {event.subtitle}
                    </p>
                  )}
                  {event.date && (
                    <p className="text-sm">
                      <span className="text-chess-cyan font-medium">Date:</span>{" "}
                      {event.date}
                    </p>
                  )}
                  {event.time && (
                    <p className="text-sm">
                      <span className="text-chess-cyan font-medium">Time:</span>{" "}
                      {event.time}
                    </p>
                  )}
                  {event.platform && (
                    <p className="text-sm">
                      <span className="text-chess-cyan font-medium">Platform:</span>{" "}
                      {event.platform}
                    </p>
                  )}
                  {event.venue && (
                    <p className="text-sm">
                      <span className="text-chess-cyan font-medium">Venue:</span>{" "}
                      {event.venue}
                    </p>
                  )}
                  {event.morningSession && (
                    <div className="mt-2 pl-3 border-l border-chess-cyan/30">
                      <p className="text-sm">
                        <span className="text-chess-cyan font-medium">
                          Morning:
                        </span>{" "}
                        {event.morningSession.time} -{" "}
                        {event.morningSession.activities}
                      </p>
                    </div>
                  )}
                  {event.afternoonSession && (
                    <div className="mt-2 pl-3 border-l border-chess-cyan/30">
                      <p className="text-sm">
                        <span className="text-chess-cyan font-medium">
                          Afternoon:
                        </span>{" "}
                        {event.afternoonSession.time} -{" "}
                        {event.afternoonSession.activities}
                      </p>
                    </div>
                  )}
                  {event.workshops && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-chess-text mb-1">
                        Workshops:
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {event.workshops.map((workshop, wIdx) => (
                          <li key={wIdx} className="text-chess-muted">
                            {workshop}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Submission Requirements",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">Submission Deadline:</h4>
          <p className="text-lg font-bold text-chess-cyan">
            {arduinoChallenge2026.submission.deadline}
          </p>
        </div>
        <div>
          <h4 className="text-chess-cyan font-semibold mb-3">
            Each Team Must Submit:
          </h4>
          <div className="space-y-3">
            {arduinoChallenge2026.submission.requirements.map((req, idx) => (
              <div
                key={idx}
                className="border-l-2 border-chess-cyan/50 pl-4"
              >
                <p className="font-medium text-white">{req.item}</p>
                <p className="text-sm text-chess-muted">{req.details}</p>
                {req.includes && (
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {req.includes.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-chess-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-chess-cyan font-semibold mb-2">
            Final Deliverables:
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            {arduinoChallenge2026.finalDeliverables.map((item, idx) => (
              <li key={idx} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Judging Criteria",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-chess-muted mb-4">
          Teams will be evaluated based on the following criteria:
        </p>
        <div className="space-y-2">
          {arduinoChallenge2026.judgingCriteria.map((criterion, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-3 bg-chess-surface/30 rounded border border-chess-border/30"
            >
              <span className="text-white font-medium">
                {criterion.criteria}
              </span>
              <span className="text-chess-cyan font-bold text-lg">
                {criterion.weight}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Awards & Recognition",
    content: (
      <div className="space-y-4">
        {arduinoChallenge2026.awards.tiers.map((tier, idx) => (
          <div
            key={idx}
            className="border border-chess-cyan/30 rounded-lg p-4 bg-gradient-to-r from-chess-cyan/5 to-transparent"
          >
            <h4 className="text-chess-cyan font-semibold mb-2">
              {tier.position}
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              {tier.prizes.map((prize, prizeIdx) => (
                <li key={prizeIdx} className="text-sm">
                  {prize}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Global Opportunity - IEEE SSCS Arduino Contest",
    content: (
      <div className="space-y-4">
        <p>{arduinoChallenge2026.globalOpportunity.description}</p>
        <ul className="list-disc pl-5 space-y-2">
          {arduinoChallenge2026.globalOpportunity.benefits.map(
            (benefit, idx) => (
              <li key={idx}>{benefit}</li>
            )
          )}
        </ul>
        <p className="pt-2">
          <span className="text-chess-cyan font-semibold">Learn more:</span>{" "}
          <a
            href={arduinoChallenge2026.globalOpportunity.link}
            target="_blank"
            rel="noreferrer"
            className="text-chess-cyan hover:underline break-all"
          >
            {arduinoChallenge2026.globalOpportunity.link}
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Code of Conduct",
    content: (
      <div className="space-y-3">
        <p className="font-semibold">All participants must:</p>
        <ul className="list-disc pl-5 space-y-2">
          {arduinoChallenge2026.codeOfConduct.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
        <p className="pt-3 text-red-500 font-semibold">
          ⚠️ {arduinoChallenge2026.codeOfConduct.violation}
        </p>
      </div>
    ),
  },
  {
    title: "Important Notes",
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-2">
          {arduinoChallenge2026.importantNotes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </div>
    ),
  },
];

const ArduinoChallengeGuidelines = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleSection = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="w-full py-8 md:py-12 px-[5%] md:px-[10%]">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          SLAC 2026 Guidelines
        </h2>
        <h3 className="text-lg md:text-xl text-chess-cyan font-semibold mb-4">
          {arduinoChallenge2026.theme}
        </h3>
        <p className="text-chess-muted text-sm md:text-base">
          {arduinoChallenge2026.themeDescription}
        </p>
      </div>

      <div className="space-y-2">
        {guidelineSections.map((section, index) => (
          <div
            key={index}
            className="border border-chess-border rounded-lg overflow-hidden bg-chess-surface/20 hover:bg-chess-surface/30 transition-colors"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center p-4 md:p-6 hover:bg-chess-surface/40 transition-colors"
              aria-expanded={expandedIndex === index}
              aria-controls={`section-${index}`}
            >
              <h3 className="text-base md:text-lg font-semibold text-white text-left">
                {section.title}
              </h3>
              <FaChevronDown
                className={`text-chess-cyan transition-transform duration-300 flex-shrink-0 ml-4 ${
                  expandedIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedIndex === index && (
              <div
                id={`section-${index}`}
                className="px-4 md:px-6 pb-6 pt-0 border-t border-chess-border/30 text-chess-muted text-sm md:text-base"
              >
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-chess-cyan/10 to-chess-blue/10 border border-chess-cyan/30">
        <p className="text-center text-lg md:text-xl font-semibold text-white mb-2">
          "{arduinoChallenge2026.motto}"
        </p>
        <p className="text-center text-chess-muted">
          Organized by IEEE Industrial Electronics Society Student Branch Chapter of SLTC
          <br />
          In collaboration with IEEE Sri Lanka Challenge Sphere
        </p>
      </div>
    </div>
  );
};

export default ArduinoChallengeGuidelines;
