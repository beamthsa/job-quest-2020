import React from 'react';
import {Layout as AntLayout} from 'antd';

import 'antd/dist/antd.css';
import './Layout.css';

const {Content} = AntLayout;

const Layout = ({children, ...props}) => (
    <AntLayout className="layout" {...props}>
        <Content>{children}</Content>
    </AntLayout>
);

export default Layout;
