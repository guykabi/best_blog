import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import MainTitle from "./MainTitle";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="w-full p-4 mb-4 flex flex-row justify-between items-center px-10 shadow-lg">
        <MainTitle text="Best Blog" path="/" size="xl" />
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
