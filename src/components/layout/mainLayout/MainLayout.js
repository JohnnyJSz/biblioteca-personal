import React from "react";
import PropTypes from "prop-types";
import { MainLayout as StyledMainLayout } from "./styledComponents";

import Header from "../header";
import Content from "../content";
import Footer from "../footer";

const MainLayout = ({ children }) => {
  return (
    <StyledMainLayout>
      <Header/>
      <Content>{children}</Content>
      <Footer/>
    </StyledMainLayout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
