import React, { Component } from "react";
import Unsplash from "unsplash-js";

class UnsplashGallery extends Component {
  state = {
    results: [],
    error: false
  };

  getUnsplash = () => {
    const unsplash = new Unsplash({
      applicationId:
        "c23b06f5553b06b704c0af317f7f9490e88712216180d9162de3e355ac3d602d",
      secret: "b5252deb184a488ccaff8789180ec47e07d77506cc1ce40f1d6a0f952cb02cbe"
    });

    unsplash.search
      .photos("clothes", 1, 12)
      .then(response => response.json())
      .then(data => {
        console.log(data.results);

        this.setState({
          results: data.results
        });
      });
  };

  componentDidMount() {
    this.getUnsplash();
  }

  render() {
    return (
      <>
        {this.state.results.map((elem, i) => (
          //   <img src={elem.urls.raw} alt="" height="400" />
          <div
            key={i}
            className="picture"
            style={{ backgroundImage: `url(${elem.urls.raw})` }}
          />
        ))}
      </>
    );
  }
}

export default UnsplashGallery;
