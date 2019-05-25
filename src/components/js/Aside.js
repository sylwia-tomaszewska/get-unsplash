import React, { Component } from "react";
// import Gallery from "./components/js/Gallery";
import "../scss/aside.scss";
import Gallery from "./Gallery";

class Aside extends Component {
  state = {
    sort: "popular",
    checked: "false"
  };
  sort = event => {
    // event.preventDefault();
    this.setState({
      sort: event.target.value
    });
    console.log(event.target.value);
    // event.target.checked = true;
  };

  render() {
    return (
      <section className="main container">
        <aside className="filter">
          <fieldset>
            <label>
              Sort
              <select value={this.state.sort} onChange={this.sort}>
                <option value="popular">popular</option>
                <option value="latest">latest</option>
                <option value="oldest">oldest</option>
              </select>
            </label>
          </fieldset>
        </aside>
        <Gallery sort={this.state.sort} />
      </section>
    );
  }
}

export default Aside;
