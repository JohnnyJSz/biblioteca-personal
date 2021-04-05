import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { BackEndUrl } from "../../../config/access/backEnd";
import apiClient from "../../../utils/apiClient";
import { BOOKS } from "../../../config/routes/Paths";
import SmallCard from "../../UI/smallCard";

import { Container, SubContainer, ControlsContainer } from "./styledComponents";

const BooksDelete = () => {
  const { id } = useParams();
  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);

  const { isSuccess, data: book } = useFetch(
    `${BackEndUrl}/books/${id}`,
    "GET"
  );

  const DeleteBook = async() => {
    setIsDeleting(true);
    try {
      await apiClient.del(`${BackEndUrl}/books/${id}`);
    } catch (error) {
      null;
    }
    setIsDeleting(false);
    history.push(BOOKS);
  };

  const goBackToBook = () => {
    history.push(BOOKS);
  };

  if (!isSuccess) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
        <h1>Eliminar libro</h1>
        <SubContainer>
          <p>
            ¿Quieres eliminar de la biblioteca el libro{" "}
            <strong>{book.title}</strong>?
          </p>
          <ControlsContainer>
            <SmallCard onClick={DeleteBook} disabled={isDeleting}>
              Eliminar
            </SmallCard>
            <SmallCard onClick={goBackToBook}>Volver al libro</SmallCard>
          </ControlsContainer>
        </SubContainer>
      </Container>
    );
  }
};

export default BooksDelete;
