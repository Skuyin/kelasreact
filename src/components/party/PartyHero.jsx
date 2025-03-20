import React from "react";

const PartyHero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-80 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1678310591223-699eeefda32f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0  bg-black/50"></div>
      <div className="relative z-10 text-center text-white p-5">
        <h1 className="text-5xl font-bold mb-4">Welcome to LushJelly</h1>
        <p className="text-lg mb-6">Experience the best party vibes with us!</p>
        <a
          href="#"
          className="px-6 py-3 bg-amber-400 text-white font-semibold rounded-lg hover:bg-amber-500"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default PartyHero;
