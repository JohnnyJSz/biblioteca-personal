import useFetch from "../../hooks/useFetch";
import { BackEndUrl } from "../../config/access/backEnd";
import BooksView from "./BooksView";

const Books = () => { 
  const {isLoading, isSuccess, data} = useFetch(`${BackEndUrl}/books`, 'GET');
  if (!isLoading && isSuccess && data) {
    return <BooksView data={data}/>;
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Books;