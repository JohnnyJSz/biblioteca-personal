import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { BackEndUrl } from "../../../config/access/backEnd";
import apiClient from "../../../utils/apiClient";
import { BOOKS } from "../../../config/routes/Paths";

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
    history.push(`/books/${id}`);
  };

  if (!isSuccess) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h3>Esta es la BOOKS_ID_DELETE</h3>
        <p>
          ¿Quieres eliminar de la biblioteca el libro{" "}
          <strong>{book.title}</strong>?
        </p>
        <button onClick={DeleteBook} disabled={isDeleting}>
          Eliminar
        </button>
        <button onClick={goBackToBook}>Volver al libro</button>
      </div>
    );
  }
};

export default BooksDelete;
