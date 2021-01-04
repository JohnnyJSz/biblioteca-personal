/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  FormContainer as StyledFormContainer,
  Form as StyledForm,
  Input as StyledInput,
  Button as StyledButton,
  FormInfo as StyledFormInfo,
} from "./styledComponents";

const BooksCreateView = ({
  // bookTitle,
  handleChangeTitle,
  // bookCategory,
  handleChangeCategory,
  handleSubmitForm,
}) => {
  const [bookTitle] = useState("");
  const [bookCategory] = useState("");

  return (
    <div>
      <h1>Añadir un libro</h1>
      <StyledFormContainer>
        <div style={{ margin: "0 auto" }}>
          <StyledForm onSubmit={handleSubmitForm}>
            <label>Título del libro</label>
            <StyledInput
              placeholder='Título del libro'
              type='text'
              // value={bookTitle}
              onChange={handleChangeTitle}
              required
            />
            <label>Categoría</label>
            <StyledInput
              placeholder='Categoría del libro'
              type='text'
              // value={}
              onChange={handleChangeCategory}
              required
            />
            <StyledButton type='submit'>Añadir Libro</StyledButton>
          </StyledForm>
        </div>
        <StyledFormInfo>
          <p>Titulo libro: {bookTitle}</p>
          <p>Categoria libro: {bookCategory}</p>
        </StyledFormInfo>
      </StyledFormContainer>
    </div>
  );
};

export default BooksCreateView;
