import React from 'react';
import {Modal, Form, Input, InputNumber} from 'antd';

const JokeForm = ({modalProps, formProps}) => {
    const {onOk, ...restModalProps} = modalProps;
    const [form] = Form.useForm();

    return (
        <Modal
            visible
            onOk={async () => {
                try {
                    const values = await form.validateFields();
                    onOk(values);
                } catch (error) {
                    console.log('Validate Failed:', error);
                }
            }}
            {...restModalProps}>
            <Form
                form={form}
                layout="vertical" 
                {...formProps}>
                <Form.Item
                    name="firstName"
                    label="First name"
                    rules={[{required: true, message: 'First name is required'}]}
                >
                    <Input autoFocus/>
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Last name"
                    rules={[{required: true, message: 'Last name is required'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="amount"
                    label="How many joke you want"
                    rules={[
                        {required: true, message: 'Please add this!'},
                        {type: 'number', message: 'Why you not just add a number?'}
                    ]}
                >
                    <InputNumber/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default JokeForm;
