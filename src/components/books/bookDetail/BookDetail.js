import React from "react";
import { useParams } from "react-router-dom";
import useFetch from '../../../hooks/useFetch';
import { BackEndUrl } from "../../../config/access/backEnd";
import BookDetailView from "./BookDetailView";

const BooksDetail = () => {
  const { id } = useParams();
  // const [datosLibro, setDatosLibro] = useState(null);

  // useEffect(() => {
  //   apiClient.get(`${BackEndUrl}/books/${id}`).then((data) => {
  //     setDatosLibro(data);
  //   });
  // }, [setDatosLibro, id]);
  const {isLoading, isSuccess, error, data} = useFetch(`${BackEndUrl}/books/${id}`, 'GET');
  console.log("BookDetail-isLoading",isLoading);
  console.log("BookDetail-isSuccess",isSuccess);
  console.log("BookDetail-error",error);
  console.log("BookDetail-data",data);

  return (
    <BookDetailView isLoading={isLoading} data={data} />
  );
};

export default BooksDetail;
