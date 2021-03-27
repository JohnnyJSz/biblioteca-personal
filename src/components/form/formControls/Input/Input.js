/* eslint-disable react/prop-types */
import React from "react";
import { ErrorMessage } from "formik";
import ErrorText from '../../ErrorText';

import {
  Container as StyledContainer,
  Label as StyledLabel,
  MyField as StyledField,
} from "./styledComponents";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <StyledContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledField id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </StyledContainer>
  );
};

export default Input;
