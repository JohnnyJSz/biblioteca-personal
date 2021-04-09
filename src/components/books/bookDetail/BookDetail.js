import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { BackEndUrl } from "../../../config/access/backEnd";
import BookDetailView from "./BookDetailView";
import PageNotFound from '../../pageNotFound';
import BooksCreate from "../booksCreate";

const BooksDetail = () => {
  const { id } = useParams();
  let urlId;
  if (id === 'create') {
    urlId = '';
  } else {
    urlId = id;
  }
  
  const { isLoading, isFailed, data } = useFetch(
    `${BackEndUrl}/books/${urlId}`,
    "GET"
  );

  if (id === 'create') {
    return <BooksCreate />;
  } else if (id !== 'create' && isFailed){
    return <PageNotFound message={`El libro con el id "${id}" no existe o no esta disponible`}/>;
  } else {
    return <BookDetailView isLoading={isLoading} data={data} />;
  }
};

export default BooksDetail;
