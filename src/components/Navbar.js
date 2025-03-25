import React, { useState } from "react";
import { FaSearch, FaBell, FaGlobe, FaChevronDown } from "react-icons/fa";
import Logo from "../logo.svg";
import "../App.css"

const Header = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");

  const languages = [
    "English (US)",
    "French (FR)",
    "Spanish (ES)",
    "German (DE)",
    "Hindi (IN)",
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  return (
    <header className="header">
    <div className="logo">
      <img src={Logo} alt="S&OP Logo" className="logo-img" />
      <span className="logo-text">S&OP</span>
    </div>

    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search here..." className="search-input" />
    </div>

    <div className="header-right">
      {/* Language Switcher */}
      <div className="language-switch" onClick={() => setShowDropdown(!showDropdown)}>
        <FaGlobe className="language-icon" />
        <span>{selectedLanguage}</span>
        <FaChevronDown className="dropdown-icon" />
        {showDropdown && (
          <ul className="dropdown-menu">
            {languages.map((lang, index) => (
              <li key={index} onClick={() => handleLanguageChange(lang)}>
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Notifications */}
      <div className="notification">
        <FaBell className="notification-icon" />
        <span className="badge">2</span>
      </div>

      {/* User Profile */}
      <div className="user-profile">
        <img src={Logo} alt="User" className="profile-img" />
        <div className="user-info">
          <span className="user-name">Vishnu</span>
          <span className="user-role">Admin</span>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
