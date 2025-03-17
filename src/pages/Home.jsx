import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button
        className="bg-blue-500 text-2xl"
        title="ini ke facebook"
        link="https://facebook.com"
      />
    </div>
  );
};

export default Home;
