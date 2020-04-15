import React, {useState} from 'react'
import { Row, Col, Avatar, Typography, Form, Input, InputNumber, Button, Select, Card, Anchor  } from 'antd';
const { Link } = Anchor; 
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;
export default function People(props){

    return (
        <div onClick={()=>{window.location.href = props.person.Link}}>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={'Photo of '+ props.person.Name} src={process.env.PUBLIC_URL + props.person.Photo} />}
            >
            <Meta title={props.person.Name} />
            </Card>
        </div>
            

    )
}