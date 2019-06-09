import React from "react";
import "./components/scss/index.scss";
import Header from "./components/js/Header";
import Gallery from "./components/js/Gallery";
import Cursor from "./components/js/Cursor";

function App() {
  return (
    <>
      <Header />
      <Gallery />
      <Cursor />
    </>
  );
}

export default App;
