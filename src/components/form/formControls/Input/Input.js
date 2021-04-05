/* eslint-disable react/prop-types */
import React from "react";
import { ErrorMessage } from "formik";
import ErrorText from '../../ErrorText';

import {
  Container,
  Label,
  MyField as StyledField,
} from "./styledComponents";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledField id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </Container>
  );
};

export default Input;
