/* eslint-disable react/prop-types */
import React from "react";
import BookItem from "../bookItem";
import { Link, generatePath } from "react-router-dom";
import { BOOKS_ID_EDIT, BOOKS_ID_DELETE } from "../../../config/routes/Paths";

const BooksDetailView = ({ isLoading, data: book }) => {
  if (isLoading) {
    return <h2>Cargando...</h2>;
  } else {
    console.log('libro a editar : ',book);
    return (
      <div>
        <BookItem
          id={book.id}
          title={book.title}
          image={book.image}
          categories={book.categories}
          description={book.description}
          score={book.score}
          authors={book.authors}
        />
        <div>
          <Link
            to={{
              pathname: generatePath(BOOKS_ID_EDIT, { id: book.id }),
              state: { bookToEdit: book },
            }}
          >
            Editar
          </Link>
          <Link to={generatePath(BOOKS_ID_DELETE, { id: book.id })}>
            Eliminar
          </Link>
        </div>
      </div>
    );
  }
};

export default BooksDetailView;
