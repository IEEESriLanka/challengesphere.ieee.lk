import React from "react";

const Sponsor = ({ name, imageUrl }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-center">
        <img
          src={imageUrl}
          alt={name}
          className="h-32 object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default Sponsor;
