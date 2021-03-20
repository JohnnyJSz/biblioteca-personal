/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import {
  GeneralContainer as StyledGeneralContainer,
  ImageContainer as StyledImageContainer,
  Img as StyledImg,
  InfoContainer as StyledInfoContainer,
  Title as StyledTitle,
  Info as StyledInfo,
  InfoCategories as StyledInfoCategories,
  InfoDescription as StyledInfoDescription,
} from "./styledComponents";

const Card = (props) => {
  const {
    to,
    title,
    image,
    categories,
    description,
    score,
    authors,
  } = props;

  return (
    <StyledGeneralContainer>
      <StyledImageContainer>
        {to ? (
          <Link to={to}>
            <StyledImg src={image} alt={`${title}_image`} />
          </Link>
        ) : (
          <StyledImg src={image} alt={`${title}_image`} />
        )}
      </StyledImageContainer>
      <StyledInfoContainer>
        <StyledTitle>
          {to ? (
            <Link to={to}>
              <h2>{title}</h2>
            </Link>
          ) : (
            <h2>{title}</h2>
          )}
        </StyledTitle>
        <StyledInfo>
          <StyledInfoCategories>
            <h3>Categorías</h3>
            <ul>
              {categories.length ? categories.map((category) => (
                <li key={category.id}>{category.name}</li>
              )) : 'No categories for the book have been added yet.'}
            </ul>
          </StyledInfoCategories>
          <StyledInfoDescription>
            <h3>Descripción</h3>
            <p>
              {description ? description : "No description for the book has been added yet."}
            </p>
            <h3>Puntuación</h3>
            <p>{score ? score : 'No score for the book has been added yet.'}</p>
          </StyledInfoDescription>
          <StyledInfoCategories>
            <h3>Autores</h3>
            <ul>
              {authors.length ? (
                authors.map((author) => <li key={author.id}>{author.name}</li>)
              ) : 'No authors for the book have been added yet.'}
            </ul>
          </StyledInfoCategories>
        </StyledInfo>
      </StyledInfoContainer>
    </StyledGeneralContainer>
  );
};

export default Card;
