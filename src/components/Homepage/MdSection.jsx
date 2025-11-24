// src/components/Homepage/MdSection.jsx
import React from "react";
import "../../Styles/Homepage/mdSection.css";
import midImage from "../../assets/Homepage/midimage.png";

const MdSection = ({ lang }) => {
  return (
    <section className="md-section">
      <div className="container">
        <div className="md-card">
          <div className="md-card__text">
            <h3>
              {lang === "kn"
                ? "ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರ ಮನವಿ"
                : "Managing Director Desk"}
            </h3>

            <p>
              {lang === "kn"
                ? "ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್ (BSWML) ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅಧೀನದಲ್ಲಿರುವ ಕಂಪನಿಯಾಗಿದ್ದು, 22 ಮೇ 2021 ರಂದು ಸ್ಥಾಪನೆಯಾಗಿದೆ. ಈ ಸಂಸ್ಥೆ ಕರ್ನಾಟಕದ ಬೆಂಗಳೂರಿನ ನಗರದಲ್ಲಿ ನವೀನ ಮತ್ತು ಪರಿಸರ ಸ್ನೇಹಿ ಕ್ಷೇತ್ರದ ಆವಿಷ್ಕಾರಗಳಿಗೆ, ವಿಶೇಷವಾಗಿ ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ."
                : "Bengaluru Solid Waste Management Limited (BSWML) is a Government of Karnataka undertaking incorporated on 22nd May 2021, based in Bengaluru, Karnataka, India. It focuses on innovation in the environmental sector, specifically solid waste management."}
            </p>

            <p>
              {lang === "kn"
                ? "ಕಂಪನಿಯ ಅನುಮೋದಿತ ಮತ್ತು ಪಾವತಿಸಲ್ಪಟ್ಟ ಬಂಡವಾಳವು ₹0.50 ಮಿಲಿಯನ್ (ಭಾರತೀಯ ರೂಪಾಯಿ 5,00,000) ಆಗಿದೆ. ಇದರ ನೋಂದಾಯಿತ ಕಛೇರಿ ವಿಳಾಸ: #30/1, 1ನೇ ಮತ್ತು 2ನೇ ಮಹಡಿ, ಯುನಿವರ್ಸಲ್ ಬಿಲ್ಡಿಂಗ್, ತಿಮ್ಮಯ್ಯ ರಸ್ತೆ, ವಸಂತ ನಗರ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ – 560051. ಈ ಸಂಸ್ಥೆಯನ್ನು ಏಳು ನಿರ್ದೇಶಕರ ಮಂಡಳಿ ಮುನ್ನಡೆಸುತ್ತಿದೆ."
                : "The company has an authorized and paid-up capital of ₹0.50 million (INR 5,00,000). The registered office is located at #30/1, 1st and 2nd Floor, UNI Building, Thimmaiah Road, Vasanth Nagar, Bengaluru, Karnataka, 560051. The company is led by a board of seven directors."}
            </p>

            <button className="md-card__btn">
              {lang === "kn" ? "ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ" : "Know More"}
            </button>
          </div>

          <div className="md-card__photo">
            <img
              src={midImage}
              alt={lang === "kn" ? "ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರು" : "Managing Director"}
              className="md-card__photo-img"
            />
            <p className="md-card__name">
              {lang === "kn" ? "M ಮಹೇಶ್ವರ್ ರಾವ್, IAS" : "M Maheshwar Rao, IAS"}
            </p>
            <p className="md-card__role">
              {lang === "kn" ? "ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರು" : "Managing Director"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdSection;
