import React, { Component } from "react";

class Gallery extends Component {
  state = {
    cat: "",
    error: false
  };

  componentDidMount() {
    this.getNextCat();
  }

  getNextCat = () => {
    fetch("https://aws.random.cat/meow")
      .then(response => response.json())
      .then(data => {
        this.setState({
          cat: data,
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

  render() {
    console.log(this.state.cat.file);

    if (this.state.error) {
      return (
        <h1>
          Blad komunikacji z serwerem
          <button onClick={this.getNextCat}>ponownie</button>
        </h1>
      );
    }

    return (
      <button onClick={this.getNextCat}>
        <img src={this.state.cat.file} width={200} alt="" />
      </button>
    );
  }
}

export default Gallery;
