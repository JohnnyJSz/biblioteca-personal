/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Formik, Form } from "formik";
import FormControl from "./FormControl";

import {
  X as StyledX,
  MyFormik as StyledMyFormik,
  MyForm as StyledMyForm,
  Button as StyledButton,
} from "./styledComponents";

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
    <StyledX>
      <Formik
        initialValues={initialValues}
        enableReinitialize={enableReinitialize}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <StyledMyForm>
              <FormControl
                control='input'
                label='Título del libro'
                name='title'
              />
              <FormControl
                control='textarea'
                label='Descripción del libro'
                name='description'
              />

              <FormControl
                control='radio'
                label='Puntuación del libro'
                name='score'
                options={scoreOptions}
              />
              <FormControl
                control='select'
                label='Categoria del libro'
                name='categories'
                options={categoriesFetched}
                dataToEdit={formik.initialValues.categories}
              />
              <FormControl
                control='file'
                label='Imagen del libro'
                name='image'
                dataToEdit={formik.initialValues.image}
              />
              <FormControl
                control='select'
                label='Autor / Autores'
                name='authors'
                options={authorsFetched}
                dataToEdit={formik.initialValues.authors}
              />
              <StyledButton
                type='submit'
                disabled={!formik.isValid && !formik.dirty}
              >
                Submit
              </StyledButton>
            </StyledMyForm>
          );
        }}
      </Formik>
    </StyledX>
  );
};

export default FormContainer;

// FORMULARIO POR PASOS
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React, { useState } from "react";
// import { Formik, Form } from "formik";
// import FormControl from "./FormControl";

// import {
//   X as StyledX,
//   MyFormik as StyledMyFormik,
//   MyForm as StyledMyForm,
//   Button as StyledButton,
// } from "./styledComponents";

// const FormContainer = (props) => {
//   const [step, setStep] = useState(0);

//   const {
//     initialValues,
//     enableReinitialize,
//     validationSchema,
//     onSubmit,
//     scoreOptions,
//     categoriesFetched,
//     authorsFetched,
//   } = props;

//   return (
//     <StyledX>
//       <Formik
//         initialValues={initialValues}
//         enableReinitialize={enableReinitialize}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {(formik) => {
//           return (
//             <>
//             <StyledMyForm>
//               {
//                 step === 0 && (<React.Fragment><FormControl
//                   control='input'
//                   label='Título del libro'
//                   name='title'
//                 />
//                 <FormControl
//                   control='textarea'
//                   label='Descripción del libro'
//                   name='description'
//                 />
//                 </React.Fragment>)
//               }
//               {
//                 step === 1 && (<>
//                 <FormControl
//                 control='radio'
//                 label='Puntuación del libro'
//                 name='score'
//                 options={scoreOptions}
//               />
//               <FormControl
//                 control='select'
//                 label='Categoria del libro'
//                 name='categories'
//                 options={categoriesFetched}
//                 dataToEdit={formik.initialValues.categories}
//               />
//               <FormControl
//                 control='file'
//                 label='Imagen del libro'
//                 name='image'
//                 dataToEdit={formik.initialValues.image}
//               />
//               <FormControl
//                 control='select'
//                 label='Autor / Autores'
//                 name='authors'
//                 options={authorsFetched}
//                 dataToEdit={formik.initialValues.authors}
//               />
//                 </>)
//               }
//               {
//                 step === 2 && <StyledButton type='submit' disabled={!formik.isValid && !formik.dirty}>
//                 Submit
//               </StyledButton>
//               }
//             </StyledMyForm>
//             {
//               step < 2 && <button onClick={() => setStep(step + 1)}>Next step</button>
//             }
//             {
//               step > 0 && <button onClick={() => setStep(step - 1)}>Prev step</button>
//             }
//             </>
//           );
//         }}
//       </Formik>
//     </StyledX>
//   );
// };

// export default FormContainer;
