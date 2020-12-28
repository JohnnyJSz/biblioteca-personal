import React from "react";
import PropTypes from "prop-types";
import { MainLayout as StyledMainLayout } from "./styledComponents";

import Header from "../header";
import Footer from "../footer";

const MainLayout = ({ children }) => {
  return (
    <StyledMainLayout>
      <Header />
      <div className='mainContent'>{children}</div>
      <Footer />
    </StyledMainLayout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
