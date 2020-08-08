import React, { useEffect, useState } from "react";
import netflixLogo from "../images/netflix-logo.png";
import avatar from "../images/netflix-avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <img className="nav__logo" src={netflixLogo} alt="Netflix logo" />
      <img className="nav__avatar" src={avatar} alt="User Icon" />
    </div>
  );
}

export default Nav;
