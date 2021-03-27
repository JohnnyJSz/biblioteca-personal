/* eslint-disable react/prop-types */
import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from '../../ErrorText';

import {
  Container as StyledContainer,
  Label as StyledLabel,
} from "./styledComponents";

const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <StyledContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <Field id={name} name={name} {...rest} as='textarea' className='textarea'/>
      <ErrorMessage name={name} component={ErrorText} />
    </StyledContainer>
  );
};

export default Textarea;
