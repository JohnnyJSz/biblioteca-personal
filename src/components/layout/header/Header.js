import React from "react";
import { NavLink } from "react-router-dom";
import Books from "../../../images/books.png";
import useAuthContext from "../../../hooks/UseAuthContext";
import { BOOKS } from "../../../config/routes/Paths";
import { Header as StyledHeader } from "./styledComponents";
import Nav from "../../nav/Nav";

const Header = () => {
  const { isAuth } = useAuthContext();
  let classNameToApply;
  if (isAuth) {
    classNameToApply = 'iconAuth';
  } else {
    classNameToApply = 'iconNoAuth';
  }

  return (
    <StyledHeader>
      <NavLink className={`${classNameToApply}`} to={BOOKS} exact>
        <img className={`${classNameToApply}_img`} src={Books} alt='latteAndCode Icon' />
      </NavLink>
      {isAuth && <Nav />}
    </StyledHeader>
  );
};

export default Header;
