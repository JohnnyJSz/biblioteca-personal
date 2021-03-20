/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "../ErrorText";

const File = (props) => {
  const { label, name, dataToEdit, ...rest } = props;
  const [imagePreview, setImagePreview] = useState(dataToEdit);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ form, field }) => {
          //console.log('FORM FILE - ',form);
          //console.log('FIELD FILE - ',field);
          console.log('FIELD FILE value - ',field.value);
          return (
            <div>
              <input
                name={name}
                type='file'
                onChange={(e) => {
                  form.setFieldValue(`${name}`, e.target.files[0]);
                  setImagePreview(e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : '');
                }}
              />
              {imagePreview ? (
                <div>
                  <img src={imagePreview} alt={`${label}_image`} />
                </div>
              ) : null}
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default File;
