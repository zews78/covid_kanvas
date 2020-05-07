import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./searchBar.css";
import Searchresult from "./searchhandler/searchresult";

// import Graphs from "../../../containers/graphs/graphs";
// import Homepage from "../../../containers/home page/homepage";


class SearchBar extends React.Component {
  state = {
    district: "",
    input: "Search For Your State",

    ifSearched: false,
  };

  changeHandler = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ district: this.state.input });
    // console.log(this.state.ifSearched);
    // if(this.state.ifSearched === true) {
    //   alert("hi");
    //   // call back to Homepage
    //   this.props.handleSearchGraph(this.state.input);
    // }
    document.getElementById("searchfield").value = "";


  };

  ifSearchedHandler = (searchTerm) => {
    this.setState({ifSearched: true});
    // console.log("hello palak");
    this.props.handleSearchGraph(searchTerm);

  }

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
        <Searchresult searched={this.state.district} ifSearched={this.ifSearchedHandler}/>

        {/* call for graph */}
        {/* <Graphs style={{ margin: "30px" }} /> */}
      </div>
    );
  }
}

export default SearchBar;
