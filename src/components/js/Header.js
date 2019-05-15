import React, { Component } from "react";
import "../scss/header.scss";
import Logo from "../img/mobius-logo.svg";

class Header extends Component {
  render() {
    return (
      <nav className="container">
        <figure className="navbar__logo">
          <img src={Logo} alt="logo" height="50" />
        </figure>
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
