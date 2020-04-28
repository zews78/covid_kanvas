import React from "react";
import { Line } from "react-chartjs-2";

import axios from "axios";

class DeceasedCasesGraph extends React.Component {
  state = {
    Data: {},
  };
  componentDidMount() {
    axios.get("https://api.covid19india.org/data.json").then((res) => {
      let date = [];
      let confirmedcases = [];
      res.data.cases_time_series.forEach((element) => {
        date.push(element.date);
        confirmedcases.push(element.totaldeceased);
      });
      this.setState({
        Data: {
          labels: date,
          datasets: [
            {
              data: confirmedcases,
              fill: true,
              lineTension: 0.5,
              backgroundColor: "rgba(217, 217, 217,0.6)",
              borderColor: "grey",
              borderWidth: 2,
            },
          ],
        },
      });
    });
  }

  render() {
    return (
      <div className="deceasedcasegraph">
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
              text: "Deceased Cases",
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
export default DeceasedCasesGraph;