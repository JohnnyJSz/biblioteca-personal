/* eslint-disable react/prop-types */
import React from "react";
import BookItem from "./bookItem";
import PropTypes from "prop-types";

function BooksView({isLoading, data}) {
  if (isLoading) {
    return <h2>Cargando...</h2>;
  } else {
    return (
      <div>
        <h1>Libros</h1>
        {data.map((libro) => (
          <BookItem key={libro.id} id={libro.id} title={libro.title} image={libro.image} categories={libro.categories} />
        ))}
      </div>
    );
  }
};

BooksView.propTypes = {
  datosLibros: PropTypes.array,
};

export default BooksView;
