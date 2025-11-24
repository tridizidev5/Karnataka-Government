import React from "react";
import "../../Styles/Homepage/footerSection.css";

import img1 from "../../assets/Homepage/image 74969.png";
import img2 from "../../assets/Homepage/image 74970.png";
import img3 from "../../assets/Homepage/image 74971.png";
import img4 from "../../assets/Homepage/image 74972.png";
import qrImage from "../../assets/Homepage/image 74973.png";
import templeImage from "../../assets/Homepage/temple.png";

const FooterSection = ({ lang }) => {
  const quickLinks =
    lang === "kn"
      ? [
          { title: "ಸರ್ಕಾರದ ರಜೆಗಳು", icon: img1 },
          { title: "ಇ-ಸೇವಾ ವೆಬ್‌ಸೈಟ್‌ಗಳು", icon: img2 },
          { title: "ಸರ್ಕಾರದ ಅಪ್‌ಗಳು", icon: img3 },
          { title: "ಇ-ಸೇವಾ ವೆಬ್‌ಸೈಟ್‌ಗಳು", icon: img4 },
        ]
      : [
          { title: "Government Holidays", icon: img1 },
          { title: "e-Service Websites", icon: img2 },
          { title: "Government Apps", icon: img3 },
          { title: "e-Service Websites", icon: img4 },
        ];

  return (
    <footer className="footer">
      <section className="quick-links">
        <div className="container quick-links__outer">
          <div className="quick-links__grid">
            {quickLinks.map((item, index) => (
              <div key={index} className="quick-link-card">
                <img src={item.icon} alt={item.title} className="quick-link-icon" />
                <p className="quick-link-text">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="footer-main">
        <div className="container">
          <div className="footer-main__card">
            <div className="footer-main__inner">
              {/* 1 */}
              <div className="footer-main__col footer-main__col--disclaimer">
                <h5 className="footer-heading">
                  {lang === "kn" ? "ಪ್ರಕಟನೆ" : "Disclaimer"}
                </h5>
                <p className="footer-disclaimer-text">
                  {lang === "kn"
                    ? "ದಯವಿಟ್ಟು ಗಮನಿಸಿ: ಈ ಪುಟವು ಸರ್ಕಾರದ ಇಲಾಖೆಗಳ ವೆಬ್‌ಸೈಟ್‌ಗಳಿಗೆ ಲಿಂಕ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ವಿಷಯವನ್ನು ಸಂಬಂಧಿತ ಸಂಸ್ಥೆಗಳು ನಿರ್ವಹಿಸುತ್ತವೆ."
                    : "Please note: This page provides links to the websites of Govt. Ministries / Departments / Organisations. The content is owned by respective organisations."}
                </p>
              </div>

              {/* 2 */}
              <div className="footer-main__col">
                <h5 className="footer-heading">
                  {lang === "kn" ? "ವೆಬ್‌ಸೈಟ್ ನೀತಿಗಳು ಮತ್ತು ಮಾರ್ಗಸೂಚಿಗಳು" : "Website Policies & Guidelines"}
                </h5>
                <ul>
                  <li>{lang === "kn" ? "ಪ್ರತಿನಿಧಿ ಹಕ್ಕು ನೀತಿ" : "Copyright Policy"}</li>
                  <li>{lang === "kn" ? "ಹೈಪರ್ ಲಿಂಕಿಂಗ್ ನೀತಿ" : "Hyperlinking Policy"}</li>
                  <li>{lang === "kn" ? "ಭದ್ರತಾ ನೀತಿ" : "Security Policy"}</li>
                  <li>{lang === "kn" ? "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು" : "Terms & Conditions"}</li>
                  <li>{lang === "kn" ? "ಗೌಪ್ಯತಾ ನೀತಿ" : "Privacy Policy"}</li>
                </ul>
              </div>

              {/* 3 */}
              <div className="footer-main__col">
                <h5 className="footer-heading">
                  {lang === "kn" ? "ಪ್ರಾಪ್ಯ ಸಂಪನ್ಮೂಲಗಳು" : "Accessibility Resources"}
                </h5>
                <ul>
                  <li>{lang === "kn" ? "ಸೈಟ್ ನಕ್ಷೆ" : "Sitemap"}</li>
                  <li>{lang === "kn" ? "ಸಹಾಯ" : "Help"}</li>
                  <li>{lang === "kn" ? "ಸ್ಕ್ರೀನ್ ರೀಡರ್ ಪ್ರವೇಶ" : "Screen Reader Access"}</li>
                  <li>{lang === "kn" ? "ಮಾರ್ಗಸೂಚಿಗಳು" : "Guidelines"}</li>
                </ul>
              </div>

              {/* 4 */}
              <div className="footer-main__col footer-main__brand">
                <div className="footer-brand__top">
                  <img src={qrImage} alt="qr" className="footer-brand__qr" />

                  <div className="footer-brand__right">
                    <img src={templeImage} alt="logo" className="footer-brand__temple" />
                    <p className="footer-brand__org">
                      {lang === "kn"
                        ? "ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್ (ಕರ್ನಾಟಕ ಸರ್ಕಾರ)"
                        : "Bengaluru Solid Waste Management Limited (Government of Karnataka)"}
                    </p>
                  </div>
                </div>

                <p className="footer-brand__owned">
                  {lang === "kn"
                    ? "ವಿಷಯದ ಹಕ್ಕು ಮತ್ತು ನಿರ್ವಹಣೆ: ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್ (ಕರ್ನಾಟಕ ಸರ್ಕಾರ)"
                    : "Content owned and maintained by Bengaluru Solid Waste Management Limited (Government of Karnataka)"}
                </p>

                <p className="footer-brand__credits">
                  {lang === "kn"
                    ? "ವಿನ್ಯಾಸ, ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಹೋಸ್ಟಿಂಗ್: ಇ-ಆಡಳಿತ ಕೇಂದ್ರ – ಕರ್ನಾಟಕ ಸರ್ಕಾರ © 2025"
                    : "Designed, Developed & Hosted by: Centre for e-Governance – Government of Karnataka © 2025"}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
