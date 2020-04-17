import React from 'react';
import './searchresult.js';
import axios from 'axios';


class SearchData extends React.Component{
    state={
        searchfor:'null',
        state_data:[],
        district_name:[],
        district_cases:[]
        
    }

    

    componentDidUpdate(prevProps){
        if(prevProps.searched!==this.props.searched){
            axios.get('https://api.covid19india.org/state_district_wise.json')
            .then(response=>{
                    
                    this.setState({state_data:response.data});
                    
                    let names=[];
                    let cases=[];
                    for(let keys in this.state.state_data){
                        if( keys===this.props.searched){
                            for(let key in this.state.state_data[keys].districtData){
                                
                                names.push(key);
                                cases.push(this.state.state_data[keys].districtData[key].confirmed);
                            
                            }
                        }
                
                    }
                    this.setState({
                       
                            district_name:names,
                            district_cases:cases
                        
                    });
                    
                    
                    
                }         
            );
        }
    }
    

    



    render(){
        let districtNames=null;
        let districtCases=null;
        if(this.state.district_cases.length){
           districtNames=this.state.district_name.map(stateName=>{
              return  <tr> {stateName}</tr>
            })
            districtCases=this.state.district_cases.map(cases=>{
                return  <tr> {cases}</tr>
            })
         
        }
        return(
            <div style={{display:'flex'}}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                District
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {districtNames}
                    </tbody>
                </table>
            
             <table>
                 <thead>
                     <tr>
                         <th>
                             District
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                        {districtCases}
                 </tbody>
             </table>
         </div>
        );
    }
}

export default SearchData