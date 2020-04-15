import React, {useEffect, useState} from 'react'
import AttributePanel from './../AttributePanel/AttributePanel'
import GraphPanel from './../GraphPanel/GraphPanel'

export default function MainPage (){
    const [spin, setSpin] = useState('none');
    const [geoGraph, setGeoGraph] = useState('none');
    const [attributes, setAttributes] = useState([]);
    const [plotingData, setPlotingData] = useState([]);
    const [parallelData, setParallelData] = useState([]);

    const [count, ] = useState(0);

    useEffect (  () => {
       const fetchData = async () => {
            const result = await fetch('https://cors-anywhere.herokuapp.com/https://team-rocket-svc.herokuapp.com/get_attributes_mapping')
                .then(res => res.json());

           const resultFromWebCall = buildAttributesDictionary(result.attributes);
           setAttributes(resultFromWebCall);
        };
        fetchData().then(()=>{});

    }, [count]);

    const callbackSpin = (spinVal) => {
        setSpin(spinVal);
    };

    const callbackGeoGraph = (geoGraphVal) => {
        setGeoGraph(geoGraphVal);
    };

    const callbackPlotingData = (plotingDataVal) => {
        setPlotingData(plotingDataVal);
    };

    const callbackParallelData = (plotingDataVal) => {
        setParallelData(plotingDataVal);
    };

    const buildAttributesDictionary = (inputArray) => {
        let ret = {};
        inputArray.forEach((input) => {
            if(!ret[input.category])
                ret[input.category] = [{prettyName: input.prettyName, colName: input.colName}];
            else
                ret[input.category].push({prettyName: input.prettyName, colName: input.colName});
        });
        return ret;
    };

    return (
      <div>
        <AttributePanel callbackSpin={callbackSpin} callbackPlotingData={callbackPlotingData} callbackParallelData={callbackParallelData} callbackGeoGraph={callbackGeoGraph} attributes={attributes}/>
        <GraphPanel spin={spin} geoGraph={geoGraph} plotingData={plotingData} plotType={'map'} />
        <GraphPanel spin={spin} geoGraph={geoGraph} plotingData={parallelData} plotType={'para'} />
      </div>
  )
}

