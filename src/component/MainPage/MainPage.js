import React, {useState} from 'react'
import AttributePanel from './../AttributePanel/AttributePanel'
import GraphPanel from './../GraphPanel/GraphPanel'

import { Spin } from 'antd';

export default function MainPage (){
    const [spin, setSpin] = useState("hidden");

    const handleClustering = () => {
        setSpin("visible");
    };
    const reset = () => {
        setSpin("hidden");
    };

    return (
      <div>
        <AttributePanel handleClustering={handleClustering} reset={reset} />
        <GraphPanel spin={spin}/>
      </div>

  )
}

