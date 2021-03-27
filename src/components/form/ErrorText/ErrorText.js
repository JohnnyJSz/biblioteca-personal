/* eslint-disable react/prop-types */
import React from 'react';

import { Container as StyledContainer } from './styledComponents';

const ErrorText = (props) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
};

export default ErrorText;