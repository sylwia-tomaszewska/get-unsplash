import React from "react";
import "./components/scss/index.scss";
import Header from "./components/js/Header";
// import Gallery from "./components/js/Gallery";
import Aside from "./components/js/Aside";
// import ArtsyGallery from "./components/js/Artsy";

function App() {
  return (
    <>
      <Header />
      {/* <section className="main container"> */}
      <Aside />
      {/* <Gallery sort="popular" /> */}
      {/* </section> */}
    </>
  );
}

export default App;
