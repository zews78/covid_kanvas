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
            
            console.log(this.state.state_data);
            console.log(this.state.total_data[0]);
            
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
            <table >
                <thead>
                    <tr>
                        <th>
                            <div>
                                <abbr>STATE/UT</abbr>
                            </div>
                        </th>
                    
                   
                        <th>
                            <div>
                                <abbr>CONFIRMED</abbr>
                            </div>
                        </th>
                    
                    
                        <th>
                            <div>
                                <abbr>ACTIVE</abbr>
                            </div>
                        </th>
                    
                    
                        <th>
                            <div>
                                <abbr>RECOVERED</abbr>
                            </div>
                        </th>
                    
                        <th>
                            <div>
                                <abbr>DECEASED</abbr>
                            </div>
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
        );
    }
}

export default Table;