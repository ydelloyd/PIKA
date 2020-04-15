import React from 'react'
import { Row, Col, Avatar, Typography, Layout } from 'antd';
import './About.scss'
const { Title, Paragraph } = Typography;
const { Content} = Layout;

export default function About(){
    const about = 'PIKA, Program for Imagining a Klustering Algorithm, is designed to be an application where a user can visualize, on a map, the clusters of various major '+
    'geographical areas and have the unsupervised learning model group locations. Since urban areas can be successfully classified through different structural dimensions '+
    ', performing the unsupervised version - clustering, should also be a feasible task. We will perform clustering so that a person can identify areas he/she is more '+
    'familiar with. In addition, PIKA will also allow for users to customize what variables and factors they are interested in having considered in the algorithm. All in '+
    'all, we want to define similar cities without ranking and just grouping them together based on a customized attribute pool. We can do this because there exist ' +
    'similarities that describe such behavior in that… despite the great geographical distances, the rents and vacancies of some east and west coast cities tend to move together.';
    
    return (
        <div className='content-wrapper'>
            <Content className='site-layout-background'>
                <Row justify='center' style={{textAlign: 'center'}}>
                    <Col span={8} />
                    <Col span={8}>
                        <Title style={{textAlign: 'center'}}>Team Rocket #150</Title>
                    </Col>
                    <Col span={8} />
                </Row>
                <br/>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <Avatar shape='square' size={100} src='https://vignette.wikia.nocookie.net/universeconquest/images/6/67/Team_Rocket_Logo.jpg/revision/latest?cb=20190206180338'/>
                    <Paragraph style={{ width:'100%', padding: '0 0 0 20px'}}>
                        {about}
                    </Paragraph>
                </div>
            </Content>
        </div>
    )
}


