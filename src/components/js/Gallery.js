import React, { Component } from "react";
import Popup from "./Popup";
import "../scss/gallery.scss";
import "../scss/aside.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Filter extends Component {
  render() {
    return (
      <aside className="left-panel">
        <h2>Sort by</h2>
        <fieldset className="filter">
          <select id="sort-field" onChange={this.props.sortAction}>
            <option value="latest">latest</option>
            <option value="oldest">oldest</option>
            <option value="popular">popular</option>
          </select>
        </fieldset>
        <h2>Search by</h2>
        <form onSubmit={this.props.searchAction}>
          <input
            id="search-input"
            type="text"
            value={this.props.query}
            placeholder="Search..."
            onChange={this.props.search}
          />
          <button type="submit" id="search-bttn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </aside>
    );
  }
}

class Pictures extends Component {
  state = {
    popup: false,
    url: ""
  };

  showPopup = event => {
    this.setState({
      popup: !this.state.popup,
      url: event.target.getAttribute("url")
    });
  };

  componentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <div className="gallery">
        {this.props.data.map((elem, i) => (
          <div
            key={i}
            className="picture"
            url={elem.urls.regular}
            style={{ backgroundImage: `url(${elem.urls.small})` }}
            onClick={this.showPopup}
          />
        ))}
        {this.state.popup ? (
          <Popup url={this.state.url} toggle={this.showPopup} />
        ) : null}
      </div>
    );
  }
}

class Gallery extends Component {
  state = {
    myKey: "ef042a81dcf64fc9c7b7119275c132c43ab2fadcba6b2ccb99c1731bcc5ec903",
    results: [],
    query: "",
    sort: "",
    error: false
  };

  getUnsplash = () => {
    fetch(`https://api.unsplash.com/photos/random?count=12`, {
      headers: {
        authorization: `Client-ID ${this.state.myKey}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: data
        });
      });
  };

  setQuery = event => {
    event.preventDefault();
    this.setState({
      query: event.target.value
    });
  };

  searchUnsplash = event => {
    event.preventDefault();
    fetch(
      `https://api.unsplash.com/search/photos?query=${
        this.state.query
      }&per_page=12`,
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

  sortUnsplash = event => {
    this.setState({
      sort: event.target.value
    });
    console.log("target", event.target.value);
    console.log("state", this.state.sort);

    if (event.target.value === "popular") {
      this.state.results.sort((a, b) => {
        return a.likes - b.likes;
      });
      this.setState({
        results: this.state.results
      });
    } else if (event.target.value === "latest") {
      this.state.results.sort((a, b) => {
        let c = new Date(a.created_at);
        let d = new Date(b.created_at);
        return d - c;
      });
      this.setState({
        results: this.state.results
      });
    } else if (event.target.value === "oldest") {
      this.state.results.sort((a, b) => {
        let c = new Date(a.created_at);
        let d = new Date(b.created_at);
        return c - d;
      });
      this.setState({
        results: this.state.results
      });
    }
  };

  render() {
    return (
      <section className="main container">
        <Filter
          sortAction={this.sortUnsplash}
          searchAction={this.searchUnsplash}
          search={this.setQuery}
          query={this.state.query}
        />
        <Pictures
          data={this.state.results}
          load={this.getUnsplash}
          sort={this.state.sort}
        />
      </section>
    );
  }
}

export default Gallery;
