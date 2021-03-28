/* eslint-disable react/prop-types */
import React from "react";
import BookItem from "../bookItem";
import { generatePath } from "react-router-dom";
import { BOOKS_ID_EDIT, BOOKS_ID_DELETE } from "../../../config/routes/Paths";
import SmallCard from "../../UI/smallCard";
import { GeneralContainer, ControlsContainer } from './styledComponents';

const BooksDetailView = ({ isLoading, data: book }) => {
  if (isLoading) {
    return <h2>Cargando...</h2>;
  } else {
    console.log("libro a editar : ", book);
    return (
      <GeneralContainer>
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
              pathname: generatePath(BOOKS_ID_EDIT, { id: book.id }),
              state: { bookToEdit: book },
            }}
            success
          >
            Editar
          </SmallCard>
          <SmallCard to={generatePath(BOOKS_ID_DELETE, { id: book.id })} danger>
            Eliminar
          </SmallCard>
        </ControlsContainer>
      </GeneralContainer>
    );
  }
};

export default BooksDetailView;
