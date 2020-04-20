import React from 'react';
import './about.css';
import Prevention_symptom from './prevention.jpg';
import symptom from './symptoms.jpg';
import COVID from './what is covid.jpg';
import Transmission from './transmission.jpg';

class About extends React.Component{
    render(){
        return(
            <div className='aboutPage'>
              <h1 style={{borderLeft:'3px solid #4db8ff',paddingLeft:'10px'}}>What Is COVID-19 ?</h1>
              <img src={COVID} alt="covid19.jpg" style={{boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)",display: "block",marginLeft: "auto",marginRight: "auto"}}/>
              <p style={{paddingTop:'3%',fontSize:'18px'}}>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.</p>
              <p style={{fontSize:'18px'}}>Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.</p>
              <h1 style={{borderLeft:'3px solid #4db8ff',paddingLeft:'10px'}}>How Does COVID-19 Spread?</h1>
              <img src={Transmission} alt='transmission.jpg' style={{width:'60%', boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)",display: "block",marginLeft: "auto",marginRight: "auto"}}/>
              <p style={{paddingTop:'3%',fontSize:'18px'}}>People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick.</p>
              <p style={{fontSize:'18px'}}>WHO is assessing ongoing research on the ways COVID-19 is spread and will continue to share updated findings. </p>
              <h1 style={{borderLeft:'3px solid #4db8ff',paddingLeft:'10px'}}>What Are The Symptoms Of COVID-19 ?</h1>
              <img src={symptom} alt="symptoms.jpg" style={{width:'60%',boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)",display: "block",marginLeft: "auto",marginRight: "auto"}}/>
              <p style={{paddingTop:'3%',fontSize:'18px'}}>The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention.</p>
              <h1 style={{borderLeft:'3px solid #4db8ff',paddingLeft:'10px'}}>How to Protect Yourself and Others ?</h1>
              <img src={Prevention_symptom} alt="prevention.jpg" style={{width:'60%',boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)",display: "block",marginLeft: "auto",marginRight: "auto"}}/>
              <p style={{paddingTop:'3%',fontSize:'18px'}}>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency.</p>
              <p style={{paddingTop:'3%',fontSize:'18px'}}>To prevent the spread of COVID-19:</p>
                 <p style={{fontSize:'18px'}} > {'\u25CF'}  Clean your hands often. Use soap and water, or an alcohol-based hand rub.</p>
                 <p style={{fontSize:'18px'}} > {'\u25CF'}  Maintain a safe distance from anyone who is coughing or sneezing.</p>
                 <p style={{fontSize:'18px'}} > {'\u25CF'}  Don’t touch your eyes, nose or mouth.</p>
                 <p style={{fontSize:'18px'}} > {'\u25CF'}  Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</p>
                 <p style={{fontSize:'18px'}} > {'\u25CF'}  Stay home if you feel unwell.</p>
                 <p style={{fontSize:'18px'}} > {'\u25CF'}  If you have a fever, a cough, and difficulty breathing, seek medical attention. Call in advance.</p>
                 <p style={{fontSize:'18px'}} > {'\u25CF'}  Follow the directions of your local health authority.</p>
                 <p style={{fontSize:'18px'}} > {'\u25CF'} Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others.</p>             
              
              <p style={{paddingTop:'3%',fontSize:'18px',color:'gray',textAlign:'center'}}>For More Information Regarding COVID-19 Visit Govt. Of Inida Page <strong>my GOV</strong> https://www.mygov.in/ </p>
             {/* <img src={symptom} alt='info' width='50%'/> */}
            </div>
        );
    }
}

export default About ;