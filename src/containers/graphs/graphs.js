import React from 'react';
import './graph.css';
import TotalCasesGraph from'./totalcasesgraph/totalcasesGraph';
import DeceasedCasesGraph from'./deceasedcasesgraph.js/deceasedcasesgraph';
import RecoveredCasesGraph from'./recovered cases graph/recoveredcasesgraph';


class Graphs extends React.Component{
    render(){
        return(
            <div className='Graphs'>
                <div  className='graph'><TotalCasesGraph /></div>
                <div  className='graph'><RecoveredCasesGraph/></div>
                <div  className='graph'><DeceasedCasesGraph/></div>
            </div>
        );
    }
}
export default Graphs;