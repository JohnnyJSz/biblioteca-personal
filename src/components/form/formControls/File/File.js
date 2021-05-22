/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "../../ErrorText";

import {
  MainContainer,
  MainLabel,
  InputContainer,
  Input,
  ImgPreviewContainer,
  Img,
} from "./styledComponents";

const File = (props) => {
  const { label, name, dataToEdit, ...rest } = props;
  const [imagePreview, setImagePreview] = useState(dataToEdit);
  return (
    <MainContainer>
      <MainLabel htmlFor={name}>{label}</MainLabel>
      <Field id={name} name={name} {...rest}>
        {({ form }) => {
          return (
            <InputContainer>
              <Input
                name={name}
                type='file'
                onChange={(e) => {
                  form.setFieldValue(`${name}`, e.target.files[0]);
                  setImagePreview(
                    e.target.files[0]
                      ? URL.createObjectURL(e.target.files[0])
                      : ""
                  );
                }}
                id={name}
              />
              {imagePreview ? (
                <ImgPreviewContainer>
                  <Img src={imagePreview} alt={`${label}_image`} />
                </ImgPreviewContainer>
              ) : null}
            </InputContainer>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </MainContainer>
  );
};

export default File;
