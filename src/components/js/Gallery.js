import React, { Component } from "react";
// import Unsplash from "unsplash-js";
import "../scss/gallery.scss";

class Gallery extends Component {
  state = {
    myKey: "ef042a81dcf64fc9c7b7119275c132c43ab2fadcba6b2ccb99c1731bcc5ec903",
    results: [],
    query: "dog",
    error: false
  };

  getUnsplash = () => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${
        this.state.query
      }&order_by=latest`,
      {
        headers: {
          authorization: `Client-ID ${this.state.myKey}`
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: data.results
        });
      });
  };

  sort = () => {
    fetch(`https://api.unsplash.com/search/photos?query=${this.state.query}`, {
      headers: {
        authorization: `Client-ID ${this.state.myKey}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.results);

        if (this.props.sort === "popular") {
          data.results.sort((a, b) => {
            return a.likes - b.likes;
          });
        } else if (this.props.sort === "latest") {
          data.results.sort((a, b) => {
            let c = new Date(a.created_at);
            let d = new Date(b.created_at);
            return d - c;
            // return a.created_at - b.created_at;
          });
        } else if (this.props.sort === "oldest") {
          data.results.sort((a, b) => {
            let c = new Date(a.created_at);
            let d = new Date(b.created_at);
            return c - d;
            // return a.created_at - b.created_at;
          });
        }
        console.log(this.props.sort);
        this.setState({
          results: data.results
        });
      });
  };
  // state = {
  //   results: [],
  //   error: false
  // };

  // getUnsplash = () => {
  //   const unsplash = new Unsplash({
  //     applicationId:
  //       "c23b06f5553b06b704c0af317f7f9490e88712216180d9162de3e355ac3d602d",
  //     secret: "b5252deb184a488ccaff8789180ec47e07d77506cc1ce40f1d6a0f952cb02cbe"
  //   });

  //   unsplash.users
  //     .photos("parkerkwhitson", 1, 10, `${this.props.sort}`)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(this.props.sort);

  //       this.setState({
  //         results: data
  //       });
  //     });
  // };

  componentDidMount() {
    this.getUnsplash();
    // this.sort();
  }

  componentWillReceiveProps() {
    this.sort();
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
