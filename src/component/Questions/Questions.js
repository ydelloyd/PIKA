import React, {useState} from 'react'
import { Spin } from 'antd';
import { Row, Col, Avatar, Typography, Form, Input, InputNumber, Button, Select } from 'antd';
import './Questions.scss'
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;


export default function Questions(props){

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
      
    const validateMessages = {
        required: 'This field is required!',
        types: {
          email: 'Not a validate email!',
          number: 'Not a validate number!',
        },
        number: {
          range: 'Must be between ${min} and ${max}',
        },
    };
      
    const onFinish = values => {
        // HTTP Post Call to send email
        console.log(values);
    }

    return (
        <div className='componentDiv'>
            <Row>
            <Title>Questions?</Title>
            </Row>
            <Row>
            <Paragraph>Contact Us</Paragraph>
            </Row>
            <Row>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={'name'} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={'email'} label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="IssueType"
                    label="Select"
                    rules={[{ required: true, message: 'Please select a contact reason' }]}
                >
                    <Select placeholder="Please select a contact reason">
                    <Option value="bug">Report a Bug</Option>
                    <Option value="feature">Request a Feature</Option>
                    <Option value="hello">Saying Hello</Option>
                    <Option value="other">Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item name={'body'} label="Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </Row>
        </div>
    )
}