import React from "react";
import "../../styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <div className="footer_section">
          <h3 className="footer_title">Get Connected</h3>

          <p>
            Join the conversation on social, and stay connected with our latest
            events and partners around the world.
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
            <img src="" alt="" />
            <p>Ojay Street, Kreg Ave, Lagos, Nigeria</p>
          </div>
          <div className="footer_contact">
            <img src="" alt="" />
            <p>Ojay Street, Kreg Ave, Lagos, Nigeria</p>
          </div>
          <div className="footer_contact">
            <img src="" alt="" />
            <p>Ojay Street, Kreg Ave, Lagos, Nigeria</p>
          </div>
        </div>

        <div className="footer_section">
          <h3 className="footer_title">Stay Informed</h3>

          <p>
            Subscribe to our newsletter to receive updates of latest news and
            events.
          </p>

          <form className="footer_form">
            <input type="text" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
