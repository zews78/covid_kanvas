import React from 'react';
import axios from 'axios';
import './table.css';

class Table extends React.Component{

   state={
       state_data:[],
       total_data:[]
   }

   componentDidMount(){

    axios.get("https://api.covid19india.org/data.json")
          .then(response=>{
            
            this.setState({state_data:response.data.statewise.slice(1,38) });
            this.setState({total_data:response.data.statewise.slice(0,1)});            
            
        
            
          });
  }

    render(){

        const row=this.state.state_data.map(post=>{
             return( 
                    
                    <tr key={post.statecode} >
                        <td className='States'>{post.state}</td>
                        <td className='Confirmed'>{post.confirmed}</td>
                        <td className='Active'>{post.active}</td>
                        <td className='Recovered'>{post.recovered}</td>
                        <td className='Deaths'>{post.deaths}</td>
                    </tr>
                
                );
          });

          const total=this.state.total_data.map(post=>{
            return( 
                   
                   <tr key={post.statecode}>
                       <td className='States' >{post.state}</td>
                       <td className='Confirmed'>{post.confirmed}</td>
                       <td className='Active'>{post.active}</td>
                       <td className='Recovered'>{post.recovered}</td>
                       <td className='Deaths'>{post.deaths} </td>
                   </tr>
               
               );
         });

        return(
            <div className='table'>
            <table >
                <thead style={{borderBottom:"1px solid black"}}>
                    <tr style={{fontSize:'18px'}}>
                        <th >
                                STATE/UT
                        </th>
                        <th>
                                CONFIRMED
                        </th>
                        <th>
                                ACTIVE
                        </th>
                        <th>
                                RECOVERED
                        </th>
                        <th>
                                DECEASED
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {row}
                </tbody>
                <tbody>
                    {total}
                </tbody>
            </table>
            </div>
        );
    }
}

export default Table;