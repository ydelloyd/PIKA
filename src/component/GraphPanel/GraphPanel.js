import React from 'react'
import './GraphPanel.scss'
import Plot from 'react-plotly.js';

export default function GraphPanel(props){
    
    const processScatter = (input) => {
        let data = [];
        if(input !== []){
            data = [{
                type: 'scattergeo',
                mode: 'markers',
                text: input.msa_name,
                lon: input.long,
                lat: input.lat,
                marker: {
                    size: 7,
                    color: input.color,
                    line: {
                        width: 1
                    }
                },
                name: 'US cities',
                textposition: input.textposition,
            }];
        } 
        
        let layout = {
            title: 'US cities',
            font: {
                family: 'Droid Serif, serif',
                size: 6
            },
            titlefont: {
                size: 16
            },
            geo: {
                scope: 'usa',
                projection: {
                    type: 'albers usa'
                },
                showrivers: true,
                rivercolor: '#fff',
                showlakes: true,
                lakecolor: '#fff',
                showland: true,
                landcolor: '#EAEAAE',
                countrycolor: '#d3d3d3',
                countrywidth: 1.5,
                subunitcolor: '#d3d3d3'
            },
            width: 1600,
            height: 800
        };
        
        return {'data' : data, 'layout' : layout}
    }

    const processPara = (input) => {
        let data = [];
        let layout = {};
        let dim = [];
        Object.keys(input).forEach((key) => {
            if(key !== 'color' && key !== 'colorscale'){
                dim.push({
                    range: [0, 1],
                    label: key,
                    values: input[key]
                });
            }
        });
        if(input !== []){
            data = [{
                type: 'parcoords',
                line: {
                    color: input.color,
                    colorscale: input.colorscale
                },
                dimensions: dim
            }];
            layout = {
                width: 1600,
                height: 800
            };
        }
        return {'data': data, 'layout': layout}
    }

    let res = {'data': [], 'layout': {}}
    if(props.plotType === 'map') res = processScatter(props.plotingData);
    if(props.plotType === 'para') res = processPara(props.plotingData);

    return (
        <div className='graph-wrapper'>
            <div className='graph' style={{display: props.geoGraph}}>
                <Plot
                    data={res.data}
                    layout={res.layout}
                />
            </div>
            <div className='graph' style={{display: props.spin}}>
                <img src={require('./../../resources/loading.gif')} style={{width: '500px', height: '500px', marginLeft: '500px'}} alt='loading...'/>
                <p style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>Processing Data, please wait...</p>
            </div>
        </div>
    )
}


