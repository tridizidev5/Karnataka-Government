import React from "react";
import "../../Styles/Homepage/hero.css";
import mainImage from "../../assets/Homepage/mainImage.png";

const HeroSection = ({ lang }) => {
  return (
    <section className="hero">
      <div
        className="hero__image"
        style={{
          backgroundImage: `linear-gradient(
              to right,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0.45) 35%,
              rgba(0, 0, 0, 0.15) 70%,
              rgba(0, 0, 0, 0) 100%
            ),
            url(${mainImage})`,
        }}
      >
        <div className="hero__overlay">
          <div className="hero__content">
            <h2>
              {lang === "kn"
                ? "ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ವಿಷಯವನ್ನು ಇರಿಸಲು ಇದು ಒಂದು ಉದಾಹರಣೆಯ ಪಠ್ಯ"
                : "Lorem ipsum content is the dummy text to place it on website"}
            </h2>
            <p>
              {lang === "kn"
                ? "ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಪಠ್ಯವನ್ನು ಇರಿಸಲಾಗಿದೆ"
                : "Lorem ipsum content is the dummy text to place it on website for the placement purpose"}
            </p>
            <button className="hero__btn">
              {lang === "kn" ? "ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ" : "Know More"}
            </button>
          </div>
        </div>
      </div>

      <div className="hero__ticker">
        <span>
          {lang === "kn"
            ? "ಯಾವುದೇ ಯೋಜನೆ / ಸೇವಾ ವಿತರಣೆ ಕುರಿತು ನಿಮ್ಮ ಅಹವಾಲನ್ನು (ಇದ್ದಲ್ಲಿ) ನೋಂದಾಯಿಸಲು 1902 ಗೆ ಕರೆ ಮಾಡಿ — ಕರ್ನಾಟಕ ಸರ್ಕಾರ"
            : "Call 1902 to register your grievance (if any) regarding any scheme / service delivery of Government of Karnataka"}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
