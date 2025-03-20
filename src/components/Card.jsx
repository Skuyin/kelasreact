import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div
      className="relative bg-white rounded-lg border-2 border-yellow-500 overflow-hidden w-full h-[500px] bg-cover bg-center flex flex-col justify-end p-4 text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" bg-black/50 p-2 rounded w-full">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      
    </div>
  );
};

export default Card;
