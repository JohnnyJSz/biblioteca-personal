import useFetch from "../../hooks/useFetch";
import { BackEndUrl } from "../../config/access/backEnd";
import SmallCard from '../UI/smallCard';

import { Container } from './styledComponents';

const Categories = () => {
  const { isLoading, isSuccess, isFailed, error, data: categories } = useFetch(
    `${BackEndUrl}/categories`,
    "GET"
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isSuccess && categories) {
    return (
      <div>
        <h1>Categorías</h1>
        <Container>
          {categories.map((category) => {
            return (
              <SmallCard key={category.id}>
                <h3>{category.name}</h3>
              </SmallCard>
            );
          })}
        </Container>
      </div>
    );
  } else if (isFailed && !isSuccess) {
    console.log("Error!", error);
  }
};

export default Categories;
