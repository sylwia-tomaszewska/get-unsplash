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
        <form className="search" onSubmit={this.props.searchAction}>
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
        <button onClick={this.props.pageAction}>Next</button>
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
    page: 1,
    error: false
  };

  getUnsplash = () => {
    fetch(
      `https://api.unsplash.com/photos?page=${this.state.page}&per_page=12`,
      {
        headers: {
          authorization: `Client-ID ${this.state.myKey}`
        }
      }
    )
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
    if (this.state.query !== "") {
      fetch(
        `https://api.unsplash.com/search/photos?page=${this.state.page}&query=${
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
    }
  };

  getSortedUnsplash = event => {
    if (event) {
      this.setState({
        sort: event.target.value
      });
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
      console.log(this.state.results);
    } else {
      this.getUnsplash();
    }
  };

  nextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
    console.log(this.state.page);
    this.getSortedUnsplash();
    // this.getUnsplash();
  };

  render() {
    return (
      <section className="main">
        <Filter
          sortAction={this.getSortedUnsplash}
          searchAction={this.searchUnsplash}
          search={this.setQuery}
          query={this.state.query}
          pageAction={this.nextPage}
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
