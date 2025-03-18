import React, { useState } from "react";
import { NavLink } from "react-router";

const menuLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Party Info",
    path: "/party",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-black text-xl font-bold">LushJelly</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <ul
          className={`md:flex space-x-6 md:static absolute top-16 left-0 w-full bg-[#FDFAF6] opa md:bg-transparent md:w-auto flex-col md:flex-row text-center transition-all duration-300 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {menuLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-bold block py-2"
                    : "text-black hover:text-yellow-200 block py-2"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
