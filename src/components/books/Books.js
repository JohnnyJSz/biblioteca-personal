import { useState, useEffect } from 'react';
import useFetch from "../../hooks/useFetch";
import { BackEndUrl } from "../../config/access/backEnd";
import BooksView from "./BooksView";

const Books = () => { 
  const [books, setBooks] = useState(null);
  const {isLoading, isSuccess, error, data} = useFetch(`${BackEndUrl}/books`, 'GET');

  useEffect(() => {
    setBooks(data);
    return () => {
      setBooks(null);
    };
  }, [data]);

  if (!isLoading && isSuccess && books) {
    return <BooksView data={books}/>;
  } else if (isLoading && !isSuccess){
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <h2>Ha ocurrido un error inesperado. Intentalo más adelante 😢</h2>;
        <p>{error}</p>
      </div>
    );
  }
};

export default Books;