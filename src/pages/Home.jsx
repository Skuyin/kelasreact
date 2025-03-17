import React from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Package from "../components/Package";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/bg-home.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Hero />
      <Products />
      <Package />
    </div>
  );
};

export default Home;
