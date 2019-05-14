import React, { Component } from "react";
import "../scss/header.scss";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
