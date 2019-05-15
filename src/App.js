import React from "react";
import "./components/scss/index.scss";
import Header from "./components/js/Header";
import UnsplashGallery from "./components/js/Unsplash";

function App() {
  return (
    <>
      <Header />
      <div className="gallery container">
        <UnsplashGallery />
      </div>
    </>
  );
}

export default App;
