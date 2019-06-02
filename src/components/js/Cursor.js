import React, { Component } from "react";
import "../scss/cursor.scss";

const styles = {
  position: "absolute",
  fill: "orangered",
  pointerEvents: "none",
  mixBlendMode: "difference",
  width: "20px",
  height: "20px",
  transform: "translate(-50%, -50%)",
  transition: "transform 350ms cubic-bezier(0.165, 0.84, 0.44, 1)"
};

class Cursor extends Component {
  cursorMove = () => {
    const root = document.getElementById("root");
    const customCursor = document.getElementById("cursor");
    root.addEventListener("mousemove", e => {
      customCursor.style.top = e.pageY + "px";
      customCursor.style.left = e.pageX + "px";
    });
  };

  cursorHover = () => {
    const images = document.getElementsByTagName("img");
    const customCursor = document.getElementById("cursor");
    console.log(images);
    for (let i of images) {
      i.addEventListener("mouseover", () => {
        customCursor.style.transform = "scale(3)";
      });
    }
  };

  componentDidMount() {
    this.cursorMove();
  }
  render() {
    return (
      <svg
        id="cursor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 60"
        width="60"
        height="60"
        style={styles}
      >
        <circle className="st0" cx="30" cy="30" r="29.5" />
      </svg>
    );
  }
}

export default Cursor;

// export function customCursor() {
//   const $cursor = $("#cursor");
//   const $svg = $cursor.find("circle");

//   $("body").on("mousemove", e => {
//     $cursor.css({ top: e.pageY + "px", left: e.pageX + "px" });
//   });

//   $("img, .language a")
//     .mouseenter(() => {
//       $cursor.css({ transform: "scale(0.3)" });
//       $svg.css({
//         fill: "orangered"
//       });
//     })
//     .mouseleave(() => {
//       $cursor.css({ transform: "scale(1)" });
//       $svg.css({
//         fill: "none"
//       });
//     });
// }
