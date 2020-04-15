import React, {useState} from 'react'
import { Row, Col, Avatar, Typography, Form, Input, InputNumber, Button, Select } from 'antd';
import People from '../People/People';
const { Title, Paragraph, Text } = Typography;

export default function Team(props){
    let members = [
        {
            Name : 'York Delloyd',
            Photo : '/york.jpg',
            Link : 'https://www.linkedin.com/in/york-delloyd-310342123/'
        },
        {
            Name : 'Bowen Yang',
            Photo : '/bowen.jpg',
            Link : 'https://www.linkedin.com/in/byang9/'
        },
        {
            Name : 'Philip Edwards',
            Photo : '/phil.png',
            Link : 'https://www.linkedin.com/in/philip-edwards-99394bb6/'
        },
        {
            Name : 'Hongji Wang',
            Photo : '/hongji.jpg',
            Link : 'https://www.linkedin.com/in/hongji-wang-4a25b6b6/'
        },
        {
            Name : 'Edward Tan',
            Photo : '/edward.jpg',
            Link : 'https://www.linkedin.com/in/qqtan/'
        }
    ]
    return (
        <div className='componentDiv'>
           <Row>
            <Title>Team Rocket Team</Title>
           </Row>
           <Row>
               <Col>
                    <People person={members[0]}/>
               </Col>
               <Col>
                    <People person={members[1]}/>
               </Col>
           </Row>
           <Row>
               <Col>
                    <People person={members[2]}/>
               </Col>
               <Col>
                    <People person={members[3]}/>
               </Col>
           </Row>
           <Row>
               <Col>
                    <People person={members[4]}/>
               </Col>
           </Row>
           
        </div>
    )
}


