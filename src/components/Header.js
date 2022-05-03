import React from 'react';
import './Header.css';
import juksLogo from '../assets/header/juks-logo.jpg';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={juksLogo} className="juksLogo" alt="" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerAction">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="" />
        </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  );
}

export default Header;
