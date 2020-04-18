import React from 'react';
import HomePage from './containers/home page/homepage';
import NavBar from './components/UI/navbar/navbar';
import './App.css';

class App extends React.Component {



  render(){
   
   
    
    return (
     <div>
       <NavBar/>
       <HomePage/>
       
     </div>
    );
  }
}

export default App;
