import React from 'react';
import HomePage from './containers/home page/homepage';
import SearchResult from './components/UI/search bar/searchhandler/searchresult';
import './App.css';

class App extends React.Component {



  render(){
   
   
    
    return (
     <div>
       
       <HomePage/>
       <SearchResult/>
     </div>
    );
  }
}

export default App;
