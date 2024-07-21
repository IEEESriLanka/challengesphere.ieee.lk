import React from "react";

const Sponsors = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-slate-100 to-blue-100 text-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      {/* An Initiative By */}
      <div className="mb-8 flex flex-col items-center">
        <div className="bg-gradient-to-b from-blue-950 via-black to-blue-900 rounded-lg p-4 hover:scale-110 shadow-md">
          <h3 className="text-3xl text-blue-400 shadow-md shadow-blue-700 rounded-lg  font-bold mb-4">
            An Initiative By
          </h3>
          <div className="flex justify-center">
            <img
              src="/logo-transparent 3.svg"
              alt="IEEE SL Section"
              className="h-16"
            />
          </div>
        </div>
      </div>

      {/* In Collaboration with */}
      <div className="mb-8">
        <div className="bg-gradient-to-b from-blue-950 via-black to-blue-900 rounded-lg p-4 hover:scale-110 shadow-md">
          <h3 className="text-3xl text-blue-400 shadow-md shadow-blue-700 rounded-lg  font-bold mb-4">
            In Collaboration with
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4  sm:space-y-3 sm:space-x-4">
            <img
              src="/Sponsors/1/YPxAIDSL_Dark_nobg 3.svg"
              alt="IEEE SL SPS"
              className="h-14  mr-6 sm:h-14 sm:mr-4"
            />
            <img
              src="/Sponsors/1/sps_sl_logo-removebg-preview.svg"
              alt="IEEE IES SL"
              className="h-20 sm:h-24 sm:px-8"
            />
            <img src="/Sponsors/1/ies.png" alt="Ies" className="h-16 sm:h-20" />
            <img
              src="/Sponsors/1/ieee_comsoc_sl_logo-removebg-preview.svg"
              alt="IEEE SL YP"
              className="h-12 sm:h-16"
            />
            <img
              src="/Sponsors/1/YPxAIDSL_Dark_nobg 1.svg"
              alt="IEEE SL ComSoc"
              className="h-8  sm:h-12 sm:mr-6 mr-6 "
            />
          </div>
        </div>
      </div>

      {/* Platinum Sponsor */}
      <div className="flex flex-col items-center justify-center space-y-8 pb-6">
        {/* Platinum Sponsor */}
        <div className="w-full max-w-xs">
          <div className="bg-gradient-to-b from-blue-950 via-black to-blue-900 rounded-lg p-4 hover:scale-110 shadow-md">
            <h3 className="text-3xl text-blue-400 shadow-md shadow-blue-700 rounded-lg  font-bold mb-4 text-center">
              Platinum Sponsor
            </h3>
            <div className="flex justify-center">
              <a
                href="https://www.synopsys.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Sponsors/Synopsys-SARA-Lockup-rgb-horizontal-white-ol 1.svg"
                  alt="Synopsys"
                  className="h-16 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  Funded by, Venue Partner ,knowledge partner */}
      <div className="flex flex-col items-center justify-center mb-8 space-y-8">
        {/* Venue Partner */}
        <div className="w-full max-w-xs">
          <div className="bg-gradient-to-b from-blue-950 via-black to-blue-900 rounded-lg p-4 hover:scale-110 shadow-md">
            <h3 className="text-3xl text-blue-400 shadow-md shadow-blue-700 rounded-lg  font-bold mb-4 text-center">
              Venue Partner
            </h3>
            <div className="flex justify-center">
              <img
                src="/Sponsors/icons/IIT - white.png"
                alt="IIT"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
        {/* Funded by */}
        <div className="w-full max-w-xs">
          <div className="bg-gradient-to-b from-blue-950 via-black to-blue-900 rounded-lg p-4 hover:scale-110 shadow-md">
            <h3 className="text-3xl text-blue-400 shadow-md shadow-blue-700 rounded-lg  font-bold mb-4 text-center">
              Funded by
            </h3>
            <div className="flex justify-center">
              <img
                src="/Sponsors/funded.svg"
                alt="R10 EAC"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
        {/* Knowledge Partner */}
        <div className="w-full max-w-xs">
          <div className="bg-gradient-to-b from-blue-950 via-black to-blue-900 rounded-lg p-4 hover:scale-110 shadow-md">
            <h3 className="text-3xl text-blue-400 shadow-md shadow-blue-700 rounded-lg  font-bold mb-4 text-center">
              Knowledge Partner
            </h3>
            <div className="flex justify-center">
              <img
                src="/Sponsors/skillturf.svg"
                alt="SkillSurf"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Student Branch Support */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-b from-blue-950 via-black to-blue-900 rounded-lg p-4 hover:scale-110 shadow-md">
          <h3 className="text-3xl text-blue-400 shadow-md shadow-blue-700 rounded-lg  font-bold mb-4">
            Student Branch Support
          </h3>
          <div className="flex flex-col">
            <img
              src="/Sponsors/icons/Copy of IES  logo White.png"
              alt="IES Student Branch of SLTC"
              className=" md:h-32"
            />
            <img
              src="/Sponsors/icons/IMG_2283.PNG"
              alt="IEEE Student Branch of IIT"
              className="h-8 md:h-14 md:mt-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
