import React from 'react';
import './graph.css';
import TotalCasesGraph from'./totalcasesgraph/totalcasesGraph';
import DeceasedCasesGraph from'./deceasedcasesgraph.js/deceasedcasesgraph';
import RecoveredCasesGraph from'./recovered cases graph/recoveredcasesgraph';


class Graphs extends React.Component{
    render(){
        return(
            <div className='Graphs'>
                <div style={{paddingTop:'5%'}}><TotalCasesGraph /></div>
                <div style={{paddingTop:'5%'}}><RecoveredCasesGraph/></div>
                <div style={{paddingTop:'5%'}}><DeceasedCasesGraph/></div>
            </div>
        );
    }
}
export default Graphs;