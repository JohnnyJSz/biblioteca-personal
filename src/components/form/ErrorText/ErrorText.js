/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styledComponents';

const ErrorText = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default ErrorText;