import React from "react";

/**
 * Shared inner-page atmosphere matching the landing hero theme:
 * dark base, subtle grid, soft cyan glow — without the hero image.
 */
const SiteBackground = ({ children, className = "" }) => {
  return (
    <div className={`chess-section-shell w-full ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SiteBackground;
