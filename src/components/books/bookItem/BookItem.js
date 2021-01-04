/* eslint-disable react/prop-types */
import React from "react";
import { generatePath } from "react-router-dom";
import Card from "../../UI/Card";
import { BOOKS_ID } from "../../../config/routes/Paths";

const BookItem = ({ id, title, image, categories }) => {
  return (
    <Card
      to={generatePath(BOOKS_ID, { id: id })}
      id={id}
      title={title}
      image={image}
      categories={categories}
    />
  );
};

export default BookItem;
