import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "../../styles/BurgerMenu.scss";

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <div>
      <Hamburger
        className="hamburger_button"
        toggled={isOpen}
        toggle={setOpen}
        direction="right"
        duration={0.8}
        color="#fbcc32"
      />

      <div className={`panel ${isOpen ? "open" : "close"}`}>
        <ul>
          <li>
            <Link
              activeclass="active"
              smooth={true}
              spy={true}
              to="home"
              offset={-60}
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeclass="active"
              smooth={true}
              spy={true}
              to="about"
              offset={-60}
              onClick={handleClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeclass="active"
              smooth={true}
              spy={true}
              to="partnership"
              offset={-60}
              onClick={handleClick}
            >
              Partnership
            </Link>
          </li>
          <li>
            <Link
              activeclass="active"
              smooth={true}
              spy={true}
              to="history"
              offset={-60}
              onClick={handleClick}
            >
              History
            </Link>
          </li>
          <li>
            <Link
              activeclass="active"
              smooth={true}
              spy={true}
              to="donate"
              offset={-60}
              onClick={handleClick}
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              activeclass="active"
              smooth={true}
              spy={true}
              offset={-60}
              to="our gallery"
              onClick={handleClick}
            >
              Our Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
