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

const Card = ({ to, id, title, image, categories }) => {
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
              {categories.map((categoria) => {
                <li key={categoria.id}>{categoria.name}</li>;
              })}
            </ul>
          </StyledInfoCategories>
          <StyledInfoDescription>
              <h3>Descripción</h3>
              <p>Esto es una breve descripción.</p>
              <h4>Id del libro: {id}</h4>
          </StyledInfoDescription>
        </StyledInfo>
      </StyledInfoContainer>
    </StyledGeneralContainer>
  );
};

export default Card;
