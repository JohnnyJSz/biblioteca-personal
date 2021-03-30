import useFetch from "../../hooks/useFetch";
import { generatePath } from 'react-router-dom'; 
import { BackEndUrl } from "../../config/access/backEnd";
import SmallCard from '../UI/smallCard';

import { Container } from './styledComponents';
import { CATEGORIES_ID } from "../../config/routes/Paths";

const Categories = () => {
  const { isLoading: isLoadingCategories, isSuccess: isSuccessCategories, isFailed, error, data: categories } = useFetch(
    `${BackEndUrl}/categories`,
    "GET"
  );
  const { isLoading: isLoadingBooks, isSuccess: isSuccessBooks, data: books} = useFetch(
    `${BackEndUrl}/books`,
    "GET"
  );

  if (isLoadingCategories || isLoadingBooks) {
    return <h1>Loading...</h1>;
  } else if (isSuccessCategories && isSuccessBooks && categories && books) {
    return (
      <div>
        <h1>Categorías</h1>
        <Container>
          {categories.map((category) => {
            return (
              <SmallCard 
                key={category.id} 
                to={{
                  pathname: generatePath(CATEGORIES_ID, {id: category.id}),
                  //state: { books: books },
                }}
                >
                <h3>{category.name}</h3>
              </SmallCard>
            );
          })}
        </Container>
      </div>
    );
  } else if (isFailed) {
    console.log("Error!", error);
  }
};

export default Categories;
