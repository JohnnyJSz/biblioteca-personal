import { useState, useEffect } from 'react';
import useFetch from "../../hooks/useFetch";
import { BackEndUrl } from "../../config/access/backEnd";
import BooksView from "./BooksView";

const Books = () => { 
  const [books, setBooks] = useState(null);
  const { isFailed, error, data} = useFetch(`${BackEndUrl}/books`, 'GET');

  useEffect(() => {
    setBooks(data);
    // return () => {
    //   setBooks(null);
    //   console.log('* books state: ',books);
    // };
  }, [books, data]);

  if (books) {
    console.log('books state: ALL GOOD!',books);
    return <BooksView data={books}/>;
  } else if (!books){
    console.log('books state: LOADING',books);
    return <h2>Loading...</h2>;
  } else if (isFailed && error){
    console.log('books state IF FAILED: ',books);
    return (
      <div>
        <h2>Ha ocurrido un error inesperado. Intentalo más adelante 😢</h2>;
        <p>{error}</p>
      </div>
    );
  }
};

export default Books;