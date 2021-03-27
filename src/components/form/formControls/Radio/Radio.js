/* eslint-disable react/prop-types */
import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "../../ErrorText";

import {
  MainContainer as StyledMainContainer,
  Label as StyledLabel,
  FieldContainer as StyledFieldContainer,
  InputContainer as StyledInputContainer,
  Input as StyledInput,
  InputLabel as StyledInputLabel,
} from "./styledComponents";

const Radio = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <StyledMainContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledFieldContainer>
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
      </StyledFieldContainer>
      <ErrorMessage name={name} component={ErrorText} />
    </StyledMainContainer>
  );
};

export default Radio;
