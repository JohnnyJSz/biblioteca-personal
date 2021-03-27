import React from "react";
import { NavLink } from "react-router-dom";
import Books from "../../../images/books.png";
import useAuthContext from "../../../hooks/UseAuthContext";
import { BOOKS } from "../../../config/routes/Paths";
import { Header as StyledHeader } from "./styledComponents";
import Nav from "../../nav/Nav";

const Header = () => {
  const { isAuth } = useAuthContext();
  return (
    <StyledHeader>
      <NavLink activeClassName='active' to={BOOKS} exact>
        <img src={Books} alt='latteAndCode Icon' />
      </NavLink>
      {isAuth && <Nav />}
    </StyledHeader>
  );
};

export default Header;
