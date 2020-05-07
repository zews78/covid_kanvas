import React from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

class RecoveredCasesGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Data: {},
    };
  }

  componentDidMount() {
      axios.get("https://api.covid19india.org/data.json").then((res) => {
        let date = [];
        let confirmedcases = [];
        res.data.cases_time_series.forEach((element) => {
          date.push(element.date);
          confirmedcases.push(element.totalconfirmed);
        });
        this.setState({
          Data: {
            labels: date,
            datasets: [
              {
                data: confirmedcases,
                fill: true,
                lineTension: 0.5,
                backgroundColor: "rgba(255, 102, 102,0.6)",
                borderColor: "red",
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
            let confirmedcases = [];
            let stateCode = stateCodes[this.props.searchTerm];
            stateCode = stateCode.toLowerCase();
            for(let i = 0; i < res.data.states_daily.length; i+=3) {
              date.push(res.data.states_daily[i].date);
              confirmedcases.push(res.data.states_daily[i][stateCode]);
            }
            this.setState({
              Data: {
                labels: date,
                datasets: [
                  {
                    data: confirmedcases,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "rgba(255, 102, 102,0.6)",
                    borderColor: "red",
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
      <div className="totalcasegraph">
        <Line
          width={100}
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
              text: "Total Cases",
              fontSize: 25,
              fontColor: "black",
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
