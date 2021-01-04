import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { BackEndUrl } from "../../config/access/backEnd";
import BooksView from "./BooksView";

const Books = () => { 
  const {isLoading, isSuccess, error, data} = useFetch(`${BackEndUrl}/books`, 'GET');
  const [, setDatosLibros] = useState(null);
 
  useEffect(() => {
    setDatosLibros(data);
  }, [data]);

  return <BooksView isLoading={isLoading} isSuccess={isSuccess} error={error} data={data}/>;
};

export default Books;
