import React, { Component } from "react";
import Unsplash from "unsplash-js";
import "../scss/gallery.scss";

class Gallery extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.sort);
  }
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

    unsplash.users
      .photos("parkerkwhitson", 1, 10, `${this.props.sort}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);

        this.setState({
          results: data
        });
      });
  };

  componentDidMount() {
    this.getUnsplash();
  }

  componentWillReceiveProps() {
    this.getUnsplash();
  }

  render() {
    return (
      <div className="gallery">
        {this.state.results.map((elem, i) => (
          <div
            key={i}
            className="picture"
            style={{ backgroundImage: `url(${elem.urls.small})` }}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;
