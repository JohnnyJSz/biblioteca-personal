/* eslint-disable react/prop-types */
import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "../ErrorText";

const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} as='textarea'/>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Textarea;
