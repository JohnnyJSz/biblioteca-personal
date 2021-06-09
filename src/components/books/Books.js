import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { BackEndUrl } from "../../config/access/backEnd";
import BooksView from "./BooksView";

const Books = () => {
  const [books, setBooks] = useState(null);
  const { isFailed, error, data } = useFetch(`${BackEndUrl}/books`, "GET");

  useEffect(() => {
    setBooks(data);
  }, [books, data]);

  if (books) {
    return <BooksView data={books} />;
  } else if (!books) {
    return <h2>Loading...</h2>;
  } else if (isFailed && error) {
    return (
      <div>
        <h2>Something went wrong, try again later 😢</h2>;
        <p>{error}</p>
      </div>
    );
  }
};

export default Books;
