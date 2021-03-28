/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import SmallCard from "../smallCard";

import {
  GeneralContainer,
  ImageContainer,
  InfoContainer,
  // el DIV es Info,
  InfoDescription,
  InfoCategoriesAuthors,
} from "./styledComponents";

const MediumCard = (props) => {
  const {
    to,
    title,
    image,
    id,
    categories,
    description,
    score,
    authors,
  } = props;
  return (
    <GeneralContainer>
      <ImageContainer>
        <Link to={to ? to : "#"}>
          <img src={image} alt={`${title}_image`} />
        </Link>
      </ImageContainer>
      <InfoContainer>
        <Link to={to ? to : '#'}>
            <h1>{title}</h1>
        </Link>
        <div>
          <InfoDescription>{description}</InfoDescription>
          <h3>Categoría/s</h3>
          <InfoCategoriesAuthors>
            {categories?.length
              ? categories.map((category) => (
                  <SmallCard key={category.id}>{category.name}</SmallCard>
                ))
              : "No categories for the book have been added yet."}
          </InfoCategoriesAuthors>
          <div>
            {score ? <h3>Puntuación: {score}</h3> : <h3>Puntuación: n/a</h3>}
          </div>
          <h3>Autores</h3>
          <InfoCategoriesAuthors>
            {authors?.length
              ? authors.map((author) => (
                  <SmallCard key={author.id}>{author.name}</SmallCard>
                ))
              : "No authors for the book have been added yet."}
          </InfoCategoriesAuthors>
        </div>
      </InfoContainer>
    </GeneralContainer>
  );
};

export default MediumCard;