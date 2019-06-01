import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../scss/aside.scss";
import Gallery from "./Gallery";

class Aside extends Component {
  state = {
    sort: "latest",
    checked: "false",
    query: ""
  };
  sort = event => {
    this.setState({
      sort: event.target.value
    });
  };

  search = event => {
    event.preventDefault();
    this.setState({
      query: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.query.value);
  };
  // sort = event => {
  //   if (!event.target.checked) {
  //     event.target.checked = true;
  //   }
  //    if (this.target.prop("checked"))
  //      this.setState({
  //        sort: event.target.value
  //      });
  // };

  render() {
    return (
      <section className="main container">
        <aside className="left-panel">
          <h2>Sort by</h2>
          <fieldset className="filter">
            <select
              id="sort-field"
              value={this.state.sort}
              onChange={this.sort}
            >
              <option value="latest">latest</option>
              <option value="oldest">oldest</option>
              <option value="popular">popular</option>
            </select>
          </fieldset>

          <h2>Search by</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              id="search-input"
              type="text"
              value={this.state.query}
              placeholder="Search..."
              onChange={this.search}
            />
            <button type="submit" id="search-bttn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </aside>
        <Gallery sort={this.state.sort} query={this.state.query} />
      </section>
    );
  }
}

export default Aside;
