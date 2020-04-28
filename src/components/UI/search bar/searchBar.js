import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./searchBar.css";
import Searchresult from "./searchhandler/searchresult";

class SearchBar extends React.Component {
  state = {
    district: "",
    input: "Search For Your State",
  };

  changeHandler = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ district: this.state.input });
    document.getElementById("searchfield").value = "";
  };

  render() {
    return (
      <div className="Search">
        <form>
          <input
            type="text"
            className="SearchBar"
            placeholder="Search For Your State"
            onChange={this.changeHandler}
            id="searchfield"
          />
          <button
            className="placeholder"
            onClick={this.submitHandler}
            style={{ backgroundColor: "transparent" }}
          >
            <i className="fa fa-search fa-2x"></i>
          </button>
        </form>
        <Searchresult searched={this.state.district} />
      </div>
    );
  }
}

export default SearchBar;
