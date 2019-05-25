import React, { Component } from "react";
// import Artsy from "artsy";

// import request from "superagent";

// request
//   .post("https://api.artsy.net/api/tokens/xapp_token")
//   .send({
//     client_id: "ba43703dfdcc8bf98226",
//     client_secret: "85dcaf787feb2cab97b639531262c4de"
//   })
//   .end(function(res) {
//     console.log(res);
//   });

// // console.log(xappToken);

class ArtsyGallery extends Component {
  state = {
    clientID:
      "8d32a0d77e895ebb8aa094c8f8fd169a49443d9772f3fa59e8bc2bf24459f072",
    clientSecret:
      "258009a6146dd53572699a6dfd85156b02b624a5be9e568154fb4e97cd122a79",
    avatar_url: "",
    error: false
  };

  getArtsy = () => {
    fetch(
      "https://api.dribbble.com/v2/shots?access_token=da05d8d19b2bbea7854a64e2926e1dead3541df721e68ee63138a1cfcbad1ec3",
      { mode: "no-cors" }
    )
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        this.setState({
          avatar_url: data.avatar_url
        });
      });
  };

  componentDidMount() {
    this.getArtsy();
  }

  render() {
    return <img src={this.state.avatar_url} alt="" />;
  }
}

export default ArtsyGallery;
