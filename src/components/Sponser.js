import React from "react";

const Sponsors = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-slate-100 to-blue-100 text-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl text-center font-bold mb-16">Sponsors</h2>

      {/* An Initiative By */}
      <div className="mb-8 flex flex-col items-center">
        <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-lg p-4 hover:scale-110 shadow-md">
          <h3 className="text-2xl text-yellow-200 font-bold mb-4">
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
        <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-lg p-4 hover:scale-110 shadow-md">
          <h3 className="text-2xl text-yellow-200 font-bold mb-4">
            In Collaboration with
          </h3>

          <div className="flex justify-center space-x-2">
            <img
              src="/Sponsors/1/YPxAIDSL_Dark_nobg 3.svg"
              alt="IEEE SL SPS"
              className="h-16"
            />

            {/* <img
              src="/Sponsors/1/ieee_comsoc_sl_logo-removebg-preview.svg"
              alt="IEEE SL YP"
              className="h-24"
            /> */}
            <img
              src="/Sponsors/1/sps_sl_logo-removebg-preview.svg"
              alt="IEEE IES SL"
              className="h-28 px-4"
            />
            <img src="/Sponsors/1/ies.png" alt="Ies" className="h-24" />
            <img
              src="/Sponsors/1/ieee_comsoc_sl_logo-removebg-preview.svg"
              alt="IEEE SL YP"
              className="h-24"
            />
            <img
              src="/Sponsors/1/YPxAIDSL_Dark_nobg 1.svg"
              alt="IEEE SL ComSoc"
              className="h-18"
            />
          </div>
        </div>
      </div>
      {/* Platinum Sponsor */}
      <div className="flex-1 mb-8">
        <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-lg p-4 hover:scale-110 shadow-md">
          <h3 className="text-2xl text-yellow-200 font-bold mb-4">
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
                className="h-16"
              />
            </a>
          </div>
        </div>
      </div>
      {/*  Funded by, Venue Partner ,knowledge partner */}
      <div className="flex mb-8 space-x-2">
        {/* Venue Partner */}
        <div className="flex-1">
          <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-lg  p-4 hover:scale-110 shadow-md">
            <h3 className="text-2xl text-yellow-200 font-bold mb-4">
              Venue Partner
            </h3>
            <div className="flex justify-center">
              <img
                src="/Sponsors/icons/IIT - white.png"
                alt="IIT"
                className="h-16 w-30"
              />
            </div>
          </div>
        </div>
        {/* Funded by */}
        <div className="flex-1 mr-4">
          <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-lg p-4 hover:scale-110 shadow-md">
            <h3 className="text-2xl text-yellow-200 font-bold mb-4">
              Funded by
            </h3>
            <div className="flex justify-center">
              <img src="/Sponsors/funded.svg" alt="R10 EAC" className="h-16" />
            </div>
          </div>
        </div>
        {/* Knowledge Partner */}
        <div className="flex-1">
          <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-lg p-4 hover:scale-110 shadow-md">
            <h3 className="text-2xl text-yellow-200 font-bold mb-4">
              Knowledge Partner
            </h3>
            <div className="flex justify-center">
              <img
                src="/Sponsors/skillturf.svg"
                alt="SkillSurf"
                className="h-16"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Student Branch Support */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-lg p-4 hover:scale-110 shadow-md">
          <h3 className="text-2xl text-yellow-200 font-bold mb-4">
            Student Branch Support
          </h3>
          <div className="flex justify-center">
            <img
              src="/Sponsors/icons/Copy of IES  logo White.png"
              alt="IES Student Branch of SLTC"
              width={300}
              height={200}
            />
            <img
              src="/Sponsors/icons/IMG_2283.PNG"
              alt="IEEE Student Branch of IIT"
              className="h-16 mt-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
