import React from 'react';
import {Typography} from 'antd';
import classNames from 'classnames';

import './Quote.css';

const Quote = ({className, text, ...props}) => (
    <Typography.Title className={classNames(className, 'quote')} {...props}>
        &ldquo;
        <span dangerouslySetInnerHTML={{ __html: text }}/>
        &rdquo;
    </Typography.Title>
);

Quote.defaultProps = {
    level: 3
};

export default Quote;
