import React, {useState} from 'react';
import {useCookies} from 'react-cookie';
import {Button, Typography} from 'antd';
import {SmileOutlined} from '@ant-design/icons'

import Layout from '../components/Layout'
import Container from '../components/Container'
import ApiHelpers from '../helpers/api';
import COOKIE from '../constants/cookie';

const DEFAULT_STATE = {
    IS_INITIALIZING: false
};

function withGreeting(WrappedComponent) {
    return () => {
        const [cookies, setCookie] = useCookies([COOKIE.GREETING]);
        const [isInitializing, setInitializing] = useState(DEFAULT_STATE.IS_INITIALIZING);
        const greetingCookie = cookies[COOKIE.GREETING];

        if (!greetingCookie) {
            const handleGreeting = async (value) => {
                setInitializing(!DEFAULT_STATE.IS_INITIALIZING);
                await ApiHelpers.delay(1500);
                setCookie(COOKIE.GREETING, 1);
                setInitializing(DEFAULT_STATE.IS_INITIALIZING);
            };

            return (
                <Layout>
                    <Container className="main-container greeting">
                        <Typography.Title>
                            A joke is waiting for you
                        </Typography.Title>
                        <Typography.Title level={5}>
                            Let's press a smile button to explore!
                        </Typography.Title>
                        <Button
                            type="primary"
                            shape="circle"
                            size="large"
                            ghost
                            icon={<SmileOutlined/>}
                            loading={isInitializing}
                            onClick={() => handleGreeting(!DEFAULT_STATE.GREETING)}/>
                    </Container>
                </Layout>
            );
        }

        return <WrappedComponent/>;
    }
}

export default withGreeting;
