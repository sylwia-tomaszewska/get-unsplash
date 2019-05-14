import React, { Component } from "react";
import Unsplash from "unsplash-js";
const numItemsToGenerate = 20; //how many gallery items you want on the screen
const imageWidth = 480; //your desired image width in pixels
const imageHeight = 480; //desired image height in pixels
const collectionID = 1163637; //the collection ID from the original url

// const myUnsplashId =
//   "c23b06f5553b06b704c0af317f7f9490e88712216180d9162de3e355ac3d602d";

class Gallery extends Component {
  state = {
    cars: "",
    erondu: "",
    error: false
  };

  componentDidMount() {
    this.getCar();
  }

  getCar = () => {
    fetch("http://localhost:3000/cars")
      .then(response => response.json())
      .then(data => {
        this.setState({
          cars: data,
          error: false
        });
      })
      .catch(msg => {
        console.log(msg);
        this.setState({
          error: true
        });
      });
  };

  getUnsplash = () => {
    fetch(
      "https://source.unsplash.com/user/erondu"
      // `https://api.unsplash.com/photos/?client_id=${myUnsplashId}/photos/random`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          erondu: data,
          error: false
        });
      });
  };

  renderGalleryItem = () => {
    fetch(
      `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`
    ).then(response => {
      let galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");
      galleryItem.innerHTML = `
      <img class="gallery-image" src="${response.url}" alt="gallery image"/>
    `;
      document.body.appendChild(galleryItem);
    });
  };

  render() {
    console.log(this.state.cars);
    console.log(this.state.erondu);
    if (this.state.error) {
      return <h1>Blad komunikacji z serwerem</h1>;
    }

    return <button onClick={this.getCar} />;
  }
}

export default Gallery;
