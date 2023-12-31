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
            onClick={() => {
              handleClick("About");
              navigate("/about");
            }}
          >
            About
          </Link>
          <Link
            className={
              selectPage === "Partnership" ? "links selected" : "links"
            }
            smooth={true}
            spy={true}
            to="Partnership"
            offset={-80}
            onClick={() => {
              handleClick("Partnership");
              navigate("/partnership");
            }}
          >
            Partnership
          </Link>
          <Link
            className={selectPage === "History" ? "links selected" : "links"}
            smooth={true}
            spy={true}
            to="History"
            offset={-80}
            onClick={() => {
              handleClick("History");
              navigate("/history");
            }}
          >
            History
          </Link>
          <Link
            className={selectPage === "Donate" ? "links selected" : "links"}
            smooth={true}
            spy={true}
            to="donate"
            offset={-80}
            onClick={() => {
              handleClick("Donate");
              navigate("/donate");
            }}
          >
            Donate
          </Link>
          <Link
            className={
              selectPage === "Our Gallery"
                ? "links Contact-Link selected"
                : "links Contact-Link"
            }
            smooth={true}
            spy={true}
            to="our gallery"
            offset={-80}
            onClick={() => {
              handleClick("Our Gallery");
              navigate("/gallery");
            }}
          >
            Our Gallery
          </Link>
        </div>
      ) : (
        <BurgerMenu />
      )}
    </nav>
  );
}
