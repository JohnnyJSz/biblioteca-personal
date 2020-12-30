/* eslint-disable react/prop-types */
import React from "react";
import BookItem from './bookItem';
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
const BooksView = ({ datosLibros, callStatus }) => {
  
  console.log(datosLibros);

  return (
    <div>
      <h1>Libros</h1>
      {datosLibros.map((libro) => (
        <BookItem key={libro.id} id={libro.id} titulo={libro.title} cover={libro.image}/>
      ))}
    </div>
  );
};

BooksView.propTypes = {
  datosLibros: PropTypes.array,
};

export default BooksView;
