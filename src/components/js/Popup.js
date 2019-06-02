import React, { Component } from "react";
import "../scss/popup.scss";

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup__close" onClick={this.props.toggle} />
        <figure>
          <img src={this.props.url} alt="" />
        </figure>
      </div>
    );
  }
}

export default Popup;
