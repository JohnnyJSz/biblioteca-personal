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
      const abortCont = new AbortController();
      async function fetchData() {
        try {
          let result = null;
          switch (method) {
            case "GET":
              result = await apiClient.get(url, { signal: abortCont });
              break;
            case "POST":
              result = await apiClient.post(url, body, { signal: abortCont });
              break;
            case 'DELETE':
              result = await apiClient.del(url, { signal: abortCont });
              break;
            default:
              throw new Error("Método invalido");
          }
          if (result !== "Book not found") {
            setFetchState({
              isLoading: false,
              isSuccess: true,
              isFailed: false,
              error: null,
              data: result,
            });
          } else {
            setFetchState({
              isLoading: false,
              isSuccess: true,
              isFailed: true,
              error: null,
              data: result,
            });
          }
        } catch (error) {
          if (error.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            setFetchState({
              isLoading: false,
              isSuccess: false,
              isFailed: true,
              error,
              data: null,
            });
          }
        }
      }
      fetchData();

      return () => {
        abortCont.abort();
      };

    },
    [url, method, body]
  );
  
  return fetchState;
}