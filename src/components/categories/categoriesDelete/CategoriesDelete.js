import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BackEndUrl } from "../../../config/access/backEnd";
import { CATEGORIES } from "../../../config/routes/Paths";
import apiClient from "../../../utils/apiClient";
import PageNotFound from "../../pageNotFound/PageNotFound";
import SmallCard from "../../UI/smallCard";

import { Container, SubContainer, ControlsContainer } from "./styledComponents";

const CategoriesDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const DeleteCategory = async() => {
    setIsDeleting(true);
    try {
      const response = await apiClient.del(`${BackEndUrl}/categories/${id}`);
      console.log(response);
      alert("Categoria eliminada de la biblioteca");
      history.push(CATEGORIES);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  if (id) {
    return (
      <Container>
        <h1>Delete Categories</h1>
        <SubContainer>
          <p>Do you want to delete this category?</p>
          <ControlsContainer>
            <SmallCard onClick={DeleteCategory} disabled={isDeleting}>
              Delete
            </SmallCard>
          </ControlsContainer>
        </SubContainer>
      </Container>
    );
  } else if (id === undefined) {
    return <PageNotFound message='Category undefined' />;
  } else {
    return <h2>Loading...</h2>;
  }
};

export default CategoriesDelete;
