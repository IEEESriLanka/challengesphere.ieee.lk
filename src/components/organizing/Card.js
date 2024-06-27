import React from "react";

const Card = ({ imageUrl, name, designation }) => {
  return (
    <div className="max-w-xs mx-auto bg-gradient-to-br from-gray-100 via-blue-300 to-gray-200 shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center mt-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-black shadow-blue-700 shadow-md">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white via-blue-300 to-transparent p-6 shadow-md mt-6">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-center text-gray-600">{designation}</p>
      </div>
    </div>
  );
};

export default Card;
