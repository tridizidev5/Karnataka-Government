// src/components/Homepage/HighlightsSection.jsx
import React from "react";
import "../../Styles/Homepage/highlightsSection.css";

import img1 from "../../assets/Homepage/img1.png";
import img2 from "../../assets/Homepage/img2.png";
import img3 from "../../assets/Homepage/img3.png";
import img4 from "../../assets/Homepage/img4.png";

import focus1 from "../../assets/Homepage/image 74965.png";
import focus2 from "../../assets/Homepage/image 74966.png";
import focus3 from "../../assets/Homepage/image 74967.png";
import focus4 from "../../assets/Homepage/image 74968.png";

const HighlightsSection = ({ lang }) => {
  const related =
    lang === "kn"
      ? [
          {
            title: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
            desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
            icon: img1,
          },
          {
            title: "ಆಹಾರ ಮತ್ತು ನಾಗರಿಕ ಸರಬರಾಜು ಇಲಾಖೆ",
            desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
            icon: img2,
          },
          {
            title: "ಬಿಬಿಎಂಪಿ ವೆಬ್‌ಸೈಟ್",
            desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
            icon: img3,
          },
          {
            title: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
            desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
            icon: img4,
          },
        ]
      : [
          {
            title: "Karnataka Government",
            desc: "Get the latest updates. Click ‘Know More’ to explore this section.",
            icon: img1,
          },
          {
            title: "Food and Civil Supplies",
            desc: "Get the latest updates. Click ‘Know More’ to explore this section.",
            icon: img2,
          },
          {
            title: "BBMP Website",
            desc: "Get the latest updates. Click ‘Know More’ to explore this section.",
            icon: img3,
          },
          {
            title: "Karnataka Government",
            desc: "Get the latest updates. Click ‘Know More’ to explore this section.",
            icon: img4,
          },
        ];

  const inFocus =
    lang === "kn"
      ? [
          {
            title: "ಮನೆ ಮನೆ ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹ",
            desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
            icon: focus1,
          },
          {
            title: "ಸ್ವಚ್ಚತಾ ಪ್ರಮಾಣ ಪತ್ರ",
            desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
            icon: focus2,
          },
          {
            title: "ಎಂ.ಎಸ್.ಡಬ್ಲ್ಯೂ ಪ್ರಕ್ರಿಯೆ",
            desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
            icon: focus3,
          },
          {
            title: "ಲ್ಯಾಂಡ್‌ಫಿಲ್",
            desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
            icon: focus4,
          },
        ]
      : [
          {
            title: "Door to Door Collection",
            desc: "Stay updated! Click ‘Know More’ for the latest insights in this section.",
            icon: focus1,
          },
          {
            title: "Swachh Certification",
            desc: "Stay updated! Click ‘Know More’ for the latest insights in this section.",
            icon: focus2,
          },
          {
            title: "Processing of MSW",
            desc: "Stay updated! Click ‘Know More’ for the latest insights in this section.",
            icon: focus3,
          },
          {
            title: "Land fill",
            desc: "Stay updated! Click ‘Know More’ for the latest insights in this section.",
            icon: focus4,
          },
        ];

  const HighlightCard = ({ item }) => (
    <div className="highlight-card">
      {item.icon && (
        <img src={item.icon} alt="" className="highlight-card__icon" />
      )}
      <div className="highlight-card__body">
        <div>
          <p className="highlight-card__title">{item.title}</p>
          <p className="highlight-card__desc">{item.desc}</p>
        </div>
        <button className="highlight-card__btn">
          {lang === "kn" ? "ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ →" : "Know More →"}
        </button>
      </div>
    </div>
  );

  const subText =
    lang === "kn"
      ? "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ."
      : "Stay updated! Click ‘Know More’ for the latest insights in this section.";

  return (
    <section className="highlights">
      <div className="container">
        {/* Related Websites */}
        <div className="highlights__block">
          <h4 className="highlights__heading">
            {lang === "kn" ? "ಸಂಬಂಧಿತ ವೆಬ್‌ಸೈಟ್‌ಗಳು" : "Related Websites"}
          </h4>
          <span className="highlights__subtext">{subText}</span>

          <div className="highlights__grid">
            {related.map((item) => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* In Focus */}
        <div className="highlights__block">
          <h4 className="highlights__heading">
            {lang === "kn" ? "ಗಮನಾರ್ಹ ವಿಭಾಗ" : "In Focus"}
          </h4>
          <span className="highlights__subtext">{subText}</span>

          <div className="highlights__grid">
            {inFocus.map((item) => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
