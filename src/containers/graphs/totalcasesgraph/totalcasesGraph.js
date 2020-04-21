import React from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


 class RecoveredCasesGraph extends React.Component {
    state = {
        Data:{}
      }
      componentDidMount(){
          axios.get('https://api.covid19india.org/data.json')
          .then(res=>{
              let date=[];
              let confirmedcases=[];
              res.data.cases_time_series.forEach(element => {
                  date.push(element.date);
                  confirmedcases.push(element.totalconfirmed)
              });
              this.setState({
                  Data:{
                        labels:date,
                      datasets:[
                          {
                              data:confirmedcases,
                              fill:false,
                              lineTension:0.5,
                              backgroundColor: 'sky',
                              borderColor: 'red',
                              borderWidth: 2,
                          }
                      ]
                  }
              })
          })
      }
    
  render() {
    
    return (
      <div className='totalcasegraph' >
         
            <Line
                width={100}
                height={300}
                data={this.state.Data}
                options={{
                    scales: {
                        xAxes: [{
                             display: false
                        
                            }]
                     
                    
                 },
                    
                    maintainAspectRatio:false,
                    title:{
                      text:'Total Cases',
                      fontSize:25,
                      fontColor:'black',
                    display:true,
                    
                    
                    },
                    legend:{
                    display:false,
                    position:'right'
                 }
          }}
        />
      </div>
    );
  }
}
export default RecoveredCasesGraph;