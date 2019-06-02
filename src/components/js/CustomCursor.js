import React, { Component } from "react";

const styles = {
  fill: "none",
  stroke: "#222222",
  strokeWidth: "1px",
  strokeMiterlimit: "10",
  width: "60px",
  height: "60px"
};

class CustomCursor extends Component {
  cursorMove = () => {
    const mybody = document.getElementsByTagName("body");
    const mycursor = document.getElementById("cursor");
    mybody.addEventListener("mousemove", e => {
      mycursor.style({ top: e.pageY + "px", left: e.pageX + "px" });
    });
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
        <circle class="st0" cx="30" cy="30" r="29.5" />
      </svg>
    );
  }
}

export default CustomCursor;

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
