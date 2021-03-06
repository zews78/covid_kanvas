import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./searchresult.css";
import axios from "axios";

class SearchData extends React.Component {
  state = {
    state_data: [],
    district_data: [{ district_name: [] }, { district_cases: [] }, {district_active: []}],
  };


  capitalizeFirstLetter = (str) => {
    return str.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
  };


  searchDeleteHandler = () => {
    this.setState({
      district_data: [{ district_name: [] }, { district_cases: [] }, {district_active: []}],
      district: "",
    });
  };


  componentDidUpdate(prevProps) {

    if (prevProps.searched !== this.props.searched) {
      axios
        .get("https://api.covid19india.org/state_district_wise.json")
        .then((response) => {
          this.setState({ state_data: response.data });
          let names = [];
          let cases = [];
          let active = [];
          for (let keys in this.state.state_data) {
            let searchTerm = this.capitalizeFirstLetter(this.props.searched);
            let tempKeys = this.capitalizeFirstLetter(keys);
            if (tempKeys === searchTerm) {
              for (let key in this.state.state_data[keys].districtData) {
                names.push(key);
                //for sorting confirmed cases
                for(let i in this.state.state_data[keys].districtData){
                  cases.push(
                    this.state.state_data[keys].districtData[i].confirmed
                  );
                  // cases.sort((a,b)=>{
                  //   return b-a
                  // });

                  active.push(
                    this.state.state_data[keys].districtData[i].active
                  )
                  
                }

                // console.log(keys,key);
              }
              this.props.ifSearched(searchTerm);
            }
          }
          // console.log(this.state.state_data);
          this.setState({
            district_data: [
              { district_name: names },
              { district_cases: cases },
              { district_active: active},
            ],
          });
          // this.setState(prevState=>{
          //   return{
          //     district_cases: prevState.reverse()
          //   }
          // })
        });
    }
  }

  render() {
    let search = null;
    let districtCases = null;
    if (this.state.district_data[1].district_cases.length) {
      districtCases = this.state.district_data[1].district_cases.map(
        (number, i) => {
          return this.state.district_data[0].district_name.map((name, index) => {
            let datas = null;
            if (i === index) {
              datas = (
                <tr key={i}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{number}</td>
                </tr>
              );
            }
            return datas;
            
          });
        }
        );
        console.log("hello",this.state.district_data[1]);

      search = (
        <div>
          <div className="searchResultBox">
            <table className="SearchResult" style={{ padding: "0px" }}>
              <thead>
                <tr>
                  <th style={{fontSize:"30px"}}>{this.props.searched.toUpperCase()}</th>
                  <th style={{ textAlign: "right", marginLeft: "30%" }}>
                    {" "}
                    <button onClick={this.searchDeleteHandler}>
                      <i
                        className="fa fa-times fa-lg"
                        aria-hidden="true"
                        style={{ color: "#726B6B" }}
                      ></i>
                    </button>
                  </th>
                </tr>
                <tr>
                  <th style={{ fontSize: "20px" }} className="districtNames">
                    <pre
                      style={{
                        cursor: "pointer",
                        fontFamily: "inherit",
                        borderBottom: "1px solid black",
                      }}
                    >
                      {" "}
                      District
                    </pre>
                  </th>

                  <th style={{ fontSize: "20px" }}>
                    <pre
                      style={{
                        cursor: "pointer",
                        fontFamily: "inherit",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Total Cases
                    </pre>
                  </th>

                  <th style={{ fontSize: "20px" }}>
                    <pre
                      style={{
                        cursor: "pointer",
                        fontFamily: "inherit",
                        borderBottom: "1px solid black",
                      }}
                    >
                      Active
                    </pre>
                  </th>

                </tr>
              </thead>
              <tbody>{districtCases}</tbody>
            </table>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div style={{ paddingLeft: "30%" }}>{search}</div>
      </div>
    );
  }
}

export default SearchData;
