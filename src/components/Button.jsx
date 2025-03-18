import React from "react";
import { NavLink } from "react-router";

const Button = ({ title, link, className }) => {
  const isExternal = link.startsWith("http");

  return isExternal ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`w-fit px-6 py-3 bg-amber-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition ${className}`}
      href={link}
    >
      {title}
    </a>
  ) : (
    <NavLink
      to={link}
      className={`w-fit px-6 py-3 bg-amber-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition ${className}`}
    >
      {title}
    </NavLink>
  );
};


export default Button;
