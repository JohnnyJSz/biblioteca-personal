import { useEffect, useState } from "react";
import apiClient from "../utils/apiClient";

/* 
  el custom Hook useFetch va a recibir como parámetros para operar
    url - la URL para hacer las llamadas necesarias a la API
    method - el método a usar para hacer llamadas GET, POST, DELETE...
*/

const useFetch = ({ url, method, body }) => {
  /* 
    La estructura por defecto del objeto a devolver por el custom hook antes de hacer la llamada a la API es la siguiente:
      esta cargando - true
      ha sido exitoso - false
      ha fallado - false
      datos obtenidos - null

    A partir de aquí tenemos que hacer las operaciones pertinentes para obtener los datos
  */
  const [fetchState, setFetchState] = useState({
    isLoading: true,
    isSuccess: false,
    isFailed: false,
    error: null,
    data: null
  });

  /* 
    usamos el hook useEffect para hacer la llamada asíncrona a la API
    Para ello vamos a depender del método que le hayamos pasado con lo cual vamos a tener varios casos

    Para hacer las llamadas haremos uso de async await, esto lo tendremos que hacer dentro de un callback necesario por el hook useEffect.
    
    Dentro de esta función asíncrona usaremos el bloque try/catch para manejar los errores sucedidos durante la ejecución del código asíncrono.
  */

  useEffect(() => {
    const fetchData = async() => {
      try {
        let result = null;
        switch (method) {
          case 'GET':
            result = await apiClient.get(url);
            break;
          case 'POST':
            result = await apiClient.post(url, body);
            break;
          default:
            throw new Error('Métodos para llamar a la api no validos');
        }
        // if (method === "GET") {
        //   //result = await apiClient.get(url);
        //   return result = apiClient.get(url);
        // } else if (method === "POST") {
        //   return result = apiClient.post(url, body);
        // } else {
        //   throw new Error("Invalid FAIL");
        // }
        setFetchState({
          isLoading: false,
          isSuccess: true,
          isFailed: false,
          error: null,
          data: result
        });
      } catch (error) {
        // setFetchState({
        //   isLoading: false,
        //   isSuccess: false,
        //   isFailed: true,
        //   error: error,
        //   data: null
        // });
        console.log(error);
      }
    };
    fetchData();
  }, [url, method, body]);
  return fetchState;
};

export default useFetch;
