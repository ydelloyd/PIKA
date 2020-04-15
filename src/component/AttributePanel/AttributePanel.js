import React, {useState, useEffect} from 'react'
import { Spin, Button } from 'antd';
import './AttributePanel.scss';

export default function AttributePanel (props){

    /*useEffect = () => {
        /* load json attribute from bowen's backend stuff here through
         a http request, then go ahead and populate the attribute list
    };*/

    return (
        <div className='componentDiv'>
            <Button type="primary" onClick={props.reset}>Reset</Button>
            <Button type="primary" onClick={props.handleClustering}>Analyze</Button>
        </div>
    )
}


