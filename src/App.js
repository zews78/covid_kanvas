import React from 'react';
import HomePage from './containers/home page/homepage';
import NavBar from './components/UI/navbar/navbar';
import Suggestion from './containers/suggestions/suggestions';
import FAQ from './containers/FAQ/faq';
import './App.css';

class App extends React.Component {



  render(){
   
   
    
    return (
     <div>
       <NavBar/>
       <HomePage/>
       <Suggestion/>
       <FAQ/>
       
     </div>
    );
  }
}

export default App;
