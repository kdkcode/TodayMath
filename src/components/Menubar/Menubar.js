import React from 'react';
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menubar4.css";

function Menubar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  const handleMenuButtonClick = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="menu-bar">
     

      <div
        className={`menu-button ${isDropdownOpen ? "open" : ""}`}
        onClick={handleMenuButtonClick}
      >
        <div className="menu-button-line" />
        <div className="menu-button-line" />
        <div className="menu-button-line" />
      </div>
      <div id="todaymath">
        <h1>오늘수학</h1>
      </div>
      <div ref={dropdownRef} className={`menu-items-container ${isDropdownOpen ? "open" : ""}`}>
	  <div id="logo">
    <Link to="/" onClick={handleMenuItemClick}><img id="logoimg" src="/img/logo6.png" alt="오늘수학 x 에반이즈"></img></Link>
    </div>
      <div className="menu-item-group">
        <div className="menu-item">
          <Link to="/" onClick={handleMenuItemClick}>
            Home
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/philoedu" onClick={handleMenuItemClick}>
            교육철학
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/blog" onClick={handleMenuItemClick}>
            블로그
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/send-email" onClick={handleMenuItemClick}>
            수업문의
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/plan" onClick={handleMenuItemClick}>
            수업일정표
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/map" onClick={handleMenuItemClick}>
            오시는길
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
