/* eslint-disable react/prop-types */
import React from "react";
import { generatePath } from "react-router-dom";
import MediumCard from "../../UI/mediumCard";
import { BOOKS_ID } from "../../../config/routes/Paths";

const BookItem = (props) => {
  const {id, title, image, categories, score, authors, description } = props;
  return (
    <MediumCard
      to={generatePath(BOOKS_ID, { id: id })}
      id={id}
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
