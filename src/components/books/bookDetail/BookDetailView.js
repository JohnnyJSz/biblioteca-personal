/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import BookItem from "../bookItem";
import { generatePath } from "react-router-dom";
import { BOOKS_ID_EDIT, BOOKS_ID_DELETE } from "../../../config/routes/Paths";
import SmallCard from "../../UI/smallCard";
import { Container, ControlsContainer } from "./styledComponents";

const BooksDetailView = ({ isLoading, data: book }) => {
  if (!isLoading && book) {
    return (
      <Container>
        <BookItem
          id={book.id}
          title={book.title}
          image={book.image}
          categories={book.categories}
          description={book.description}
          score={book.score}
          authors={book.authors}
        />
        <ControlsContainer>
          <SmallCard
            to={{
              pathname: generatePath(BOOKS_ID_EDIT, { id: book.id })
            }}
          >
            Editar
          </SmallCard>
          <SmallCard to={generatePath(BOOKS_ID_DELETE, { id: book.id })}>
            Eliminar
          </SmallCard>
        </ControlsContainer>
      </Container>
    );
  } else {
    return <h2>Cargando...</h2>;
  }
};

export default BooksDetailView;
