import React from "react";

const ChallengeLeads = () => {
  return (
    <section id="challengeleads" className="relative">
      <div className="relative flex flex-col w-full items-center justify-center px-[5%] md:px-[10%] py-16 sm:py-24 cursor-default min-h-[50vh]">
        <p className="text-white font-bold text-[200%] sm:text-[250%] md:text-[350%] text-center chess-heading-underline">
          Challenge Leaders
        </p>
        <div className="mt-10 sm:mt-12 chess-card px-8 py-10 sm:px-12 sm:py-14 max-w-2xl w-full text-center">
          <p className="text-chess-cyan text-sm sm:text-base tracking-[0.35em] uppercase font-semibold mb-4">
            Coming Soon
          </p>
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Challenge Leaders will update soon
          </p>
          <p className="mt-4 text-chess-muted text-sm sm:text-base">
            Profiles for each track lead are being finalized and will appear
            here shortly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeLeads;
