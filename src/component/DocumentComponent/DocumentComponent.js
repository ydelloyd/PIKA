import React from 'react'
import { Card, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'


export default function DocumentComponent(props){

    const textStyle = {
        width: '75%',
        textAlign: 'center',
    };

    const buttonStyle = {
        width: '25%',
        textAlign: 'center',
    };

    return (
        <div>
            <Card title={props.document.title}>
                <Card.Grid style={textStyle}>{props.document.desc}</Card.Grid>
                <Card.Grid style={buttonStyle}>
                    <Link to={props.document.documentLocation} target="_blank" download>
                        <Button type="primary" shape="round" icon={<DownloadOutlined />}>Download</Button>
                    </Link>
                </Card.Grid>
            </Card>
      </div>
    )

}