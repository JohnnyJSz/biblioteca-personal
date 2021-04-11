import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuthContext from '../../hooks/UseAuthContext';
import { HOME } from "../../config/routes/Paths";

const PrivateRoute = (props) => {
  const {isAuth} = useAuthContext();
  if (!isAuth) {
    return <Redirect to={HOME} />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;
