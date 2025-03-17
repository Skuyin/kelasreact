import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-indigo-800 p-4 rounded-lg shadow-lg">
      <ul className="flex justify-center space-x-6">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;