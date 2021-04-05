import React from "react";
import PropTypes from "prop-types";
import { MainContent } from "./styledComponents";

const Content = ({ children }) => {
  return <MainContent>{children}</MainContent>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
