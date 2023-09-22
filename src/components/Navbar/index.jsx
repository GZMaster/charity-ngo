import React, { useState } from "react";
import BurgerMenu from "../Hamburger/BurgerMenu";
import UseMediaQuery from "../Mediaquery/UseMediaQuery";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "../../styles/NavBar.scss";

export default function Navbar() {
  const navigate = useNavigate();
  const [selectPage, setSelectPage] = useState("Home");
  let isPageWide = UseMediaQuery("(min-width: 769px)");
  const handleClick = (path) => {
    navigate("/");
    setSelectPage(path);
  };
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50 || !isPageWide) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav
      className={colorChange ? "nav__component colorChange" : "nav__component"}
    >
      <div className="nav__header">
        <h1>
          Apeh-Be Charity <img src={Logo} alt="logo" />
        </h1>
      </div>

      {isPageWide ? (
        <div className="links__content">
          <Link
            className={selectPage === "Home" ? "links selected" : "links"}
            smooth={true}
            spy={true}
            to="home"
            offset={-80}
            onClick={() => handleClick("Home")}
          >
            Home
          </Link>
          <Link
            className={selectPage === "About" ? "links selected" : "links"}
            smooth={true}
            spy={true}
            to="about"
            offset={-80}
            onClick={() => handleClick("About")}
          >
            About
          </Link>
          <Link
            className={
              selectPage === "Our Gallery" ? "links selected" : "links"
            }
            smooth={true}
            spy={true}
            to="our gallery"
            offset={-80}
            onClick={() => handleClick("Our Gallery")}
          >
            Our Gallery
          </Link>

          <Link
            className={
              selectPage === "Contact Us"
                ? "links Contact-Link selected"
                : "links Contact-Link"
            }
            smooth={true}
            spy={true}
            to="our gallery"
            offset={-80}
            onClick={() => handleClick("Contact Us")}
          >
            Contact
          </Link>
        </div>
      ) : (
        <BurgerMenu />
      )}
    </nav>
  );
}
