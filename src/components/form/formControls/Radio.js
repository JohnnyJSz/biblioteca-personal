/* eslint-disable react/prop-types */
import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "../ErrorText";

const Radio = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  {...field}
                  type='radio'
                  id={option.value}
                  value={option.value}
                  defaultChecked={option.value===field.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Radio;
