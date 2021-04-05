/* eslint-disable react/prop-types */
import React from "react";
import { ErrorMessage, Field } from "formik";
import ErrorText from "../../ErrorText";
import CreatableSelect from "react-select/creatable";

import {
  Container,
  Label,
  MyStyles,
} from "./styledComponents";

// const myStyles = {
//   menu: (provided) => ({
//     ...provided,
//     width: '46rem',
//     outline: 'none',
//     border: 'none',
//     borderStyle: 'none',
//   }),
//   option: (provided) => ({
//     ...provided,
//     width: '45rem',
//     outline: 'none',
//     border: 'none',
//     borderStyle: 'none',
//   }),
//   control: (provided) => ({
//     ...provided,
//     width: '45rem',
//     background: "red",
//     outline: 'none',
//     borderStyle: 'none',
//     // zIndex: 1,
//   }),
// };

const SelectField = (props) => {
  const { label, name, options, dataToEdit, ...rest } = props;
  if (dataToEdit) {
    return (
      <Container>
        <Label htmlFor={name}>{label}</Label>
        <Field id={name} name={name} {...rest} multiple={true}>
          {({ form }) => {
            return (
              <CreatableSelect
                isMulti
                onChange={(e) => form.setFieldValue(`${name}`, e)}
                options={options}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                getNewOptionData={(optionValue) => ({
                  id: "",
                  name: optionValue,
                })}
                name={name}
                defaultValue={dataToEdit}
                styles={MyStyles}
              />
            );
          }}
        </Field>
        <ErrorMessage name={name} component={ErrorText} />
      </Container>
    );
  } else {
    return <label>Loading...</label>;
  }
};

export default SelectField;
