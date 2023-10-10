import { useState } from "react";
import logo from "../../assets/logos/waves-logo.svg";
import "./Nav.scss";
import { AiOutlineClose } from "react-icons/ai";

function scrollToSection(sectionId, offset = 135) {
  const targetSection = document.getElementById(sectionId);

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - offset,
      behavior: "smooth",
    });
  }
}

function Nav() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <div className="nav-bar">
      <button
        className="nav-bar__home-link"
        onClick={() => scrollToSection("hero")}
      >
        <img className="nav-bar__logo" src={logo}></img>
      </button>
      <ul className="nav-bar__links">
        <button
          className="nav-bar__link"
          onClick={() => scrollToSection("partners", 0)}
        >
          <li className="nav-bar__item">Partners</li>
        </button>
        <button
          className="nav-bar__link"
          onClick={() => scrollToSection("about")}
        >
          <li className="nav-bar__item">About</li>
        </button>
        <button
          className="nav-bar__link"
          onClick={() => scrollToSection("demos")}
        >
          <li className="nav-bar__item">Demos</li>
        </button>
      </ul>
      <div className="nav-bar__burger" onClick={() => toggleNavBar()}>
        {!navBarOpen ? (
          <>
            {" "}
            <span></span>
            <span></span>
            <span></span>
          </>
        ) : (
          <AiOutlineClose className="nav-bar__burger--close" />
        )}
      </div>
      <div
        className={`nav-bar__mobile ${
          navBarOpen ? "" : "nav-bar__mobile--closed"
        }`}
      >
        <ul className="nav-bar__mobile--links">
          <button
            className="nav-bar__link"
            onClick={() => {
              scrollToSection("partners", 0);
              setNavBarOpen(false);
            }}
          >
            <li className="nav-bar__item">Partners</li>
          </button>
          <button
            className="nav-bar__link"
            onClick={() => {
              scrollToSection("about");
              setNavBarOpen(false);
            }}
          >
            <li className="nav-bar__item">About</li>
          </button>
          <button
            className="nav-bar__link"
            onClick={() => {
              scrollToSection("demos");
              setNavBarOpen(false);
            }}
          >
            <li className="nav-bar__item">Demos</li>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
