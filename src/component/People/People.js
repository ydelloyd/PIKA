import React from 'react'
import {  Card  } from 'antd';
const { Meta } = Card;

export default function People(props){

    return (
        <div onClick={()=>{window.location.href = props.person.Link}} style={{padding: '0 0 0 15px'}}>
            <Card
            hoverable
            style={{ width: 240, height: 300}}
            cover={<img className='people-profile-pic' alt={props.person.name} src={process.env.PUBLIC_URL + props.person.Photo} style={{ width: 240, height: 240}}/>}
            >
            <Meta title={props.person.Name} style={{textAlign: 'center'}}/>
            </Card>
        </div>
    )
}