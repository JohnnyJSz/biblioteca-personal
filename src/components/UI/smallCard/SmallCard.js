/* eslint-disable react/prop-types */
import React from "react";
import { MyLink, Container } from "./styledComponents";

const SmallCard = ({ to, onClick, children }) => {
  return <MyLink to={to || '/#'} onClick={onClick}><Container>{children}</Container></MyLink>;
};

export default SmallCard;
