import React from 'react';
import './head.css';

const head=(props)=>{

    const header=props.data.map(info=>{
        return(
            <div className='Head' key={info.statecode}>
                <section className='ConfirmedData'>
                    <h1 style={{textAlign:'left' ,fontSize:'100%'}}>Confirmed</h1>
                    <div style={{fontSize:'175%'}}>{info.confirmed}</div>
                </section>
                <section className='ActiveData'>
                    <h1 style={{textAlign:'left',fontSize:'100%'}}>Active</h1>
                    <div style={{fontSize:'175%'}}>{info.active}</div>
                </section>
                <section className='RecoveredData'>
                    <h1 style={{textAlign:'left',fontSize:'100%'}}>Recovered</h1>
                    <div style={{fontSize:'175%'}}>{info.recovered}</div>
                </section>
                <section className='DeathsData'>
                    <h1 style={{textAlign:'left',fontSize:'100%'}}>Deaths</h1>
                    <div style={{fontSize:'175%'}}>{info.deaths}</div>
                </section>
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