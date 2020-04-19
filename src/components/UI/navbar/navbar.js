import React from 'react';
import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';

class NavBar extends React.Component{

    myFunction=()=>{
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

   
    render(){
        return(
            <div className='NavBar'    >
               <div className="topnav" id="myTopnav">
                        <a href="/" ><i className="fa fa-home" aria-hidden="true"></i> Home</a>
                        <a href="/" className='Faq'><i className="fa fa-question-circle" aria-hidden="true"></i> FAQs</a>
                        <a href="/"className='suggestions'><i className="fa fa-lightbulb-o" aria-hidden="true"></i> Suggestions</a>
                        <a href="/"className='about'><i className="fas fa-virus"></i>About</a>
                        <button className="icon" onClick={this.myFunction} style={{backgroundColor:'transparent',color:'white',fontSize:'20px',padding:'13px'}}>
                            <i className="fa fa-bars"></i>
                        </button>
                </div>

            </div>
        );
    }
}
export default NavBar;