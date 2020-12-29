import React from "react";
import PropTypes from "prop-types";

const BooksView = ({ datosLibros }) => {
  console.log("datos recibidos a la view de books ", datosLibros);
  return (
    <div>
      <h1>Libros</h1>
      {datosLibros.map((libro) => (
        <div key={libro.id}>
          <p>{libro.title}</p>
        </div>
      ))}
    </div>
  );
};

BooksView.propTypes = {
  datosLibros: PropTypes.array,
};

export default BooksView;
