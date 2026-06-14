import React, { useState } from "react";
import { Link } from "react-router-dom";

import MemoryLightbox from "../Memories/MemoryLightbox";
import { launchingCeremony, launchingCeremonyPhotos } from "../../data/launchingCeremonyData";

const LaunchingCeremonySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="space-y-8">
      <div className="chess-card p-6 sm:p-8 border border-chess-cyan/25">
        <p
          className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-2"
          style={{ color: launchingCeremony.accent }}
        >
          {launchingCeremony.year} — {launchingCeremony.event}
        </p>
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">
          {launchingCeremony.title}
        </h2>
        <p className="text-chess-muted text-sm sm:text-base mb-4">
          {launchingCeremony.subtitle} · {launchingCeremony.venue}
        </p>

        <blockquote className="border-l-4 border-chess-cyan pl-4 md:pl-6 py-1 italic text-white/90 text-base md:text-lg leading-relaxed mb-6">
          {launchingCeremony.quote}
        </blockquote>

        <div className="space-y-4">
          {launchingCeremony.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base md:text-lg text-chess-muted text-justify leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          {launchingCeremony.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm sm:text-base text-chess-muted"
            >
              <span className="text-chess-cyan mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6">
          <Link
            to={launchingCeremony.blogLink}
            className="text-chess-cyan font-semibold hover:underline text-sm sm:text-base"
          >
            Read the full launch story on our blog →
          </Link>
        </p>
      </div>

      {launchingCeremonyPhotos.length > 0 ? (
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 chess-heading-underline w-fit mx-auto">
            Launch Gallery
          </h3>
          <div className="columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
            {launchingCeremonyPhotos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                className="group relative w-full overflow-hidden rounded-xl border border-chess-border/60 bg-chess-surface/40 break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-chess-cyan"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full min-h-[140px] sm:min-h-[160px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-chess-muted py-8">
          Add photos to{" "}
          <code className="text-chess-cyan text-sm">
            src/assets/IEEEEduWeekLaunching/
          </code>
        </p>
      )}

      {lightboxIndex !== null && lightboxIndex >= 0 && (
        <MemoryLightbox
          images={launchingCeremonyPhotos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </div>
  );
};

export default LaunchingCeremonySection;
