import React from "react";
import "./graph.css";
import TotalCasesGraph from "./totalcasesgraph/totalcasesGraph";
import DeceasedCasesGraph from "./deceasedcasesgraph.js/deceasedcasesgraph";
import RecoveredCasesGraph from "./recovered cases graph/recoveredcasesgraph";

class Graphs extends React.Component {
  render() {
    return (
      <div className="Graphs">
        <h1 style={{fontSize: "50px"}}>{this.props.searchTerm}</h1>
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
