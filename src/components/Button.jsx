import React from "react";

const Button = ({ title, link, className }) => {
  return (
    <a target="_blank" className={`${className}`} href={link}>
      {title}
    </a>
  );
};

export default Button;
