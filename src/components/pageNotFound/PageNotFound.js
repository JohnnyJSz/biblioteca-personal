/* eslint-disable react/prop-types */
import React from "react";

const PageNotFound = ({ message }) => {
  return (
    <div>
      <h1>404 ❌</h1>
      <h2>Oops! The page you are looking for doesn't exist 😔</h2>
      <br/>
      <h2>{message}</h2>
    </div>
  );
};

export default PageNotFound;
