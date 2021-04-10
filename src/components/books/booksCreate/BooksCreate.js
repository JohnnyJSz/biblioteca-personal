import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import useFetch from "../../../hooks/useFetch";
import apiClient from "../../../utils/apiClient";
import { BOOKS } from "../../../config/routes/Paths";
import { BackEndUrl } from "../../../config/access/backEnd";
import BooksCreateEditForm from "../BooksCreateEditForm";
import blobToBase64 from "../../../utils/blobToBase64";

import { Container } from './styledComponents';

const BooksCreate = () => {
  const history = useHistory();

  const {
    isSuccess: isSuccessCategoriesFetched,
    data: categoriesFetched,
  } = useFetch(`${BackEndUrl}/categories`, "GET");
  const { isSuccess: isSuccessAuthorsFetched, data: authorsFetched } = useFetch(
    `${BackEndUrl}/authors`,
    "GET"
  );

  const scoreOptions = [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
    { key: 4, value: 4 },
    { key: 5, value: 5 },
  ];

  const initialValues = {
    title: "",
    description: "",
    score: "",
    categories: [],
    image: "",
    authors: [],
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, "Title too short, min 2 characters")
      .required("Title field is required"),
    categories: Yup.array()
      .min(1, "Categories field is required")
      .required("Categories field is required")
      .nullable(),
    authors: Yup.array()
      .min(1, "Author/s field is required")
      .required("Author/s field is required")
      .nullable(),
  });

  const onSubmit = async(values) => {
    console.log("form data", values);

    let base64Image;
    if (values.image !== "") {
      let file = values.image;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      base64Image = await blobToBase64(file);
    } else {
      base64Image = "";
    }

    try {
      const body = {
        title: values.title,
        description: values.description,
        score: values.score,
        categories: values.categories,
        base64Image: base64Image,
        authors: values.authors,
      };
      const response = await apiClient.post(
        `${BackEndUrl}/books`,
        JSON.stringify(body)
      );
      console.log(response);
    } catch (error) {
      console.log("***", error);
    }
    console.log('Libro creado!');
    history.push(BOOKS);
  };

  if (isSuccessCategoriesFetched && isSuccessAuthorsFetched) {
    return (
      <Container>
        <h1>Añadir un libro</h1>
        <BooksCreateEditForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          categoriesFetched={categoriesFetched}
          authorsFetched={authorsFetched}
          scoreOptions={scoreOptions}
        />
      </Container>
    );
  } else {
    return <Container><h1>Loading...</h1></Container>;
  }
};

export default BooksCreate;
