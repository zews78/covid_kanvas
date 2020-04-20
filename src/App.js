import React from 'react';
import HomePage from './containers/home page/homepage';
import NavBar from './components/UI/navbar/navbar';
import Suggestion from './containers/suggestions/suggestions';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import FAQ from './containers/FAQ/faq';
import './App.css';

class App extends React.Component {



  render(){
   
   
    
    return (
      <BrowserRouter>
          <div>
                <NavBar/>
                
                <Switch>
                  <Route path='/suggestion/' component={Suggestion}/>
                  <Route path='/faq/' component={FAQ}/>
                  <Route path='/' component= {HomePage}/>
                </Switch>
          </div>
     </BrowserRouter>
    );
  }
}

export default App;
