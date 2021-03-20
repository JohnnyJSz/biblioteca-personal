import React from "react";
import BookItem from "./bookItem";
import PropTypes from "prop-types";

function BooksView({ isLoading, data: books }) {
  if (isLoading) {
    return <h2>Cargando...</h2>;
  } else {
    return (
      <div>
        <h1>Libros</h1>
        {books.map((book) => {
          const {
            id,
            title,
            image,
            description,
            score,
            categories,
            authors,
          } = book;

          let shortDescription = "";
          description === null
            ? (shortDescription =
                "No description for the book has been added yet.")
            : (shortDescription = description.slice(0, 150).concat("..."));

          return (
            <BookItem
              key={id}
              id={id}
              title={title}
              image={image}
              score={score}
              categories={categories}
              description={shortDescription}
              authors={authors}
            />
          );
        })}
      </div>
    );
  }
}

BooksView.propTypes = {
  datosLibros: PropTypes.array,
};

export default BooksView;
