// src/components/Homepage/Navbar.jsx
import React, { useState } from "react";
import "../../Styles/Homepage/navbar.css";

const Navbar = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: "#about", kn: "ನಮ್ಮ ಬಗ್ಗೆ", en: "About Us" },
    { href: "#projects", kn: "ಯೋಜನೆಗಳು", en: "Projects" },
    { href: "#tenders", kn: "ಟೆಂಡರ್‌ಗಳು", en: "Tenders" },
    { href: "#downloads", kn: "ಡೌನ್‌ಲೋಡ್‌ಗಳು", en: "Downloads" },
    { href: "#media", kn: "ಮಾಧ್ಯಮ", en: "Media" },
    { href: "#rti", kn: "ಮಾಹಿತಿ ಹಕ್ಕು ವಿಭಾಗ", en: "RTI Dashboard" },
    { href: "#contact", kn: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆಗಳು", en: "Contact Numbers" },
  ];

  return (
    <>
      {/* Dark overlay for mobile when menu open */}
      <div
        className={`main-nav__overlay ${
          isOpen ? "main-nav__overlay--visible" : ""
        }`}
        onClick={closeMenu}
      />

      <nav className="main-nav">
        <div className="main-nav__pill">
          {/* ghost column for grid layout on desktop */}
          <div className="main-nav__ghost" />

          {/* DESKTOP / TABLET MENU */}
          <ul className="main-nav__list main-nav__list--desktop">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="main-nav__link"
                  onClick={closeMenu}
                >
                  {lang === "kn" ? link.kn : link.en}
                </a>
              </li>
            ))}
          </ul>

          {/* 3-lines round menu button (visible on all, mainly used on mobile) */}
          <button
            className="main-nav__menu-btn"
            aria-label="Open menu"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* MOBILE SIDE MENU */}
        <div
          className={`main-nav__mobile-menu ${
            isOpen ? "main-nav__mobile-menu--open" : ""
          }`}
        >
          <ul className="main-nav__list main-nav__list--mobile">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="main-nav__link"
                  onClick={closeMenu}
                >
                  {lang === "kn" ? link.kn : link.en}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
