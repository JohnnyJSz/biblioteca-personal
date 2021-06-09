import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { generatePath } from "react-router-dom";
import { BackEndUrl } from "../../config/access/backEnd";
import SmallCard from "../UI/smallCard";

import { Container, SubContainer } from "./styledComponents";
import { CATEGORIES_ID } from "../../config/routes/Paths";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const { isFailed, error, data } = useFetch(
    `${BackEndUrl}/categories`,
    "GET"
  );

  useEffect(() => {
    setCategories(data);
  }, [data]);

  if (categories) {
    return (
      <Container>
        <h1>Categories</h1>
        <SubContainer>
          {categories.map((category) => {
            return (
              <SmallCard
                key={category.id}
                to={{
                  pathname: generatePath(CATEGORIES_ID, { id: category.id }),
                }}
              >
                <h3>{category.name}</h3>
              </SmallCard>
            );
          })}
        </SubContainer>
      </Container>
    );
  } else if (!categories) {
    return <h1>Loading...</h1>;
  } else if (isFailed && error) {
    return (
      <div>
        <h2>Something went wrong, try again later 😢</h2>;
        <p>{error}</p>
      </div>
    );
  }
};

export default Categories;
