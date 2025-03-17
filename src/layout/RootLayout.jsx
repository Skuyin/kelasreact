import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
