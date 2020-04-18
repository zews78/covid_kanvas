import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './searchBar.css';
import Searchresult from './searchhandler/searchresult';

class SearchBar extends React.Component{
    state={
        district:'',
        input:'Search For Your State',
        
    }

    changeHandler=(event)=>{
        event.preventDefault();
        this.setState({input:event.target.value});
    };
    
    submitHandler=(event)=>{
        event.preventDefault();
        this.setState({district:this.state.input});
    }
    

    
    
    
    render(){
       
           
         
        
        
        return(
        <div className='Search'  >
            <form>
                <input type='text'  className='SearchBar' placeholder='Search For Your State' onChange={this.changeHandler} />
                <button className='placeholder' onClick={this.submitHandler}><i className="fa fa-search fa-2x"></i></button>
            </form>
           <Searchresult searched={this.state.district}/>
        </div>
      );
    }
}

export default SearchBar;