import React from 'react';
import classNames from 'classnames';

import './Container.css';

const Container = ({className, ...props}) => (
    <div className={classNames(className, 'container')} {...props}/>
);

export default Container;
