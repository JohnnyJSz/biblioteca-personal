import React, { useState, useEffect } from "react";
import apiClient from "../../utils/apiClient";
import { BackEndUrl } from "../../config/access/backEnd";
import BooksView from "./BooksView";

const Books = () => {
  const [datosLibros, setDatosLibros] = useState([]);

  useEffect(() => {
    apiClient.get(`${BackEndUrl}/books`).then((data) => {
      //console.log("datos de la api ",data);
      setDatosLibros(data);
    });
  }, []);

  return <BooksView datosLibros={datosLibros}/>;
};

export default Books;
