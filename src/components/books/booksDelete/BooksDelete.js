import { useState } from "react";
import { useParams, useHistory} from "react-router-dom";
import { BackEndUrl } from "../../../config/access/backEnd";
import { BOOKS } from "../../../config/routes/Paths";
import apiClient from "../../../utils/apiClient";
import PageNotFound from "../../pageNotFound/PageNotFound";
import SmallCard from "../../UI/smallCard";

import { Container, SubContainer, ControlsContainer } from "./styledComponents";

const BooksDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const DeleteBook = async() => {
    setIsDeleting(true);
    try {
      const response = await apiClient.del(`${BackEndUrl}/books/${id}`);
      console.log(response);
      history.push(BOOKS);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  if (id) {
    return (
      <Container>
        <h1>Delete a book</h1>
        <SubContainer>
          <p>Do you want to delete this book?</p>
          <ControlsContainer>
            <SmallCard onClick={DeleteBook} disabled={isDeleting}>
              Delete
            </SmallCard>
          </ControlsContainer>
        </SubContainer>
      </Container>
    );
  } else if (id === undefined) {
    return <PageNotFound  message='Book undefined'/>;
  } else {
    return <h2>Loading...</h2>;
  }
};

export default BooksDelete;