import React, {useState, useEffect} from 'react';
import {Typography, Button, Space, notification} from 'antd';
import {SmileOutlined} from '@ant-design/icons'
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import Container from './components/Container'
import Layout from './components/Layout';
import JokeForm from './components/JokeForm';
import Quote from './components/Quote';
import withGreeting from './hocs/withGreeting';
import useJoke from './hooks/useJoke';
import './App.css';

const DEFAULT_STATE = {
    USER_DATA: {},
    IS_FORM_OPENING: false
};

function App() {
    const [userData, setUserData] = useState(DEFAULT_STATE.USER_DATA);
    const [isFormOpening, setFormOpening] = useState(DEFAULT_STATE.IS_FORM_OPENING);
    const {data, isFetching, updateAmount} = useJoke();

    const onFormSubmit = async ({firstName, lastName, amount}) => {
        try {
            await updateAmount(amount);
            setUserData({firstName, lastName, amount});
        } catch (error) {
            notification.error({
                message: 'Joke is all around you but not this time!'
            });
        }

        setFormOpening(DEFAULT_STATE.IS_FORM_OPENING);
    };

    const onFormCancel = () => setFormOpening(DEFAULT_STATE.IS_FORM_OPENING);

    useEffect(() => {
        setFormOpening(!DEFAULT_STATE.IS_FORM_OPENING);
    }, []);

    const name = `${userData.firstName || ''} ${userData.lastName || ''}`.trim();

    return (
        <Layout>
            <Container className="main-container">
                <Typography.Title className="name">
                    {!!name && `Hi, ${name}`}
                </Typography.Title>
                    {!isFormOpening && (
                        <Space>
                            {isEmpty(data)
                                ? 'Get a joke'
                                : 'This kind of joke does not fit for you?'}
                            <Button
                                type="primary"
                                shape="circle"
                                ghost
                                icon={<SmileOutlined/>}
                                onClick={() => setFormOpening(!DEFAULT_STATE.IS_FORM_OPENING)}/>
                        </Space>
                    )}
                {map(data, (value, index) => (
                    <Quote key={value.id || index} text={value.joke}/>
                ))}
                {isFormOpening && (
                    <JokeForm
                        modalProps={{
                            okText: 'Confirm',
                            onOk: onFormSubmit,
                            onCancel: onFormCancel,
                            okButtonProps: {
                                loading: isFetching
                            },
                            cancelButtonProps: {
                                disabled: isFetching
                            }
                        }}
                        formProps={{initialValues: userData}}/>
                )}
            </Container>
        </Layout>
    );
}

export default withGreeting(App);
