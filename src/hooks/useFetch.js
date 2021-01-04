import {useEffect, useState} from 'react';
import apiClient from '../utils/apiClient';

export default function useFetch(url, method, body) {
  
  const [fetchState, setFetchState] = useState({
    isLoading: true,
    isSuccess: false,
    isFailed: false,
    data: null,
    error: null
  });

  useEffect(
    function() {
      async function fetchData() {
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
              throw new Error('Invalid method');
          }
          setFetchState({
            isLoading: false,
            isSuccess: true,
            isFailed: false,
            error: null,
            data: result
          });
        } catch (error) {
          setFetchState({isLoading: false, isSuccess: false, isFailed: true, error, data: null});
        }
      }
      fetchData();
    },
    [url, method, body]
  );
  return fetchState;
}


// import { useState, useEffect } from "react";
// import apiClient from "../utils/apiClient";

// export default function useFetch({ url, method, body }) {
//   const [data, setData] = useState({
//     isLoading: true,
//     isSuccess: false,
//     error: null,
//     data: null
//   });

//   useEffect(
//     function() {
//     async function dataFetch() {
//       try {
//         let result = null;
//         if (method === "GET") {
//           result = await apiClient.get(url);
//         } else if (method === "POST") {
//           result = await apiClient.get(url);
//         } else {
//           throw new Error("Método inválido");
//         }
//         setData({
//           isLoading: true,
//           isSuccess: false,
//           error: null,
//           data: result
//         });
//         // let result = null;
//         // switch (method) {
//         //   case 'GET':
//         //     result = await apiClient.get(url);
//         //     break;
//         //   case 'POST':
//         //     result = await apiClient.post(url, body);
//         //     break;
//         //   default:
//         //     throw new Error('lol');
//         // };
//       } catch (error) {
//         setData({
//           isLoading: false,
//           isSuccess: false,
//           error: error,
//           data: null
//         });
//       }
//     }
//     dataFetch();
//   }, [url, method, body]);
//   return data;
// }
