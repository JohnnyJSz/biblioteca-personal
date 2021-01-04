import React, { useState } from "react";
//import useFetch from "../../../hooks/useFetch";
import apiClient from "../../../utils/apiClient";
import { BackEndUrl } from "../../../config/access/backEnd";
//import BooksCreateView from "./BooksCreateView";
import {
    FormContainer as StyledFormContainer,
    Form as StyledForm,
    Input as StyledInput,
    Button as StyledButton,
    FormInfo as StyledFormInfo,
  } from "./styledComponents";

const BooksCreate = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookCategory, setBookCategory] = useState("");

  function handleChangeTitle(event) {
    setBookTitle(event.target.value);
  }
  function handleChangeCategory(event) {
    setBookCategory(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const body = {
        title: bookTitle,
        categories: {
          0: {
            name: bookCategory,
          },
        },
      };
      const response = await apiClient.post(
        `${BackEndUrl}/books`,
        JSON.stringify(body)
      );
      console.log(response);
    } catch (error) {
      console.log("***", error);
    }
    setBookTitle("");
    setBookCategory("");
  }

  //   const infoPost = useFetch(
  //     `${BackEndUrl}/books`,
  //     "POST",
  //     JSON.stringify(body)
  //   );
  //   PostData();

  //   return (
  //     <BooksCreateView
  //     //   bookTitle={bookTitle}
  //       handleChangeTitle={handleChangeTitle}
  //     //   bookCategory={bookCategory}
  //       handleChangeCategory={handleChangeCategory}
  //       handleSubmitForm={handleSubmitForm}
  //     />
  //   );
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
              value={bookTitle}
              onChange={handleChangeTitle}
              required
            />
            <label>Categoría</label>
            <StyledInput
              placeholder='Categoría del libro'
              type='text'
              value={bookCategory}
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

export default BooksCreate;
