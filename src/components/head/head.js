import React from 'react';

import './head.css';

const head=(props)=>{

    const header=props.data.map(info=>{
        return(
            <div className='Head' key={info.statecode}>
                
                <div className='ConfirmedData section'>
                    <h1 className='label' style={{textAlign:'left' ,fontSize:'100%',marginLeft:'33%',marginBottom:'8%',marginTop:'3%'}} >Confirmed</h1>
                    <div style={{fontSize:'175%',textAlign:'left',marginLeft:'33%',marginBottom:'8%' }}>{info.confirmed}</div>
                </div>
                <div className='ActiveData section'>
                    <h1 className='label'  style={{textAlign:'left',fontSize:'100%',marginLeft:'33%',marginBottom:'8%',marginTop:'3%'}}>Active</h1>
                    <div style={{fontSize:'175%',textAlign:'left',marginLeft:'33%',marginBottom:'8%'}}>{info.active}</div>
                </div>
                <div className='RecoveredData section'>
                    <h1 className='label'  style={{textAlign:'left',fontSize:'100%',marginLeft:'33%',marginBottom:'8%',marginTop:'3%'}}>Recovered</h1>
                    <div style={{fontSize:'175%',textAlign:'left',marginLeft:'33%',marginBottom:'8%'}}>{info.recovered}</div>
                </div>
                <div className='DeathsData section'>
                    <h1 className='label'  style={{textAlign:'left',fontSize:'100%',marginLeft:'33%',marginBottom:'8%',marginTop:'3%'}}>Deaths</h1>
                    <div style={{fontSize:'175%',textAlign:'left',marginLeft:'33%',marginBottom:'8%'}}>{info.deaths}</div>
                </div>
            </div>
        );
    })
    return(
        <div className='Header'>
            {header}
        </div>
    );
}

export default head;