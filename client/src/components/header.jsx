import React, { useState } from "react";
import './Header.css';
import Button from "./button";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/aa/TED_three_letter_logo.svg"
          alt="Logo"
          className="logo-icon"
        />
        <h2>xVIT</h2>
      </div>
      <div className="header-right">
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <Button text="Join" />
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  );
}

export default Header;
