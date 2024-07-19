import React from "react";

const mainCommittee = [
  {
    name: "Dr. Subodha Charles",
    role: "Chair, Educational Activities Committee, IEEE Sri Lanka Section",
    photo: "/OC/Speaker Photo 1.webp", // Replace with actual image URL
  },
  {
    name: "Shani Fernando",
    role: "Project Chair",
    photo: "/OC/Speaker Photo 2.webp", // Replace with actual image URL
  },
];

const viceCommittee = [
  {
    name: "Kulunu Chakshana",
    role: "Vice Chair, Finance and Partnership",
    photo: "/OC/Speaker Photo 5.webp", // Replace with actual image URL
  },
  {
    name: "Chamodi Indrajith",
    role: "Vice Chair, Program and Delivery",
    photo: "/OC/Speaker Photo 4.webp", // Replace with actual image URL
  },
  {
    name: "Kaveen Pasindumal",
    role: "Vice Chair, Public Visibility",
    photo: "/OC/Speaker Photo 6.webp", // Replace with actual image URL
  },
  {
    name: "Malkini Medhavi",
    role: "Secretary",
    photo: "/OC/Speaker Photo 3.webp", // Replace with actual image URL
  },
];

const members = [
  { name: "Thinuki Weerasinghe", photo: "/OC/Speaker Photo 7.webp" },
  { name: "Deshitha Gallage", photo: "/OC/Speaker Photo 8.webp" },
  { name: "Hiranya Hashini", photo: "/OC/Speaker Photo 9.webp" },
  { name: "Salina Sandinu", photo: "/OC/Speaker Photo 10.webp" },
  { name: "Anujaya Vidmal", photo: "/OC/Speaker Photo 11.webp" },
  { name: "Pasindu Nimesh", photo: "/OC/Speaker Photo 15.webp" },
  { name: "Akila Dhambure", photo: "/OC/Speaker Photo 16.webp" },
  { name: "Thisuri Peiris", photo: "/OC/Speaker Photo 12.webp" },
  { name: "Kavin Gunasekara", photo: "/OC/Speaker Photo 13.webp" },
  { name: "Chalana Gayan", photo: "/OC/Speaker Photo 14.webp" },
];

const Organizing = () => {
  return (
    <div className="flex bg-gradient-to-b from-blue-100 to-white flex-col items-center bg-blue-50 p-8 pt-16">
      <div className="mb-10 w-full">
        <h2 className="text-center text-5xl font-semibold font-sans text-blue-900 mb-5 pb-10">
          Organizing Committee
        </h2>
        <div className="flex justify-center flex-wrap gap-5">
          {mainCommittee.map((member, index) => (
            <div
              key={index}
              className=" border border-blue-300 rounded-lg p-4 text-center w-48 relative transition-transform duration-300 transform hover:scale-105 hover:bg-blue-200"
            >
              <div className="w-40 h-40 bg-blue-300 rounded-full mx-auto -mt-8 mb-1 relative border-4 border-white overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10 pt-8 w-full">
        <div className="flex justify-center flex-wrap gap-5">
          {viceCommittee.map((member, index) => (
            <div
              key={index}
              className=" border border-blue-300 rounded-lg p-4 text-center w-48 relative transition-transform duration-300 transform hover:scale-105 hover:bg-blue-200"
            >
              <div className="w-40 h-40 bg-blue-300 rounded-full mx-auto -mt-8 mb-4 relative border-4 border-white overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border-2 border-dashed border-blue-700 p-8">
        <h2 className="text-center text-xl text-blue-700 mb-8 pb-4">Members</h2>
        <div className="grid md:grid-cols-5 gap-5 grid-cols-1">
          {members.map((member, index) => (
            <div
              key={index}
              className=" border border-blue-300 rounded-lg p-4 text-center relative transition-transform duration-300 transform hover:scale-105 hover:bg-blue-200"
            >
              <div className="w-40 h-40 bg-blue-300 rounded-full mx-auto -mt-8 mb-4 relative border-4 border-white overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organizing;
