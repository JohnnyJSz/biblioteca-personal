import React from "react";
import useFetch from "../../hooks/useFetch";
import { BackEndUrl } from "../../config/access/backEnd";
//import BooksView from "./BooksView";

const Books = () => {
  /*
   **** Esto es como lo tenía antes de intentar implementar el custom hook useFetch ****

  const [datosLibros, setDatosLibros] = useState([]);

  useEffect(() => {
    apiClient.get(`${BackEndUrl}/books`).then((data) => {
      //console.log("datos de la api ",data);
      setDatosLibros(data);
    });
  }, []);

  return <BooksView datosLibros={datosLibros}/>;

  */

  const dataFetched = useFetch(
    `${BackEndUrl}/books`,
    'GET'
  );

  console.log("datos obtenidos mediante useFetch hook - ", dataFetched);
   /* 
      ** Por que al hacer console.log de los datos me muestra el objeto correspondiente al bloque CATCH en el archivo useFetch
      en el bloque try / catch entiendo que si surge algún error en el TRY captura el error en el CATCH
   */
  return (
    <div>
      <p>Aquí iría el componente BooksView al que le pasamos como props los datos obtenidos de useFetch</p>
    </div>
  );
};

export default Books;
