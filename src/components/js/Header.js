import React, { Component } from "react";
import "../scss/header.scss";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="marquee">
          <div className="marquee__content">
            <ul className="list-inline">
              <li>get unsplash</li>
              <li>get unsplash</li>
              <li>get unsplash</li>
            </ul>
            <ul className="list-inline">
              <li>get unsplash</li>
              <li>get unsplash</li>
              <li>get unsplash</li>
            </ul>
            <ul className="list-inline">
              <li>get unsplash</li>
              <li>get unsplash</li>
              <li>get unsplash</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
