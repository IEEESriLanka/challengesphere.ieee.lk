import React, { useCallback, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const MemoryLightbox = ({ images, index, onClose, onChange }) => {
  const current = images[index];

  const goPrev = useCallback(() => {
    onChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onChange]);

  const goNext = useCallback(() => {
    onChange((index + 1) % images.length);
  }, [index, images.length, onChange]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [goNext, goPrev, onClose]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Photo preview"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-4 right-4 text-white/90 hover:text-chess-cyan text-3xl z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <RxCross2 />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-chess-cyan text-4xl z-10"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous photo"
          >
            <IoChevronBack />
          </button>
          <button
            type="button"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-chess-cyan text-4xl z-10"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next photo"
          >
            <IoChevronForward />
          </button>
        </>
      )}

      <figure
        className="relative max-w-6xl max-h-[85vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
        />
        <figcaption className="mt-3 text-chess-muted text-sm text-center">
          {current.album} · {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  );
};

export default MemoryLightbox;
