import React from "react";
import { NavLink } from "react-router-dom";

import { NavContainer as StyledNavContainer, Ul as StyledUl } from "./styledComponents";

import { BOOKS, BOOKS_CREATE, CATEGORIES, LOGOUT } from "../../config/routes/Paths";

const Nav = () => {
  return (
    <StyledNavContainer>
      <StyledUl>
        <li>
          <NavLink activeClassName='active' to={BOOKS} exact>
            Libros
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to={BOOKS_CREATE} exact>
            Añadir libro
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to={CATEGORIES} exact>
            Categorías
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to={LOGOUT} exact>
            Cerrar Sesión
          </NavLink>
        </li>
      </StyledUl>
    </StyledNavContainer>
  );
};

export default Nav;
