import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between text-white px-6 md:px-12">
      {/* Text Content */}
      <div className="flex-1 items-center justify-center lg:ml-20 my-2 md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          JellyLand
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          Nikmati berbagai varian jelly segar dengan rasa yang menggugah selera.
          Temukan favoritmu sekarang!
        </p>
        <button className="mt-6 px-6 py-3 bg-amber-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition">
          Jelajahi Sekarang
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src="./hero.jpg"
          alt="JellyLand"
          className="w-full md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
