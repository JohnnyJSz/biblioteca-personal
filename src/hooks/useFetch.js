import { useEffect, useState } from "react";
import apiClient from "../utils/apiClient";

export default function useFetch(url, method, body) {
  const [fetchState, setFetchState] = useState({
    isLoading: true,
    isSuccess: false,
    isFailed: false,
    data: null,
    error: null,
  });

  useEffect(
    function() {
      async function fetchData() {
        try {
          let result = null;
          switch (method) {
            case "GET":
              result = await apiClient.get(url);
              break;
            case "POST":
              result = await apiClient.post(url, body);
              break;
            case 'DELETE':
              result = await apiClient.del(url);
              break;
            default:
              throw new Error("Método invalido");
          }
          if (result !== "Book not found") {
            // ha hecho fetch con exito
            setFetchState({
              isLoading: false,
              isSuccess: true,
              isFailed: false,
              error: null,
              data: result,
            });
          } else {
            // ha hecho fetch con SIN exito y el resultado es imprevisto
            setFetchState({
              isLoading: false,
              isSuccess: true,
              isFailed: true,
              error: null,
              data: result,
            });
          }
        } catch (error) {
          setFetchState({
            isLoading: false,
            isSuccess: false,
            isFailed: true,
            error,
            data: null,
          });
        }
      }
      fetchData();
    },
    [url, method, body]
  );
  
  return fetchState;
}