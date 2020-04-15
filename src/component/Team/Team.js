import React from 'react'
import { Row, Col, Typography } from 'antd';
import People from '../People/People';
import './Team.scss';
const { Title } = Typography;

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
        <div className='team-wrapper'>
            <div className='team'>
               <Row>
                   <Col span={8} />
                   <Col span={8} style={{textAlign: 'center'}}>
                        <Title level={2}>Team Rocket Team</Title>
                   </Col>
               </Row>
               <Row>
                   <Col span={4}>
                        <People person={members[0]}/>
                   </Col>
                   <Col span={4}>
                        <People person={members[1]}/>
                   </Col>
                   <Col span={4}>
                       <People person={members[2]}/>
                   </Col>
                   <Col span={4}>
                       <People person={members[3]}/>
                   </Col>
                   <Col span={4}>
                       <People person={members[4]}/>
                   </Col>
                </Row>
                <br/>
            </div>
        </div>
    )
}


