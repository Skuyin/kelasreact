import React from "react";

const CallToAction = ({ left, right, }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-10 py-16 md:py-18 ">
      <div className="flex-1 flex justify-end text-end items-end">{left}</div>
      <div className="flex-1 flex justify-start text-start items-start">{right}</div>
    </div>
  );
};

export default CallToAction;
