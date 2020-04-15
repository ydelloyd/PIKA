import React, {useState} from 'react'
import { Spin } from 'antd';

export default function GraphPanel(props){
    return (
        <div className='componentDiv'>
            <img src={require("./../../resources/loading.gif")} style={{width: "500px", height: "500px", marginLeft: "500px", visibility: props.spin}} alt="loading..."/>
            <p style={{textAlign: "center", fontSize: "20px", fontWeight: "bold", visibility: props.spin}}>Processing Data, please wait...</p>
        </div>
    )
}


