import React from "react";
import { NavLink } from "react-router-dom";

import { NavContainer as StyledNavContainer, Ul as StyledUl } from "./styledComponents";

import { BOOKS, CATEGORIES, LOGOUT } from "../../config/routes/Paths";

const Nav = () => {
  return (
    <StyledNavContainer>
      <StyledUl>
        <li>
          <NavLink activeClassName='active' to={BOOKS}>
            Libros
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to={CATEGORIES}>
            Categorías
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to={LOGOUT}>
            Cerrar Sesión
          </NavLink>
        </li>
      </StyledUl>
    </StyledNavContainer>
  );
};

export default Nav;
