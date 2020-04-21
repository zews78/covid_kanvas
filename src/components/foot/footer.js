import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './footer.css';


const footer=(props)=>{
    return(
        <div className='footerBar'>
           <a href='https://github.com/mangeshupadhyay23'> <i className="fa fa-github git icon" aria-hidden="true" ></i><abbr className='username'  >github.com/mangeshupadhyay23</abbr></a>
  
           <a href='https://www.instagram.com/mangesh23_0/'> <i className="fa fa-instagram insta icon" aria-hidden="true" ></i><abbr className='username'>mangesh23_0</abbr></a>
        </div>
    );
}
export default footer;