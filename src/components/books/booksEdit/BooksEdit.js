import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
import blobToBase64 from "../../../utils/blobToBase64";
import apiClient from "../../../utils/apiClient";
import useFetch from "../../../hooks/useFetch";
import { BackEndUrl } from "../../../config/access/backEnd";
import { BOOKS } from "../../../config/routes/Paths";
import BooksCreateEditForm from "../BooksCreateEditForm";

import { Container } from "./styledComponents";

const BooksEdit = () => {
  const { id } = useParams();
  const history = useHistory();

  const { isSuccess: isSuccessBookFetched, data: bookFetched } = useFetch(
    `${BackEndUrl}/books/${id}`,
    "GET"
  );
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
    let base64Image;
    let file = values.image;
    if (file instanceof Blob) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      base64Image = await blobToBase64(file);
    } else {
      file = "";
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
      const url = bookFetched
        ? `${BackEndUrl}/books/${bookFetched.id}`
        : `${BackEndUrl}/books`;
      const response = await apiClient.post(url, JSON.stringify(body));
      console.log(response);
    } catch (error) {
      console.log("***", error);
    }
    history.push(BOOKS);
  };

  if (
    isSuccessBookFetched &&
    isSuccessAuthorsFetched &&
    isSuccessCategoriesFetched
  ) {
    return (
      <Container>
        <h1>Editar un libro</h1>
        <BooksCreateEditForm
          initialValues={bookFetched}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          categoriesFetched={categoriesFetched}
          authorsFetched={authorsFetched}
          scoreOptions={scoreOptions}
        />
      </Container>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default BooksEdit;
