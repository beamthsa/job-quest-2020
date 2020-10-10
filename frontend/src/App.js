import React, {useState} from 'react';
import {Button, Typography} from 'antd';

import Container from './components/Container'
import Layout from './components/Layout';
import ApiHelpers from './helpers/api';
import './App.css';

const DEFAULT_STATE = {
    GREETING: false,
    USER_DATA: {},
    IS_INITIALIZING: false,
    IS_FORM_OPENING: false
};

function App() {
    const [greeting, setGreeting] = useState(DEFAULT_STATE.GREETING);
    const [isInitializing, setInitializing] = useState(DEFAULT_STATE.IS_INITIALIZING);

    const handleGreeting = async (value) => {
        setInitializing(!DEFAULT_STATE.IS_INITIALIZING);
        await ApiHelpers.delay(1500);
        setGreeting(value);
        setInitializing(DEFAULT_STATE.IS_INITIALIZING);
    };

    if (!greeting) {
        return (
            <Layout>
                <Container className="main-container greeting">
                    <Typography.Title>
                        A joke is waiting for you!
                    </Typography.Title>
                    <Button
                        size="large"
                        loading={isInitializing}
                        onClick={() => handleGreeting(!DEFAULT_STATE.GREETING)}>
                        Start
                    </Button>
                </Container>
            </Layout>
        );
    }

    return (
        <Layout>
            <Container/>
        </Layout>
    );
}

export default App;
