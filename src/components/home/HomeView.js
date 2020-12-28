import React from "react";
import PropTypes from "prop-types";

import {
  HomeMainContainer as StyledHomeMainContainer,
  Form as StyledForm,
  Button as StyledButton,
  Input as StyledInput
} from "./styledComponents";

const HomeView = ({
  handleSubmit,
  handleInputChange,
  magicWord,
  loginMessage,
}) => {
  return (
    <StyledHomeMainContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          placeholder='Palabra mágica'
          type='text'
          value={magicWord}
          onChange={handleInputChange}
        />
        <StyledButton type='submit'>Iniciar Sesión</StyledButton>
      </StyledForm>
      <p>{loginMessage}</p>
    </StyledHomeMainContainer>
  );
};

HomeView.propTypes = {
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  magicWord: PropTypes.string,
  loginMessage: PropTypes.string,
};

export default HomeView;
