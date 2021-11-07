import React from "react";
import "../StyledComponents/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="country">
        <h3>Made with love by Team SkyWlker</h3>
      </div>
      <hr />
      <div className="prefooter">
        <h3>Carbon Neutral Since 2007</h3>
        <div className="footer-links">
          <div className="footer-link-left">
            <a href="">About</a>
            <a href="">Advertising</a>
            <a href="">Business</a>
            <a href="">How Search Works</a>
          </div>
          <div className="footer-link-right">
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Security</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
