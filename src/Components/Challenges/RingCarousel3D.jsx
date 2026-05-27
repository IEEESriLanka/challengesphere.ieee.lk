import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/* ============================================================================
   RingCarousel3D
   ----------------------------------------------------------------------------
   A draggable, snappable 3D ring of N badges arranged evenly around a circle.

   THE 3D MATH (understand this once and the rest of the file is trivial):

     - N items live at evenly-spaced static slots around a vertical (Y) axis.
       The angular step between adjacent items is:    step = 360° / N
       Item i sits at the static slot:                slot_i = i * step

     - The whole ring is rotated by an animated `angle`. Item i's effective
       facing angle relative to the camera becomes:   eff_i = angle + slot_i
       normalised into (-180°, +180°] so we always pick the short arc.

     - Each item's transform is:
           rotateY(slot_i)      // spin to its static slot
           translateZ(radius)   // push outward by the ring's radius
       The parent ring container is itself transformed as:
           rotateX(tilt)        // tilt the whole ring downward in 3D
           rotateY(angle)       // animated overall rotation

     - Per-item depth styling uses cos(eff) ∈ [-1, +1] as a depth proxy:
           cos = +1   →  dead-front  (max scale, full opacity, highest z-index)
           cos = -1   →  dead-back   (min scale, lowest opacity, lowest z-index)
       Linear-lerp from the (cos+1)/2 ∈ [0,1] depth value:
           scale   = SCALE_MIN + depth * (SCALE_MAX - SCALE_MIN)
           opacity = OP_MIN    + depth * (OP_MAX    - OP_MIN)

     - The focused item at any moment is the one minimising |normalise(eff_i)|.
       To bring item k to the front, the target overall angle is -k*step (mod
       360°), reached via the shortest signed arc from the current angle.
   ============================================================================ */

// Tuning knobs ---------------------------------------------------------------
const FRICTION             = 0.92;  // velocity damping per frame after a flick
const SNAP_STIFFNESS       = 0.14;  // spring strength when settling on a slot
const DRAG_SENSITIVITY     = 0.4;   // degrees rotated per pixel dragged
const CLICK_DRAG_THRESHOLD = 6;     // px — drags shorter than this still count as a click
const VELOCITY_REST        = 0.06;  // |v| below which inertia stops
const SNAP_REST            = 0.05;  // |angle delta| below which we lock the snap

// Depth-driven scale + opacity ranges
const SCALE_MIN = 0.65;
const SCALE_MAX = 1.10;
const OP_MIN    = 0.30;
const OP_MAX    = 1.00;

// Wrap any signed angular delta into (-180°, +180°] — picks the short arc.
const shortestAngle = (from, to) =>
  ((((to - from) % 360) + 540) % 360) - 180;

// Convert "#rrggbb" → "r,g,b" string for use inside rgba() expressions.
const hexToRgbTuple = (hex) => {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return "5,221,255"; // default cyan fallback
  return [m[1], m[2], m[3]].map((h) => parseInt(h, 16)).join(",");
};

