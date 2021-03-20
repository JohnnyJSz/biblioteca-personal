/* eslint-disable react/prop-types */
import React from "react";
import { Formik, Form } from "formik";
import FormControl from "./FormControl";

const FormContainer = (props) => {
  const {
    initialValues,  
    enableReinitialize, 
    validationSchema,
    onSubmit,
    scoreOptions,
    categoriesFetched,
    authorsFetched,
  } = props;
  
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={enableReinitialize}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log(formik);
        return (
          <Form>
            <FormControl
              control='input'
              label='Título del libro'
              name='title'
            />
            <FormControl
              control='textarea'
              label='Descripción del libro'
              name='description'
              //dataToEdit={formik.initialValues.description}
            />
            <FormControl
              control='radio'
              label='Puntuación del libro'
              name='score'
              options={scoreOptions}
              //dataToEdit={formik.initialValues.score}
            />
            <FormControl
              control='select'
              label='Categoria del libro'
              name='categories'
              options={categoriesFetched}
              dataToEdit={formik.initialValues.categories}
            />
            <FormControl control='file' label='Imagen del libro' name='image' dataToEdit={formik.initialValues.image}/>
            <FormControl
              control='select'
              label='Autor / Autores'
              name='authors'
              options={authorsFetched}
              dataToEdit={formik.initialValues.authors}
            />
            <button type='submit' disabled={!formik.isValid && !formik.dirty}>
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormContainer;
