/* eslint-disable react/prop-types */
import React from "react";
import { generatePath } from "react-router";
import { BOOKS_ID, CATEGORIES_ID_DELETE } from "../../../config/routes/Paths";
import MediumCard from "../../UI/mediumCard";
import SmallCard from "../../UI/smallCard";

import { Container, ControlsContainer } from "./styledComponents";

const CategoriesDetailView = (props) => {
  const { categoryId, booksWithCategory, categoryName } = props;
  return (
    <Container>
      <h1>{categoryName}</h1>
      {categoryName ? <h3>All books with this category: {categoryName}</h3> : null}
      <div>
        {booksWithCategory.length ? (
          booksWithCategory.map((book) => {
            return (
              <MediumCard
                key={book.id}
                to={generatePath(BOOKS_ID, { id: book.id })}
                id={book.id}
                title={book.title}
                image={book.image}
                categories={book.categories}
                score={book.score}
                authors={book.authors}
                description={book.description}
              />
            );
          })
        ) : (
          <p>
            There is no books to display with this category{" "}
            <strong>{categoryName}</strong>
          </p>
        )}
        <ControlsContainer>
          <SmallCard
            to={{
              pathname: generatePath(CATEGORIES_ID_DELETE, { id: categoryId })
            }}
          >
            Delete category: {categoryName}
          </SmallCard>
        </ControlsContainer>
      </div>
    </Container>
  );
};

export default CategoriesDetailView;