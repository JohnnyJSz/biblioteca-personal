/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "../../ErrorText";

import {
  MainContainer as StyledMainContainer,
  MainLabel as StyledMainLabel,
  FieldContainer as StyledFieldContainer,
  InputContainer as StyledInputContainer,
  //InputLabel as StyledInputLabel,
  Input as StyledInput,
  ImgPreviewContainer as StyledImgPreviewContainer,
  Img as StyledImg,
} from "./styledComponents";

const File = (props) => {
  const { label, name, dataToEdit, ...rest } = props;
  const [imagePreview, setImagePreview] = useState(dataToEdit);
  return (
    <StyledMainContainer>
      <StyledMainLabel htmlFor={name}>{label}</StyledMainLabel>
      <Field id={name} name={name} {...rest}>
        {({ form }) => {
          //console.log('FIELD FILE value - ',field.value);
          return (
            <StyledInputContainer>
              <StyledInput
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
                <StyledImgPreviewContainer>
                  <StyledImg src={imagePreview} alt={`${label}_image`} />
                </StyledImgPreviewContainer>
              ) : null}
            </StyledInputContainer>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </StyledMainContainer>
  );
};

export default File;
