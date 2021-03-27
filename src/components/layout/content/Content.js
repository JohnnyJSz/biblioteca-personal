import React from "react";
import PropTypes from "prop-types";
import { MainContent as StyledMainContent } from "./styledComponents";

const Content = ({ children }) => {
  return <StyledMainContent>{children}</StyledMainContent>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
