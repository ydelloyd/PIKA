import React from 'react'

export default function AltPanel(props){

    return (props.spin ? 
        <div className='componentDiv'>
            <img src={require('./../../resources/loading.gif')} style={{width: '500px', height: '500px', marginLeft: '500px', visibility: props.spin}} alt='loading...'/>
            <p style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold', visibility: props.spin}}>Processing Data, please wait...</p>
        </div>
        :
        <div className='componentDiv'>
            Plot
        </div>
    )
}


