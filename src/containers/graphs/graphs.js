import React from "react";
import "./graph.css";
import TotalCasesGraph from "./totalcasesgraph/totalcasesGraph";
import DeceasedCasesGraph from "./deceasedcasesgraph.js/deceasedcasesgraph";
import RecoveredCasesGraph from "./recovered cases graph/recoveredcasesgraph";

class Graphs extends React.Component {
  render() {
    console.log("in graph section");
    // if(this.props.searchTerm !== '') {
      // alert("Bro, you did something atlast!");
// 
    // }
    return (
      <div className="Graphs">
        <div className="graph">
          <TotalCasesGraph searchTerm = {this.props.searchTerm}/>
        </div>
        <div className="graph">
          <RecoveredCasesGraph searchTerm = {this.props.searchTerm}/>
        </div>
        <div className="graph">
          <DeceasedCasesGraph searchTerm = {this.props.searchTerm}/>
        </div>
      </div>
    );
  }
}
export default Graphs;
