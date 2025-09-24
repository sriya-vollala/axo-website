// NavBar.tsx

import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { Collapse } from "bootstrap";
import React from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarCollapseRef = useRef(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/philanthropy", label: "Philanthropy" },
    { to: "/exec-board", label: "Executive Board" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const brandTitle = "Navigation";

  const handleLinkClick = () => {
    // collapse the menu
    if (navbarCollapseRef.current) {
        const bsCollapse = new Collapse(navbarCollapseRef.current, {
            toggle: false
        });
        bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        {/* Mobile Title - static */}
        <span className="navbar-brand d-md-none">{brandTitle}</span>
        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                {/* onClick handler to each NavLink */}
                <NavLink className="nav-link" to={link.to} onClick={handleLinkClick}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;