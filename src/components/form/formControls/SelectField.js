/* eslint-disable react/prop-types */
import React from "react";
import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText";
import CreatableSelect from "react-select/creatable";

const SelectField = (props) => {
  const { label, name, options, dataToEdit, ...rest } = props;
  if (dataToEdit) {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
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
              />
            );
          }}
        </Field>
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    );
  } else {
    return <label>Loading...</label>;
  }
};

export default SelectField;