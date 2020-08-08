import React from "react";
import netflixLogo from "../images/netflix-logo.png";
import avatar from "../images/netflix-avatar.png";

function Nav() {
  return (
    <div className="nav">
      <img className="nav__logo" src={netflixLogo} alt="Netflix logo" />
      <img className="nav__avatar" src={avatar} alt="User Icon" />
    </div>
  );
}

export default Nav;
