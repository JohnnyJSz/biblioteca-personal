import React from "react";
import PropTypes from "prop-types";

import { MainContainer, Form, Button, Input } from "./styledComponents";

const HomeView = ({
  handleSubmit,
  handleInputChange,
  magicWord,
  loginMessage,
}) => {
  return (
    <MainContainer>
      <h1>📚</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='Palabra mágica'
          type='text'
          value={magicWord}
          onChange={handleInputChange}
        />
        <Button type='submit'>Iniciar Sesión</Button>
      </Form>
      <p>{loginMessage}</p>
    </MainContainer>
  );
};

HomeView.propTypes = {
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  magicWord: PropTypes.string,
  loginMessage: PropTypes.string,
};

export default HomeView;
