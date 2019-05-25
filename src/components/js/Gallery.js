import React, { Component } from "react";
// import Unsplash from "unsplash-js";
import "../scss/gallery.scss";

class Gallery extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.sort);
  }

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
        console.log(data.results);

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
        let store = [];
        console.log(data.results);
        data.results.map(elem => store.push(elem.likes));
        console.log(store);
        for (let i = 0; i < data.results.length; i++) {
          const element = data.results[i];
        }
        data.results.stores.sort();
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
