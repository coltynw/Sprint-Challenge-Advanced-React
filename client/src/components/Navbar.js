import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (

    // creating the navbar to house the darkmode toggle
    <nav className="navbar">
      <h1>Women's Soccer Players</h1>
      <div className="dark-mode_toggle">
        <div
          data-testid="toggle"
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};
export default Navbar; 