/* eslint-disable react/prop-types */
import React from "react";
import { generatePath } from "react-router-dom";
import Card from "../../UI/Card";
import { BOOKS_ID } from "../../../config/routes/Paths";

const BookItem = (props) => {
  const {id, title, image, categories, score, authors, description } = props;
  return (
    <Card
      to={generatePath(BOOKS_ID, { id: id })}
      title={title}
      image={image}
      categories={categories}
      score={score}
      authors={authors}
      description={description}
    />
  );
};

export default BookItem;
