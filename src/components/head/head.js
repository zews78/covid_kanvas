import React from 'react';
import './head.css';

const head=(props)=>{

    const header=props.data.map(info=>{
        return(
            <div className='Head' key={info.statecode}>
                <section className='ConfirmedData'>
                    <h1 style={{textAlign:'left' ,fontSize:'100%',marginLeft:'10%',marginBottom:'4%'}} >Confirmed</h1>
                    <div style={{fontSize:'175%',textAlign:'left',marginLeft:'10%',marginBottom:'4%' }}>{info.confirmed}</div>
                </section>
                <section className='ActiveData'>
                    <h1 style={{textAlign:'left',fontSize:'100%',marginLeft:'10%',marginBottom:'4%'}}>Active</h1>
                    <div style={{fontSize:'175%',textAlign:'left',marginLeft:'10%',marginBottom:'4%'}}>{info.active}</div>
                </section>
                <section className='RecoveredData'>
                    <h1 style={{textAlign:'left',fontSize:'100%',marginLeft:'10%',marginBottom:'4%'}}>Recovered</h1>
                    <div style={{fontSize:'175%',textAlign:'left',marginLeft:'10%',marginBottom:'4%'}}>{info.recovered}</div>
                </section>
                <section className='DeathsData'>
                    <h1 style={{textAlign:'left',fontSize:'100%',marginLeft:'10%',marginBottom:'4%'}}>Deaths</h1>
                    <div style={{fontSize:'175%',textAlign:'left',marginLeft:'10%',marginBottom:'4%'}}>{info.deaths}</div>
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