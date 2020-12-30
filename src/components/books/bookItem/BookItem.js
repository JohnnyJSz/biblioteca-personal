/* eslint-disable react/prop-types */
import React from "react";
import {
  Img as StyledImg,
  BookCard as StyledBookCard,
  BookCardInfo as StyledBookCardInfo,
} from "./styledComponents";

const BookItem = ({ id, titulo, cover }) => {
  return (
    <StyledBookCard>
      <StyledImg src={cover} alt={`${titulo} cover`} />
      <StyledBookCardInfo>
        <h3>{titulo}</h3>
        <h4>Libro Id: {id}</h4>
        <p>
          Esto es un texto de prueba, como si fuese una breve descripción de
          cada libro.
        </p>
      </StyledBookCardInfo>
    </StyledBookCard>
  );
};

export default BookItem;
