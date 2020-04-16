import React from 'react';
import axios from 'axios';
import TimeStamp from './components/timestamp/timestamp';
import Table from './containers/Table/table';
import Head from './components/head/head';
import './App.css';

class App extends React.Component {

  state={
    posts:[],
    Total:[],
    labels:[],
   
  }
  

  componentDidMount(){

    axios.get("https://api.covid19india.org/data.json")
          .then(response=>{
            
            this.setState({posts:response.data.statewise.slice(1,38) });
            this.setState({Total:response.data.statewise.slice(0,1)}); 
            this.setState({timeStamp:response.data.statewise.slice(0,1).lastupdatedtime})           
            
            console.log(response.data.cases_time_series);
            response.data.cases_time_series.map(info=>{
              return this.setState(prevState=>({
                labels:[...prevState.labels,info.totalconfirmed]
              }))
            });
            console.log(this.state.labels);
            
          });
  }

  render(){
   
   
    
    return (
      <div className="App">
        
        <section style={{textAlign:'center'}}>
          <TimeStamp data={this.state.Total}/>
          <Head data={this.state.Total}/>
        </section>

        <section>
          <Table/>
        </section>

      </div>
    );
  }
}

export default App;
