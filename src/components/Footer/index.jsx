import React from "react";
import "../../styles/Footer.scss";
import vectorImage from "../../assets/footerimage/vector.png";
import mail from "../../assets/footerimage/mail.svg";
import phone from "../../assets/footerimage/phone.svg";
export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <div className="footer_section">
          <h3 className="footer_title">Get Connected</h3>

          <p>
            Join the conversation on social, and stay connected with our <br />
            latest events and partners around the world.
          </p>

          <div className="footer_social">
            <a href="https://www.facebook.com/">
              <img src="" alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="" alt="" />
            </a>
            <a href="https://www.twitter.com/">
              <img src="" alt="" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src="" alt="" />
            </a>
          </div>
        </div>

        <div className="footer_section">
          <h3 className="footer_title">Contact</h3>

          <div className="footer_contact">
            <div className="img">
              <img src={vectorImage} alt="vector_image" />
            </div>
            <p>Kaduna State, Nigeria</p>
          </div>
          <div className="footer_contact">
            <div>
              <img src={mail} alt="mail" />
            </div>
            <p>apehbechaf@gmail.com</p>
          </div>
          <div className="footer_contact">
            <div>
              <img src={phone} alt="phone" />
            </div>
            <p>08091107380</p>
            <p>08065510723</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
