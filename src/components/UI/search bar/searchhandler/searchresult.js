import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './searchresult.css';
import axios from 'axios';


class SearchData extends React.Component{
    state={
        state_data:[],
        district_data:[
            {district_name:[]},
            {district_cases:[]}
        ]
       
        
    }
    capitalizeFirstLetter=(str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      searchDeleteHandler=()=>{
        this.setState({
            district_data:[
                {district_name:[]},
                {district_cases:[]}
            ],
            district:''
        });
    }
    componentDidUpdate(prevProps){
        if(prevProps.searched!==this.props.searched ){
            axios.get('https://api.covid19india.org/state_district_wise.json')
            .then(response=>{
                    
                    this.setState({state_data:response.data});
                    
                    let names=[];
                    let cases=[];
                    for(let keys in this.state.state_data){
                        if( keys=== this.capitalizeFirstLetter(this.props.searched)){
                            for(let key in this.state.state_data[keys].districtData){
                                
                                names.push(key);
                                cases.push(this.state.state_data[keys].districtData[key].confirmed);
                            
                            }
                        }
                        
                    }
                    this.setState({
                        district_data:[
                            {district_name:names},
                            {district_cases:cases}
                        ]
                    });
                    
                    
                    
                }         
            );
        }
    }
 

    
    
    
    



    render(){
       
        let search=null;
        let districtCases=null;
        if(this.state.district_data[1].district_cases.length){
            districtCases=this.state.district_data[0].district_name.map((name,index)=>{
               return this.state.district_data[1].district_cases.map((number,i)=>{
                   let datas=null;
                    if(index===i){
                                datas= <tr key={index}> 
                                            <td><strong>{name}</strong></td>
                                            <td>{number}</td>
                                        </tr>
                                }
                            return datas
                 })
           
               
              })
              
           search=( <div >
           
           <div style={{display:'flex'}} >
               
               <table style={{padding:'0px'}}>
                    <thead >
                    <tr><th></th><th style={{textAlign:'right',marginLeft:'30%'}}> <button onClick={this.searchDeleteHandler} ><i className="fa fa-times fa-lg" aria-hidden="true" style={{color:'#726B6B'}}></i></button></th></tr>
                        <tr>
                            <th style={{fontSize:'20px'}}>
                                District
                            </th>
                           
                            <th style={{fontSize:'20px'}}>
                             No. Of Cases
                         </th>
                        
                        </tr>
                       
                    </thead>
                    <tbody>
                       {districtCases}
                    </tbody>
                </table>
               
            </div>
            </div>);
        }

        
        return(
           <div>
                 <div style={{paddingLeft:'30%'}} >
                        {search}
                 </div>
           </div>
        );
    }
}

export default SearchData