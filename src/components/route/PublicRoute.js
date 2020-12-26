import React from "react";
import { Redirect, Route } from "react-router-dom";

import useAuthContext from '../../hooks/UseAuthContext';

import { BOOKS } from "../../config/routes/Paths";

const PublicRoute = (props) => {
  const {isAuth} = useAuthContext();
  if (isAuth) {
    return <Redirect to={BOOKS} />;
  }
  return <Route {...props} />;
};

export default PublicRoute;