const RingCarousel3D = ({
  items,                  // [{ img, label, key? }]
  radius = 320,           // ring radius in px (how far items are pushed out)
  badgeSize = 200,        // each badge's box size in px
  tilt = -12,             // ring's X-axis tilt in degrees (negative tips it back)
  accentColor = "#05ddff",
  onSelect,               // (item, index) => void — fires when focused badge is clicked
  className = "",
}) => {
  const N = items.length;
  const step = 360 / N;
  const accentRgb = useMemo(() => hexToRgbTuple(accentColor), [accentColor]);

  // Angle state lives in BOTH a ref (rAF reads/writes) and React state (re-render
  // trigger). A single-source-of-truth writer keeps them in lock-step.
  const angleRef = useRef(0);
  const [angle, setAngle] = useState(0);
  const writeAngle = useCallback((next) => {
    angleRef.current = next;
    setAngle(next);
  }, []);

  const [isDragging, setIsDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Imperative refs driving the rAF loop without re-creating effects.
  const draggingRef     = useRef(false);
  const velocityRef     = useRef(0);
  const animatingRef    = useRef(false);  // true while spring-snap is running
  const targetAngleRef  = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const recentDeltasRef = useRef([]);
  const rafRef          = useRef(null);

  // Closest item to the camera right now (smallest |normalised eff|).
  const focusedIndex = useMemo(() => {
    let best = 0;
    let bestDelta = Infinity;
    for (let i = 0; i < N; i += 1) {
      const eff = Math.abs(shortestAngle(0, angle + i * step));
      if (eff < bestDelta) {
        bestDelta = eff;
        best = i;
      }
    }
    return best;
  }, [angle, N, step]);

  // Build the target angle that brings item `index` to the front via the short arc.
  const snapToIndex = useCallback(
    (index) => {
      const current = angleRef.current;
      targetAngleRef.current =
        current + shortestAngle(current, -index * step);
      animatingRef.current = true;
    },
    [step]
  );

  // After a flick, snap to whichever slot is currently nearest the front.
  const snapToNearest = useCallback(() => {
    const current = angleRef.current;
    const k = Math.round(-current / step);
    targetAngleRef.current = current + shortestAngle(current, -k * step);
    animatingRef.current = true;
  }, [step]);

  // ---- Single rAF loop: inertia → spring snap ---------------------------
  useEffect(() => {
    const tick = () => {
      // While the user is actively dragging, the pointer handler owns `angle`.
      if (!draggingRef.current) {
        let a = angleRef.current;

        // (1) Inertial decay after a flick.
        if (Math.abs(velocityRef.current) > VELOCITY_REST) {
          a += velocityRef.current;
          velocityRef.current *= FRICTION;
          writeAngle(a);
        } else if (velocityRef.current !== 0) {
          velocityRef.current = 0;
          snapToNearest();
        }

        // (2) Spring-damped snap toward the target slot.
        if (animatingRef.current) {
          const diff = targetAngleRef.current - a;
          if (Math.abs(diff) < SNAP_REST) {
            animatingRef.current = false;
            writeAngle(targetAngleRef.current);
          } else {
            writeAngle(a + diff * SNAP_STIFFNESS);
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [snapToNearest, writeAngle]);

  // ---- Pointer (drag) handlers ------------------------------------------
  // We deliberately AVOID setPointerCapture here — capture would retarget the
  // subsequent `click` event to the stage in Chromium, and individual badges'
  // onClick handlers would never fire. Instead we listen on `window` while a
  // gesture is active, and tear those listeners down on release. Pointer
  // Events unify mouse, pen and touch — so this single path handles all
  // three input modalities for free.
  const handlePointerDown = (e) => {
    draggingRef.current = true;
    setIsDragging(true);
    velocityRef.current = 0;
    animatingRef.current = false;
    lastPointerXRef.current = e.clientX;
    lastPointerTRef.current = performance.now();
    dragDistanceRef.current = 0;
    recentDeltasRef.current = [];
  };

  useEffect(() => {
    if (!isDragging) return undefined;

    const onMove = (e) => {
      const dx = e.clientX - lastPointerXRef.current;
      lastPointerXRef.current = e.clientX;

      const now = performance.now();
      const dt = Math.max(now - lastPointerTRef.current, 1);
      lastPointerTRef.current = now;

      const da = dx * DRAG_SENSITIVITY;
      dragDistanceRef.current += Math.abs(dx);
      writeAngle(angleRef.current + da);

      // Slide-window of last ~6 moves so the release velocity is stable.
      recentDeltasRef.current.push({ dt, da });
      if (recentDeltasRef.current.length > 6) recentDeltasRef.current.shift();
    };

    const onUp = () => {
      draggingRef.current = false;
      setIsDragging(false);

      // Convert recent angular movement into degrees-per-frame velocity.
      const recent = recentDeltasRef.current;
      if (recent.length > 0) {
        const totalDa = recent.reduce((s, d) => s + d.da, 0);
        const totalDt = recent.reduce((s, d) => s + d.dt, 0);
        velocityRef.current = totalDt > 0 ? (totalDa / totalDt) * 16 : 0;
      }

      if (Math.abs(velocityRef.current) < 0.3) {
        velocityRef.current = 0;
        snapToNearest();
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [isDragging, snapToNearest, writeAngle]);

  // ---- Click vs drag --------------------------------------------------
  // If the pointer barely moved between down/up, treat the gesture as a click.
  // - Clicking the focused badge   → fire onSelect (navigate, etc.)
  // - Clicking any other badge     → smoothly rotate it to the front
  const handleBadgeClick = (index) => (e) => {
    if (dragDistanceRef.current > CLICK_DRAG_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (index === focusedIndex) {
      onSelect?.(items[index], index);
    } else {
      snapToIndex(index);
    }
  };

  // ---- Render -----------------------------------------------------------
  return (
    <div className={`relative w-full select-none ${className}`}>
      {/* Stage owns the perspective camera */}
      <div
        className="relative mx-auto"
        style={{
          width: "100%",
          height: badgeSize * 2.2,
          perspective: "1500px",
          perspectiveOrigin: "50% 38%",
          // pan-y lets the page scroll vertically over the ring while we
          // intercept horizontal drag for rotation.
          touchAction: "pan-y",
        }}
        onPointerDown={handlePointerDown}
      >
        {/* Soft floor glow under the focused badge */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            bottom: badgeSize * 0.25,
            width: badgeSize * 2,
            height: badgeSize * 0.5,
            background: `radial-gradient(ellipse at center, rgba(${accentRgb},0.35), transparent 65%)`,
            filter: "blur(22px)",
          }}
          aria-hidden
        />

        {/* The ring container — tilted, then rotated by `angle` */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: badgeSize,
            height: badgeSize,
            transformStyle: "preserve-3d",
            transform: `translate3d(-50%, -50%, 0) rotateX(${tilt}deg) rotateY(${angle}deg)`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {items.map((item, i) => {
            const slot = i * step;
            const eff = shortestAngle(0, angle + slot);
            const cosA = Math.cos((eff * Math.PI) / 180);
            const depth = (cosA + 1) / 2; // 0 (back) → 1 (front)
            const scale = SCALE_MIN + depth * (SCALE_MAX - SCALE_MIN);
            const opacity = OP_MIN + depth * (OP_MAX - OP_MIN);
            const isFocused = i === focusedIndex;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={item.key ?? item.label ?? i}
                onClick={handleBadgeClick(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="absolute inset-0 cursor-pointer"
                style={{
                  // Slot transform: spin to position, then push outward.
                  transform: `rotateY(${slot}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                  opacity,
                  // z-index follows depth so DOM hit-testing matches the
                  // visual stacking (front items intercept clicks first).
                  zIndex: Math.round((cosA + 1) * 100),
                  // Focused badge gets the cyan glow (hover-independent).
                  filter: isFocused
                    ? `drop-shadow(0 0 32px rgba(${accentRgb},0.6))`
                    : "none",
                  transition: isDragging
                    ? "none"
                    : "filter 0.3s ease, opacity 0.3s ease",
                }}
              >
                {/* Depth-driven scale wrapper */}
                <div
                  className="w-full h-full"
                  style={{
                    transform: `scale(${scale})`,
                    transition: isDragging
                      ? "none"
                      : "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  {/* Hover float — only the focused badge floats while hovered */}
                  <div
                    className={
                      isFocused && isHovered
                        ? "animate-float-y w-full h-full"
                        : "w-full h-full"
                    }
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      draggable={false}
                      className={`w-full h-full object-contain pointer-events-none transition-transform duration-300 ${
                        isFocused && isHovered ? "scale-110" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption + dot indicators */}
      <div className="text-center mt-4 sm:mt-6">
        <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          {items[focusedIndex]?.label}
        </p>
        <p className="text-chess-muted text-[10px] sm:text-xs mt-2 tracking-[0.35em] uppercase">
          {onSelect
            ? "Click the focused badge to explore"
            : "Drag, swipe or tap a badge"}
        </p>

        <div className="flex items-center justify-center gap-2 mt-4">
          {items.map((item, i) => (
            <button
              key={item.key ?? item.label ?? i}
              type="button"
              aria-label={`Show ${item.label}`}
              onClick={() => snapToIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === focusedIndex ? "2rem" : "0.375rem",
                background:
                  i === focusedIndex ? accentColor : "rgba(31,42,68,0.9)",
                boxShadow:
                  i === focusedIndex
                    ? `0 0 12px rgba(${accentRgb},0.7)`
                    : "none",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RingCarousel3D;
