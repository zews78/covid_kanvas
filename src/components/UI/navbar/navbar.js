import React from 'react';
import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';

class NavBar extends React.Component{

   
    render(){
        return(
            <div className='NavBar' style={{display:'flex',padding:'15px' }}   >
                <div style={{textAlign:'left'}}>
                    <button className='home' style={{textAlign:'left'}}><i className="fa fa-home fa-2x"></i></button>
                </div>
                <div style={{textAlign:'right',paddingLeft:'70%',paddingTop:'10px'}}>
                    <div className='icons' style={{display:'flex'}}>                
                        <button className='Faq' style={{textAlign:'right'}}><i className="fa fa-question-circle" aria-hidden="true"></i> FAQs</button>
                        <button className=' suggestion' style={{textAlign:'right',paddingLeft:'0px',paddingRight:'0px'}}><i className="fa fa-lightbulb-o" aria-hidden="true"></i> SUGGESTIONS</button>
                        <button className='about' style={{textAlign:'right',paddingLeft:'0px'}}>ABOUT </button>
                    </div>
                </div>

            </div>
        );
    }
}
export default NavBar;