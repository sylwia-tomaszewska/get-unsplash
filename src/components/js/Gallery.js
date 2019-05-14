import React, { Component } from "react";
import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "c23b06f5553b06b704c0af317f7f9490e88712216180d9162de3e355ac3d602d",
  secret: "b5252deb184a488ccaff8789180ec47e07d77506cc1ce40f1d6a0f952cb02cbe"
});

unsplash.photos
  .getRandomPhoto({ username: "naoufal" })
  .then(response => response.json())
  .then(json => {
    console.log(json);
  });

class Gallery extends Component {
  state = {
    myKey: "c23b06f5553b06b704c0af317f7f9490e88712216180d9162de3e355ac3d602d",
    photos: [],
    error: false
  };

  getUnsplash = () => {
    fetch(`https://api.unsplash.com/photos/?client_id=${this.state.myKey}`)
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      });
  };

  componentDidMount() {
    this.getUnsplash();
  }

  render() {
    // console.log(this.state.photos);
    // console.log(this.state.erondu);
    // if (this.state.error) {
    //   return <h1>Blad komunikacji z serwerem</h1>;
    // }

    return <button onClick={this.getCar} />;
  }
}

export default Gallery;
