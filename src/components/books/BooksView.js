import BookItem from "./bookItem";
import PropTypes from "prop-types";

import { Container } from "./styledComponents";

function BooksView({ data: books }) {
  return (
    <Container>
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
    </Container>
  );
}

BooksView.propTypes = {
  data: PropTypes.array,
};

export default BooksView;