import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgImg from "../../assets/home/bg.webp";
import IEEELogo from "../../assets/logos/IEEE SL Logo - Horizontal - White.svg";

gsap.registerPlugin(ScrollTrigger);

const PARTICLE_COUNT = 14;

const Home = () => {
  const pinContainerRef = useRef(null);
  const bgRef = useRef(null);
  const auroraRef = useRef(null);
  const ieeeBlockRef = useRef(null);
  const sphereBlockRef = useRef(null);
  const bottomRef = useRef(null);

  // Pre-compute particle parameters so they stay stable across renders
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const left = Math.random() * 100;
        const drift = (Math.random() * 80 - 40).toFixed(1);
        const duration = 12 + Math.random() * 14;
        const delay = -(Math.random() * duration);
        const size = 2 + Math.random() * 4;
        return { id: i, left, drift, duration, delay, size };
      }),
    []
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !pinContainerRef.current) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: "top top",
          end: "+=160%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinSpacing: true,
        },
      });

      if (bgRef.current) {
        tl.to(
          bgRef.current,
          {
            scale: 1.15,
            ease: "none",
            duration: 4,
          },
          0
        );
      }

      if (auroraRef.current) {
        tl.to(
          auroraRef.current,
          {
            opacity: 0,
            scale: 1.3,
            ease: "power2.in",
            duration: 2,
          },
          0.2
        );
      }

      tl.to(
        ieeeBlockRef.current,
        {
          opacity: 0,
          y: -100,
          scale: 0.9,
          duration: 1.5,
          ease: "power2.out",
        },
        0
      )
        .to(
          sphereBlockRef.current,
          {
            opacity: 0,
            scale: 0.85,
            y: 60,
            duration: 1.5,
            ease: "power2.inOut",
          },
          0.2
        )
        .to(
          bottomRef.current,
          {
            opacity: 0,
            y: 80,
            duration: 1.2,
            ease: "power2.in",
          },
          0.35
        );

      ScrollTrigger.refresh();
    }, pinContainerRef);

    const refreshScroll = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refreshScroll);

    return () => {
      window.removeEventListener("resize", refreshScroll);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={pinContainerRef}
      className="relative z-10 isolate h-screen w-full max-h-screen overflow-hidden bg-chess-bg"
    >
      {/* Background image + grid + vignette + cyan halo behind king */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          ref={bgRef}
          src={bgImg}
          className="absolute inset-0 h-full w-full object-cover object-center select-none will-change-transform"
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div
          ref={auroraRef}
          className="absolute inset-0 hero-aurora pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#01040d]/50 via-transparent to-[#01040d]/90 pointer-events-none" />

        {/* Floating cyan particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <span
              key={p.id}
              className="hero-particle"
              style={{
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                "--drift": `${p.drift}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Foreground content — single-viewport hero */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-evenly pt-20 sm:pt-24 pb-4 sm:pb-6 pointer-events-none select-none"
        style={{ perspective: "1200px" }}
      >
        {/* Top block: eyebrow + IEEE */}
        <div
          ref={ieeeBlockRef}
          className="flex flex-col items-center px-4 text-center"
        >
          <span className="text-chess-cyan tracking-[0.4em] text-[10px] sm:text-xs font-semibold uppercase mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            IEEE Sri Lanka Section Presents
          </span>
          <h2 className="text-white font-black tracking-[0.15em] leading-none hero-text-glow whitespace-nowrap text-[clamp(3rem,11vw,10rem)]">
            IEEE
          </h2>
          <div className="mt-3 h-[2px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-chess-cyan to-transparent origin-center animate-line-grow" />
        </div>

        {/* Middle block: Challenge Sphere 2026 */}
        <div
          ref={sphereBlockRef}
          className="flex flex-col items-center px-4 text-center"
        >
          <h1 className="font-extrabold uppercase tracking-tight leading-none hero-text-gradient whitespace-nowrap text-[clamp(1.75rem,6.5vw,7rem)]">
            Challenge Sphere
          </h1>

          <div className="flex items-center gap-3 sm:gap-5 mt-3 sm:mt-4">
            <span className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-chess-cyan" />
            <p className="text-white font-bold tracking-[0.25em] hero-text-glow whitespace-nowrap text-[clamp(1.5rem,4.5vw,4.5rem)]">
              2026
            </p>
            <span className="h-[2px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-chess-cyan" />
          </div>
        </div>

        {/* Bottom block: IEEE SLS logo */}
        <div ref={bottomRef} className="flex flex-col items-center">
          <img
            src={IEEELogo}
            alt="IEEE Sri Lanka Section"
            className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
