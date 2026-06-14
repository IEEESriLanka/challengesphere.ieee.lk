import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import MemoryLightbox from "./MemoryLightbox";
import {
  getMemoryPreviewImages,
  memoryAlbums,
  memoryImages,
} from "../../data/memoriesData";

const OurMemories = ({
  showViewAll = true,
  compact = false,
  limit = null,
  grayscaleHover = false,
}) => {
  const [activeAlbum, setActiveAlbum] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isPreview = limit != null;

  const filtered = useMemo(() => {
    if (limit != null) {
      return getMemoryPreviewImages(limit);
    }
    let list =
      activeAlbum === "All"
        ? memoryImages
        : memoryImages.filter((img) => img.album === activeAlbum);
    return list;
  }, [activeAlbum, limit]);

  return (
    <section id="memories" className="relative">
      <div
        className={`relative flex flex-col w-full px-[5%] md:px-[10%] cursor-default ${
          compact ? "py-12 sm:py-16" : "py-16 sm:py-20"
        }`}
      >
        <p className="text-white font-bold text-[200%] sm:text-[250%] lg:text-[350%] text-center chess-heading-underline self-center">
          Our Memories
        </p>
        <p className="text-center text-chess-muted text-sm sm:text-base mt-4 mb-8 max-w-2xl mx-auto">
          Snapshots from Challenge Sphere events — the 2026 launch at IEEE
          Education Week, award nights, elevate sessions, and moments across the
          arena.
        </p>

        {memoryAlbums.length > 1 && !isPreview && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {["All", ...memoryAlbums].map((album) => (
              <button
                key={album}
                type="button"
                onClick={() => setActiveAlbum(album)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                  activeAlbum === album
                    ? "bg-chess-cyan/15 border-chess-cyan text-chess-cyan shadow-chess-glow"
                    : "border-chess-border text-chess-muted hover:border-chess-cyan/50 hover:text-white"
                }`}
              >
                {album}
              </button>
            ))}
          </div>
        )}

        <div
          className={
            isPreview
              ? "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
              : "columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
          }
        >
          {filtered.map((photo) => (
            <button
              key={photo.id}
              type="button"
              className={`group relative w-full overflow-hidden rounded-xl border border-chess-border/60 bg-chess-surface/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-chess-cyan ${
                isPreview ? "" : "break-inside-avoid"
              }`}
              onClick={() =>
                setLightboxIndex(filtered.findIndex((m) => m.id === photo.id))
              }
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`w-full h-full min-h-[140px] sm:min-h-[160px] object-cover transition-all duration-500 group-hover:scale-105 ${
                  grayscaleHover
                    ? "grayscale group-hover:grayscale-0"
                    : ""
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01040d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium">
                  {photo.album}
                </span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-chess-muted py-12">
            No photos yet — add images to{" "}
            <code className="text-chess-cyan text-sm">src/assets/memories/</code>
          </p>
        )}

        {showViewAll && (
          <p className="text-center mt-10">
            <Link
              to="/highlights/memories"
              className="text-chess-cyan font-semibold text-base sm:text-lg hover:text-chess-cyan-soft hover:underline"
            >
              View full gallery →
            </Link>
          </p>
        )}
      </div>

      {lightboxIndex !== null && lightboxIndex >= 0 && (
        <MemoryLightbox
          images={isPreview ? filtered : memoryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </section>
  );
};

export default OurMemories;
