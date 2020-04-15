import React, {useState} from 'react'
import {Row, Typography, Form, Input, Button, Select, notification, Modal, Col} from 'antd';
import './Questions.scss';
import { SmileOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Option } = Select;


export default function Questions(){

    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };

    const onSubmit = () => {
        // HTTP Post Call to send email
        form.validateFields()
            .then(values => {
                form.resetFields();
                notification.open({
                    message: 'Sent',
                    description:
                        `Message Received ${values.name}! Thanks for contacting us!`,
                    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                });
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };

    return (
        <div className='question-wrapper'>
            <div className='question'>
                <Row>
                    <Col span={8} />
                    <Col span={8}>
                        <Title level={2} style={{textAlign: 'center'}}>Questions</Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} />
                    <Col span={8} style={{textAlign: 'center'}}>
                        <Button type='primary' onClick={showModal}>
                            Contact Us
                        </Button>
                    </Col>
                </Row>
            </div>
            <Modal
                title='Contact Us'
                visible={visible}
                onOk={onSubmit}
                onCancel={hideModal}
                okText='Submit'
                cancelText='Cancel'
            >
                <Form  {...layout} form={form}>
                    <Form.Item name='name' label='Name' rules={[{ required: true, message: 'Please enter your name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='email' label='Email' rules={[{ type: 'email',message: 'Please enter a valid E-mail!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='IssueType'
                        label='Select'
                        rules={[{ required: true, message: 'Please select a contact reason' }]}
                    >
                        <Select placeholder='Please select a contact reason'>
                        <Option value='bug'>Report a Bug</Option>
                        <Option value='feature'>Request a Feature</Option>
                        <Option value='hello'>Saying Hello</Option>
                        <Option value='other'>Other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={'body'} label='Description'>
                        <Input.TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}