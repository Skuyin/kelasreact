import React from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Button
        className="bg-blue-500 text-2xl"
        title="ini ke facebook"
        link="https://facebook.com"
      />
    </div>
  );
};

export default Home;
