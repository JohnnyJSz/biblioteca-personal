import React from "react";
import PropTypes from 'prop-types';

const HomeView = ({handleSubmit, handleInputChange, magicWord, loginMessage}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Palabra mágica'
          type='text'
          value={magicWord}
          onChange={handleInputChange}
        />
        <button type='submit'>Iniciar Sesión</button>
      </form>
      <p>{loginMessage}</p>
    </>
  );
};

HomeView.propTypes = {
    handleSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    magicWord: PropTypes.string,
    loginMessage: PropTypes.string,
};

export default HomeView;
