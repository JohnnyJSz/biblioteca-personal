/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { generatePath, Link } from "react-router-dom";
import { CATEGORIES_ID } from '../../../config/routes/Paths';
import SmallCard from "../smallCard";

import {
  Container,
  ImageContainer,
  InfoContainer,
  RestInfo,
  InfoCategoriesAuthors,
} from "./styledComponents";

const MediumCard = (props) => {
  const {
    to,
    id,
    title,
    image,
    categories,
    description,
    score,
    authors,
  } = props;
  return (
    <Container>
      <ImageContainer>
        <Link to={to ? to : "/#"}>
          <img src={image} alt={`${title}_image`} />
        </Link>
      </ImageContainer>
      <InfoContainer>
        <Link to={to ? to : '/#'}>
            <h1>{title}</h1>
        </Link>
        <RestInfo>
          <div>{description}</div>
          <h3>Categoría/s</h3>
          <InfoCategoriesAuthors>
            {categories?.length
              ? categories.map((category) => (
                  <SmallCard 
                    key={category.id}
                    to={{
                      pathname: generatePath(CATEGORIES_ID, {id: category.id}),
                      //state: { books: props },
                    }}
                  >{category.name}</SmallCard>
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
        </RestInfo>
      </InfoContainer>
    </Container>
  );
};

export default MediumCard;
