import React from "react";
import { Line } from "react-chartjs-2";

import axios from "axios";

class RecoveredCasesGraph extends React.Component {
  state = {
    Data: {},
  };
  componentDidMount() {
    axios.get("https://api.covid19india.org/data.json").then((res) => {
      let date = [];
      let confirmedcases = [];
      res.data.cases_time_series.forEach((element) => {
        date.push(element.date);
        confirmedcases.push(element.totalrecovered);
      });
      this.setState({
        Data: {
          labels: date,
          datasets: [
            {
              data: confirmedcases,
              fill: true,
              lineTension: 0.5,
              backgroundColor: "rgba(0, 230, 77,0.6)",
              borderColor: "green",
              borderWidth: 2,
            },
          ],
        },
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      if(this.props.searchTerm !== '') {
        axios.get("https://api.covid19india.org/states_daily.json").then((res) => {
          let stateCodes = {
            'AndhraPradesh':'AP',
            'ArunachalPradesh':'AR',
            'Assam':'AS',
            'Bihar':'BR',
            'Chhattisgarh':'CT',
            'Goa':'GA',
            'Gujarat':'GJ',
            'Haryana':'HR',
            'HimachalPradesh':'HP',
            'JammuandKashmir':'JK',
            'Jharkhand':'JH',
            'Karnataka':'KA',
            'Kerala':'KL',
            'MadhyaPradesh':'MP',
            'Maharashtra':'MH',
            'Manipur':'MN',
            'Meghalaya':'ML',
            'Mizoram':'MZ',
            'Nagaland':'NL',
            'Odisha':'OR',
            'Punjab':'PB',
            'Rajasthan':'RJ',
            'Sikkim':'SK',
            'TamilNadu':'TN',
            'Telangana':'TG',
            'Tripura':'TR',
            'Uttarakhand':'UT',
            'UttarPradesh':'UP',
            'WestBengal':'WB',
            'AndamanandNicobarIslands':'AN',
            'Chandigarh':'CH',
            'DadraandNagarHaveli':'DN',
            'DamanandDiu':'DD',
            'Delhi':'DL',
            'Lakshadweep':'LD',
            'Puducherry':'PY',
          }
          let date = [];
          let recoveredcases = [];
          let stateCode = stateCodes[this.props.searchTerm];
          stateCode = stateCode.toLowerCase();
          for(let i = 1; i < res.data.states_daily.length; i+=3) {
            date.push(res.data.states_daily[i].date);
            recoveredcases.push(res.data.states_daily[i][stateCode]);
          }
          this.setState({
            Data: {
              labels: date,
              datasets: [
                {
                  data: recoveredcases,
                  fill: true,
                  lineTension: 0.5,
                  backgroundColor: "rgba(0, 230, 77,0.6)",
                  borderColor: "green",
                  borderWidth: 2,
                },
              ],
            },
          });
        });
      }
    }
  }


  render() {
    return (
      <div className="recoveredcasegraph">
        <Line
          width={700}
          height={300}
          data={this.state.Data}
          options={{
            scales: {
              xAxes: [
                {
                  display: false,
                },
              ],
            },

            maintainAspectRatio: false,
            title: {
              text: "Recovered Cases",
              fontColor: "black",
              fontSize: 25,
              display: true,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
export default RecoveredCasesGraph;
