import React from "react";
import "./Sponsors.css"; // Import the CSS styles for the sponsors section

const Sponsors = () => {
  return (
    <div className="sponsors-section bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h2 className="section-title text-3xl mb-6 text-center">Sponsors</h2>

      {/* An Initiative By */}
      <div className="sponsor-group mb-8 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">An Initiative By</h3>
        <img
          src="/Sponsors/ieee-srilanka.svg"
          alt="IEEE SL Section"
          className="sponsor-logo w-auto h-16"
        />
      </div>

      {/* In Collaboration with */}
      <div className="sponsor-group mb-8">
        <h3 className="text-xl font-bold mb-4">In Collaboration with</h3>
        <div className="collaboration-logos flex justify-center gap-8">
          <img
            src="/Sponsors/1/ieee_comsoc_sl_logo-removebg-preview.svg"
            alt="IEEE SL YP"
            className="sponsor-logo"
          />
          <img
            src="/Sponsors/1/sps_sl_logo-removebg-preview.svg"
            alt="IEEE IES SL"
            className="sponsor-logo"
          />
          <img
            src="/Sponsors/1/YPxAIDSL_Dark_nobg 1.svg"
            alt="IEEE SL ComSoc"
            className="sponsor-logo"
          />
          <img
            src="/Sponsors/1/YPxAIDSL_Dark_nobg 3.svg"
            alt="IEEE SL SPS"
            className="sponsor-logo"
          />
        </div>
      </div>

      {/* Platinum Sponsor */}
      <div className="sponsor-group mb-8 flex flex-col items-center hover:scale-x-125">
        <h3 className="text-xl font-bold mb-4">Platinum Sponsor</h3>
        <a
          href="https://www.synopsys.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Sponsors/Synopsys-SARA-Lockup-rgb-horizontal-white-ol 1.svg"
            alt="Synopsys"
            className="min-w-52"
          />
        </a>
      </div>

      {/* Funded by */}
      <div className="sponsor-group mb-8 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Funded by</h3>
        <img src="/Sponsors/funded.svg" alt="R10 EAC" className="w-36" />
      </div>

      {/* Venue Partner */}
      <div className="sponsor-group mb-8 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Venue Partner</h3>
        <img src="path_to_iit_logo.png" alt="IIT" className="sponsor-logo" />
      </div>

      {/* Knowledge Partner */}
      <div className="sponsor-group mb-8 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Knowledge Partner</h3>
        <img src="/Sponsors/skillturf.svg" alt="SkillSurf" className="w-64" />
      </div>

      {/* Student Branch Support */}
      <div className="sponsor-group mb-8">
        <h3 className="text-xl font-bold mb-4">Student Branch Support</h3>
        <div className="branch-logos flex justify-center gap-8">
          <img
            src="path_to_ies_sltc_logo.png"
            alt="IES Student Branch of SLTC"
            className="sponsor-logo"
          />
          <img
            src="path_to_ieee_iit_logo.png"
            alt="IEEE Student Branch of IIT"
            className="sponsor-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
