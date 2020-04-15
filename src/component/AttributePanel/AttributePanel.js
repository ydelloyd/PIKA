import React, {useState} from 'react'
import { Checkbox, Button, Collapse, Row, Col, notification } from 'antd';
import './AttributePanel.scss';

export default function AttributePanel (props){
    const { Panel } = Collapse;
    const [checkedList, setCheckedList] = useState([]);

    const handleReset = () => {
        props.callbackSpin('none');
        props.callbackGeoGraph('none');
        setCheckedList([]);
    };

    const handleAnalyze = () => {
        if (checkedList.length !== 0) {
            const url = 'https://cors-anywhere.herokuapp.com/https://team-rocket-svc.herokuapp.com/process_attributes';
            const data = {
                algo: 'KMeans',
                num_cluster: 20,
                cols: checkedList
            };
            const para = {
                headers: {'content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify(data),
                method: 'POST'
            };
            props.callbackSpin('block');
            props.callbackGeoGraph('none');
            fetch(url, para).then(res => res.json())
            .then((data) => {
                props.callbackParallelData(data.parallel_data);
                props.callbackPlotingData(data.values);
                props.callbackSpin('none');
                props.callbackGeoGraph('block');
            },(error) => {
                console.log(error);
                openNotification('topRight', `Error`, `There was an error processing your data. Please try again`);
                props.callbackSpin('none');
                props.callbackGeoGraph('none');
            });
        } else
            openNotification('topRight', `Analyze Failed`, 'Please make sure select at least one attribute before starting to analyze.');
    };

    const onChange = (category, checkedValues) => {
        setCheckedList(checkedList.filter( options => !props.attributes[category].map(item => item.colName).includes(options)).concat(checkedValues));
    };

    const openNotification = (placement, message, desc) => {
        notification.error({
            message: message,
            description: desc,
            placement,
        });
    };


    return (
        <div className='attributes-wrapper'>
            <div className='attributes'>

                <Collapse accordion>
                    {Object.keys(props.attributes).map((category, index) =>
                        <Panel header={category} key={index}>
                            <Checkbox.Group onChange={(e) => onChange(category, e)} value={checkedList}>
                                <Row>
                                    {props.attributes[category].map((option, cell_index) =>
                                        <Col span={6} key={cell_index}>
                                            <Checkbox value={option.colName} key={cell_index}>{option.prettyName}</Checkbox>
                                        </Col>
                                    )}
                                </Row>
                            </Checkbox.Group>
                        </Panel>
                    )}
                </Collapse>
                <br/>
                <br/>

                <Button type='primary' onClick={handleReset}>Reset</Button>
                <Button type='primary' onClick={handleAnalyze}>Analyze</Button>
            </div>
        </div>
    )
}


