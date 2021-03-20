/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import blobToBase64 from "../../../utils/blobToBase64";
import apiClient from "../../../utils/apiClient";
import useFetch from "../../../hooks/useFetch";
import { BackEndUrl } from "../../../config/access/backEnd";
import { BOOKS } from "../../../config/routes/Paths";
import BooksCreateView from "../booksCreate/BooksCreateView";

const BooksEdit = (props) => {
  const { location } = props;
  const { state } = location;
  const { bookToEdit } = state;

  const [formValues, setFormValues] = useState(bookToEdit);

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

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, "Title too short, min 2 characters")
      .required("Title field is required")
      .nullable(),
    // description: Yup.string()
    //   .min(10, "Description too short, min 20 characters")
    //   .required("Description field is required")
    //   .nullable(),
    // score: Yup.number().required("Score field is required"),
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
    console.log("Form data : ", values);

    let base64Image;
    let file = values.image;
    if (file instanceof Blob) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      base64Image = await blobToBase64(file);
    } else {
      file = '';
      base64Image = file;
    }

    let score = parseInt(values.score);
    
    try {
      const body = {
        title: values.title,
        description: values.description,
        score: score,
        categories: values.categories,
        base64Image: base64Image,
        authors: values.authors,
      };
      const url = bookToEdit
        ? `${BackEndUrl}/books/${bookToEdit.id}`
        : `${BackEndUrl}/books`;
      const response = await apiClient.post(url, JSON.stringify(body));
      console.log(response);
    } catch (error) {
      console.log("***", error);
    }
    console.log("*_*_*_LIBRO EDITADO_*_*_*");
    history.push(BOOKS);
  };

  if (bookToEdit && isSuccessAuthorsFetched && isSuccessCategoriesFetched) {
    return (
      <div>
        <BooksCreateView
          initialValues={formValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          categoriesFetched={categoriesFetched}
          authorsFetched={authorsFetched}
          scoreOptions={scoreOptions}
        />
      </div>
    );
  } else {
    return <h2>Loading EDIT...</h2>;
  }
};

export default BooksEdit;
