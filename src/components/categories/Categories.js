import useFetch from "../../hooks/useFetch";
import { BackEndUrl } from "../../config/access/backEnd";
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
        <h3>Esta es el componente CATEGORIES</h3>
        <div>
          {categories.map((category) => {
            return (
              <div key={category.id}>
                <h2>{category.name}</h2>
                <h4>{category.id}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (isFailed && !isSuccess) {
    console.log("Error!", error);
  }
};

export default Categories;
