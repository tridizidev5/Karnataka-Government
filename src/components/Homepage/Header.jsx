// src/components/Homepage/Header.jsx
import React, { useEffect, useState } from "react";
import "../../Styles/Homepage/header.css";

import CmImage from "../../assets/Homepage/Cm.png";
import MinisterImage from "../../assets/Homepage/Minister.png";
import TempleImage from "../../assets/Homepage/temple.png";
import { FaUser } from "react-icons/fa";

import Navbar from "./Navbar";

const Header = ({ lang, setLang }) => {
  const [dateTime, setDateTime] = useState("");

  // 🔍 text size scale (1 = normal)
  const [fontScale, setFontScale] = useState(1);

  // ⏰ date/time updater
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const locale = lang === "kn" ? "kn-IN" : "en-IN";

      const dateStr = now.toLocaleDateString(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      });

      const weekdayStr = now.toLocaleDateString(locale, {
        weekday: "short",
        timeZone: "Asia/Kolkata",
      });

      const timeStr = now.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });

      setDateTime(`${dateStr} | ${weekdayStr} | ${timeStr}`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, [lang]);

  // 🌐 Toggle language: kn <-> en
  const handleToggleLang = () => {
    setLang(lang === "kn" ? "en" : "kn");
  };

  // 🔠 Text size handlers (zoom out / zoom in)
  const changeFontScale = (delta) => {
    setFontScale((prev) => {
      const next = prev + delta;
      // limit between 0.8x and 1.4x
      if (next < 0.8) return 0.8;
      if (next > 1.4) return 1.4;
      return next;
    });
  };

  useEffect(() => {
    // apply scale to the whole page
    const root = document.documentElement;
    const previous = root.style.fontSize;

    root.style.fontSize = `${fontScale * 100}%`;

    // cleanup (optional)
    return () => {
      root.style.fontSize = previous;
    };
  }, [fontScale]);

  return (
    <header className="header">
      {/* 🔹 Top govt strip */}
      <div className="header-top">
        <div className="header-top__left">
          <span>{dateTime}</span>
        </div>

        <div className="header-top__center">
          <a href="#!" className="header-top__link">
            {lang === "kn" ? "ದೃಷ್ಟಿ ಬಾಧಿತರಿಗಾಗಿ" : "Visually Challenged"}
          </a>
          <span className="header-divider">|</span>

          <a href="#!" className="header-top__link">
            {lang === "kn" ? "ಸ್ಕ್ರೀನ್ ರೀಡರ್ ಪ್ರವೇಶ" : "Screen Reader Access"}
          </a>
          <span className="header-divider">|</span>

          <span className="header-top__link">
            {lang === "kn" ? "ಪಠ್ಯದ ಗಾತ್ರ" : "Text Size"}
          </span>

          {/* ➖ zoom out */}
          <button
            type="button"
            className="header-top__size-btn"
            onClick={() => changeFontScale(-0.1)}
            aria-label="Decrease text size"
          >
            -
          </button>

          {/* just a label for normal size */}
          <span className="header-top__size-a">A</span>

          {/* ➕ zoom in */}
          <button
            type="button"
            className="header-top__size-btn"
            onClick={() => changeFontScale(0.1)}
            aria-label="Increase text size"
          >
            +
          </button>

          {/* 🌐 Single Language Toggle Button */}
          <div className="header-top__lang-switch">
            <button className="lang-btn" onClick={handleToggleLang}>
              {lang === "kn" ? "English" : "ಕನ್ನಡ"}
            </button>
          </div>
        </div>

        <div className="header-top__right">
          <div className="header-top__theme-toggle">
            <div className="theme-half theme-half--light" />
            <div className="theme-half theme-half--dark" />
          </div>

          <button className="header-top__btn">
            {lang === "kn" ? "ಲಾಗಿನ್" : "Login"}
          </button>

          <span className="header-top__user-icon">
            <FaUser className="header-top__user-icon" />
          </span>
        </div>
      </div>

      {/* 🔹 CM banner + Logo + Minister */}
      <div className="header-main">
        <div className="header-main__leader header-main__leader--left">
          <img
            src={CmImage}
            alt={lang === "kn" ? "ಮಾನ್ಯ ಮುಖ್ಯಮಂತ್ರಿ" : "Hon'ble Chief Minister"}
          />
        </div>

        <div className="header-main__center">
          <img
            src={TempleImage}
            alt={
              lang === "kn"
                ? "ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್"
                : "Bengaluru Solid Waste Management Limited"
            }
            className="header-main__logo"
          />

          <div className="header-main__text">
            <h1 className="header-main__title">
              {lang === "kn"
                ? "ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್"
                : "Bengaluru Solid Waste Management Limited"}
            </h1>
            <p className="header-main__subtitle">
              {lang === "kn" ? "(ಕರ್ನಾಟಕ ಸರ್ಕಾರ)" : "(Government of Karnataka)"}
            </p>
          </div>
        </div>

        <div className="header-main__leader header-main__leader--right">
          <img
            src={MinisterImage}
            alt={lang === "kn" ? "ಉಪಮುಖ್ಯಮಂತ್ರಿ" : "Deputy Chief Minister"}
          />
        </div>
      </div>

      {/* Navbar gets lang too */}
      <Navbar lang={lang} />
    </header>
  );
};

export default Header;
