import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgImg from "../../assets/home/bg.webp";
import IEEELogo from "../../assets/logos/ieeesls.svg";
import MobileHeroLayers from "./MobileHeroLayers";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_QUERY = "(min-width: 1025px)";

function HeroCanvasFallback() {
  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center bg-transparent"
      aria-hidden
    >
      <div className="h-8 w-8 animate-pulse rounded-full border-2 border-white/20 border-t-light-blue2" />
    </div>
  );
}

const Home = () => {
  const pinContainerRef = useRef(null);
  const ieeeTextRef = useRef(null);
  const sphereTextRef = useRef(null);
  const logoRef = useRef(null);
  const globeMeshRef = useRef(null);
  const buildTimelineRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(DESKTOP_QUERY).matches
      : true
  );

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event) => setIsDesktop(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    let scrollTimeline;

    const buildTimeline = (globeMesh, desktop) => {
      scrollTimeline?.scrollTrigger?.kill();
      scrollTimeline?.kill();

      scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: "top top",
          end: desktop ? "+=200%" : "+=120%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinSpacing: true,
        },
      });

      if (globeMesh && desktop) {
        scrollTimeline.to(
          globeMesh.rotation,
          {
            z: Math.PI * 0.8,
            ease: "none",
            duration: 4.5,
          },
          0
        );
      }

      scrollTimeline
        .to(
          ieeeTextRef.current,
          {
            opacity: 0,
            y: -60,
            scale: 0.9,
            duration: 1.5,
            ease: "power2.out",
          },
          0
        )
        .to(
          sphereTextRef.current,
          {
            opacity: 0,
            scale: 0.85,
            y: 30,
            duration: 1.5,
            ease: "power2.inOut",
          },
          0.2
        )
        .to(
          logoRef.current,
          {
            opacity: 0,
            scale: 0.9,
            y: 50,
            duration: 1.2,
            ease: "power2.in",
          },
          0.35
        );

      ScrollTrigger.refresh();
    };

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: DESKTOP_QUERY,
        isMobile: "(max-width: 1024px)",
      },
      (context) => {
        const desktop = Boolean(context.conditions.isDesktop);
        buildTimelineRef.current = (mesh) => buildTimeline(mesh, desktop);
        buildTimeline(globeMeshRef.current, desktop);
      }
    );

    const refreshScroll = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refreshScroll);
    requestAnimationFrame(refreshScroll);

    return () => {
      buildTimelineRef.current = null;
      scrollTimeline?.scrollTrigger?.kill();
      scrollTimeline?.kill();
      mm.revert();
      window.removeEventListener("resize", refreshScroll);
    };
  }, []);

  const handleGlobeReady = (mesh) => {
    globeMeshRef.current = mesh;
    buildTimelineRef.current?.(mesh);
  };

  return (
    <section
      id="home"
      ref={pinContainerRef}
      className="relative z-0 isolate h-screen w-full max-h-screen overflow-hidden bg-[#020511]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img
        src={bgImg}
        className="absolute inset-0 h-full w-full object-cover object-center select-none"
        alt=""
        aria-hidden
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#01040d]/25 via-transparent to-[#01040d]/70" />

      {isDesktop ? (
        <Suspense fallback={<HeroCanvasFallback />}>
          <HeroCanvas globeRef={globeMeshRef} onGlobeReady={handleGlobeReady} />
        </Suspense>
      ) : (
        <MobileHeroLayers />
      )}
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-between py-10 sm:py-12 pointer-events-none select-none">
        <p
          ref={ieeeTextRef}
          className="mt-20 sm:mt-24 text-white text-6xl sm:text-7xl lg:text-8xl font-black tracking-[0.2em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]"
        >
          IEEE
        </p>

        <div
          ref={sphereTextRef}
          className="flex flex-col items-center px-4 text-center mt-8 sm:mt-12"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold uppercase tracking-wide drop-shadow-[0_5px_15px_rgba(0,0,0,0.85)]">
            Challenge Sphere
          </h1>
          <p className="mt-2 text-white text-3xl sm:text-4xl lg:text-6xl font-bold tracking-widest drop-shadow-[0_5px_10px_rgba(0,0,0,0.85)]">
            2026
          </p>
        </div>

        <div
          ref={logoRef}
          className="mb-3 sm:mb-4 flex w-full justify-center"
        >
          <img
            src={IEEELogo}
            alt="IEEE Sri Lanka Section"
            className="w-40 sm:w-44 lg:w-[200px] opacity-90 drop-shadow-[0_4px_10px_rgba(0,0,0,0.55)]"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
