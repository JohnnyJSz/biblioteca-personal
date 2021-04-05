/* eslint-disable react/prop-types */
import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "../../ErrorText";

import {
  MainContainer,
  Label,
  FieldContainer,
  InputContainer as StyledInputContainer,
  Input as StyledInput,
  InputLabel as StyledInputLabel,
} from "./styledComponents";

const Radio = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <MainContainer>
      <Label htmlFor={name}>{label}</Label>
      <FieldContainer>
        <Field id={name} name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <StyledInputContainer key={option.key}>
                  <StyledInput
                    {...field}
                    type='radio'
                    id={option.value}
                    value={option.value}
                    defaultChecked={option.value === field.value}
                  />
                  <StyledInputLabel htmlFor={option.value}>
                    {option.key}
                  </StyledInputLabel>
                </StyledInputContainer>
              );
            });
          }}
        </Field>
      </FieldContainer>
      <ErrorMessage name={name} component={ErrorText} />
    </MainContainer>
  );
};

export default Radio;
