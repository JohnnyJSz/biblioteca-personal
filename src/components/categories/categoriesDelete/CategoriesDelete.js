/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { BackEndUrl } from "../../../config/access/backEnd";
import { CATEGORIES } from "../../../config/routes/Paths";
import apiClient from "../../../utils/apiClient";
import SmallCard from "../../UI/smallCard";

import { GeneralContainer, ControlsContainer } from "./styledComponents";

const CategoriesDelete = (props) => {
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

  return (
    <div>
      <h1>Eliminar categoría</h1>
      <GeneralContainer>
        <p>
          ¿Quieres eliminar de la biblioteca la categoría
          <strong>{categoryName}</strong>?
        </p>
        <ControlsContainer>
          <SmallCard onClick={DeleteCategory} disabled={isDeleting}>
            Eliminar
          </SmallCard>
          <SmallCard onClick={goBackToCategory}>
            Volver a la categoría {categoryName}
          </SmallCard>
        </ControlsContainer>
      </GeneralContainer>
    </div>
  );
};

export default CategoriesDelete;
