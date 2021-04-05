/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { BackEndUrl } from "../../../config/access/backEnd";
import { CATEGORIES } from "../../../config/routes/Paths";
import apiClient from "../../../utils/apiClient";
import PageNotFound from "../../pageNotFound/PageNotFound";
import SmallCard from "../../UI/smallCard";

import { Container, SubContainer, ControlsContainer } from "./styledComponents";

const CategoriesDelete = (props) => {
  console.log(props);
  const { location } = props;
  const { state } = location;
  const { categoryName } = state;
  const [isDeleting, setIsDeleting] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const DeleteCategory = async() => {
    setIsDeleting(true);
    try {
      await apiClient.del(`${BackEndUrl}/categories/${id}`);
    } catch (error) {
      null;
    }
    setIsDeleting(false);
    history.push(CATEGORIES);
  };

  const goBackToCategory = () => {
    history.goBack();
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
            <SmallCard onClick={goBackToCategory}>
              Volver a la categoría {categoryName}
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
