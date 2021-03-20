/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ErrorMessage, FieldArray, Field } from "formik";
import ErrorText from "../ErrorText";

const FieldArr = (props) => {
  const { label, name } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <FieldArray name='authors' >
        {(fieldArrayProps) => {
          // console.log(fieldArrayProps);
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { authors } = values;
          return (
            <div>
              {authors.map((author, index) => {
                return (
                  <div key={index}>
                    <Field
                      name={`authors[${index}].name`}
                      placeholder='nombre del autor'
                    />
                    {index > 0 && (
                      <button type='button' onClick={() => remove(index)}>
                        -
                      </button>
                    )}
                    <button
                      type='button'
                      onClick={() => push({ id: "", name: "" })}
                    >
                      +
                    </button>
                  </div>
                );
              })}
            </div>
          );
        }}
      </FieldArray>
      <ErrorMessage name='authors' component={ErrorText} />
    </div>
  );
};

export default FieldArr;
