import React from "react";
import Books from '../../../images/books.png';
//import PropTypes from 'prop-types';

import useAuthContext from "../../../hooks/UseAuthContext";

import { Header as StyledHeader } from "./styledComponents";
import Nav from "../../nav/Nav";

const Header = () => {
  const { isAuth } = useAuthContext();
  return (
    <StyledHeader>
      <img src={Books} alt='latteAndCode Icon'/>
      {isAuth && <Nav />}
    </StyledHeader>
  );
};

// Header.propTypes = {

// };

export default Header;
