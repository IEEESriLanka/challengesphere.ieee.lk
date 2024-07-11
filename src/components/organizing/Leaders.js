import React from "react";

const challenges = [
  {
    name: "Circuits Challenge",
    color: "bg-green-100",
    logo: "/challanges/Circuits.svg", // Replace with actual logo URL
    leaders: [
      {
        name: "Dr. Subhoda Charles",
        role: "Chair, Educational Activities Committee IEEE Sri Lanka Section",
        photo: "/Leaders/Speaker Photo 15.png", // Replace with actual image URL
      },
      {
        name: "Shani Fernando",
        role: "Member, Educational Activities Committee IEEE Sri Lanka Section",
        photo: "/OC/Speaker Photo 2.png", // Replace with actual image URL
      },
    ],
  },
  {
    name: "Arduino Challenge",
    color: "bg-red-100",
    logo: "/challanges/Arduino.svg", // Replace with actual logo URL
    leaders: [
      {
        name: "Kavinga Ekanayake",
        role: "Chair, IEEE Industrial Electronics Society Sri Lanka Chapter",
        photo: "/Leaders/Speaker Photo 16.png", // Replace with actual image URL
      },
      {
        name: "Tharushi Liyanage",
        role: "Chair, IEEE Industrial Electronics Society Student Branch Chapter of SLTC",
        photo: "/Leaders/Speaker Photo 20.png", // Replace with actual image URL
      },
    ],
  },
  {
    name: "Signal Processing for Communications Challenge",
    color: "bg-blue-100",
    logo: "/challanges/Signal.svg", // Replace with actual logo URL
    leaders: [
      {
        name: "Yasitha Wickramage",
        role: "Chair, IEEE Communications Society Sri Lanka Chapter",
        photo: "/Leaders/Speaker Photo 18.png", // Replace with actual image URL
      },
      {
        name: "Dr. Samiru Gayan",
        role: "Chair, IEEE Sri Lanka Section Signal Processing Society Chapter",
        photo: "/Leaders/Speaker Photo 19.png", // Replace with actual image URL
      },
    ],
  },
  {
    name: "Artificial Intelligence Challenge",
    color: "bg-yellow-100",
    logo: "/challanges/AI.svg", // Replace with actual logo URL
    leaders: [
      {
        name: "Sanuda Kannangara",
        role: "Chair, IEEE AI-Driven Sri Lanka",
        photo: "/Leaders/Speaker Photo 17.png", // Replace with actual image URL
      },
      {
        name: "Sasanka Premaratne",
        role: "Program Vice Chairperson AIDSL, Event Chair AICSL",
        photo: "/challanges/Speaker Photo 17.png", // Replace with actual image URL
      },
    ],
  },
  {
    name: "Chips Challenge",
    color: "bg-gray-100",
    logo: "/challanges/Chips.svg", // Replace with actual logo URL
    companyLogo: "/OC/SynopsysLogo.png", // Replace with actual company logo URL
    poweredByLogo: "/OC/PoweredByLogo.png", // Replace with actual powered by logo URL
    leaders: [
      {
        name: "Dr. Achintha Kondarage",
        role: "Synopsys",
        photo: "/Leaders/Speaker Photo 21.png", // Replace with actual image URL
      },
    ],
  },
];

const Leaders = () => {
  return (
    <div className="  bg-gradient-to-b  from-white to-blue-50 p-12 pb-6">
      <h2 className="text-center text-5xl font-semibold font-sans text-blue-900 mb-10 mt-7">
        Challenge Leaders
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className={`border-2 border-dashed border-blue-700 p-4 relative rounded-lg shadow-lg`}
          >
            <div className="flex items-center justify-centre mb-8">
              <img
                src={challenge.logo}
                alt={`${challenge.name} Logo`}
                className="h-16"
              />
              <h3 className="text-xl font-semibold text-blue-800">
                {challenge.name}
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {challenge.leaders.map((leader, index) => (
                <div
                  key={index}
                  className="border border-blue-300 rounded-lg p-2 mb-5 text-center w-44 relative transition-transform duration-300 transform hover:scale-105 hover:bg-blue-200"
                >
                  <div className="w-40 h-40 bg-blue-300 rounded-full mx-auto -mt-8 mb-4 relative border-4 border-white overflow-hidden">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold">{leader.name}</h3>
                    <p className="text-xs">{leader.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaders;
