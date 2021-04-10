/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BackEndUrl } from "../../../config/access/backEnd";
//import { CATEGORIES } from "../../../config/routes/Paths";
import apiClient from "../../../utils/apiClient";
import PageNotFound from "../../pageNotFound/PageNotFound";
import SmallCard from "../../UI/smallCard";

import { Container, SubContainer, ControlsContainer } from "./styledComponents";

const CategoriesDelete = (props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const { location } = props;
  const { state } = location;
  const { categoryName } = state;

  const history = useHistory();

  const DeleteCategory = async() => {
    setIsDeleting(true);
    try {
      await apiClient.del(`${BackEndUrl}/categories/${id}`);
    } catch (error) {
      null;
    }
    setIsDeleting(false);
    history.push('/categories');
  };

  const goBackToCategories = () => {
    history.push('/categories');
  };

  if (categoryName !== undefined) {
    return (
      <Container>
        <h1>Eliminar categoría</h1>
        <SubContainer>
          <p>
            ¿Quieres eliminar de la biblioteca la categoría <strong>{categoryName}</strong>?
          </p>
          <ControlsContainer>
            <SmallCard onClick={DeleteCategory} disabled={isDeleting}>
              Eliminar
            </SmallCard>
            <SmallCard onClick={goBackToCategories}>
              Volver a las categorías
            </SmallCard>
          </ControlsContainer>
        </SubContainer>
      </Container>
    );
  } else {
    return <PageNotFound message='Category undefined'/>;
  }
  
};

export default CategoriesDelete;
