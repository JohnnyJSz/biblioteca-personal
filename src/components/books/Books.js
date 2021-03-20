import React from "react";
import useFetch from "../../hooks/useFetch";
import { BackEndUrl } from "../../config/access/backEnd";
import BooksView from "./BooksView";

const Books = () => { 
  const {isLoading, isSuccess, error, data} = useFetch(`${BackEndUrl}/books`, 'GET');

  return <BooksView isLoading={isLoading} isSuccess={isSuccess} error={error} data={data}/>;
};

export default Books;
