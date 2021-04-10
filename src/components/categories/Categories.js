import useFetch from "../../hooks/useFetch";
import { generatePath } from 'react-router-dom'; 
import { BackEndUrl } from "../../config/access/backEnd";
import SmallCard from '../UI/smallCard';

import { Container, SubContainer } from './styledComponents';
import { CATEGORIES_ID } from "../../config/routes/Paths";

const Categories = () => {

  const { isLoading, isSuccess, isFailed, error, data: categories } = useFetch(
    `${BackEndUrl}/categories`,
    "GET"
  );

  if (!isLoading && categories) {
    return (
      <Container>
        <h1>Categorías</h1>
        <SubContainer>
          {categories.map((category) => {
            return (
              <SmallCard 
                key={category.id} 
                to={{
                  pathname: generatePath(CATEGORIES_ID, {id: category.id}),
                  state: { categoryName: category.name },
                }}
                >
                <h3>{category.name}</h3>
              </SmallCard>
            );
          })}
        </SubContainer>
      </Container>
    );
  } else if (isLoading && !isSuccess) {
    return <h1>Loading...</h1>;
  } else if (isFailed && error) {
    console.log("Error!", error);
    return <div>Ha habido un error :(</div>;
  }
};

export default Categories;

// import useFetch from "../../hooks/useFetch";
// import { generatePath } from 'react-router-dom'; 
// import { BackEndUrl } from "../../config/access/backEnd";
// import SmallCard from '../UI/smallCard';

// import { Container, SubContainer } from './styledComponents';
// import { CATEGORIES_ID } from "../../config/routes/Paths";

// const Categories = () => {
  
//   const { isLoading: isLoadingCategories, isSuccess: isSuccessCategories, isFailed, error, data: categories } = useFetch(
//     `${BackEndUrl}/categories`,
//     "GET"
//   );

//   const { isLoading: isLoadingBooks, isSuccess: isSuccessBooks, data: books} = useFetch(
//     `${BackEndUrl}/books`,
//     "GET"
//   );

//   if (isLoadingCategories || isLoadingBooks) {
//     return <h1>Loading...</h1>;
//   } else if (isSuccessCategories && isSuccessBooks && categories && books) {
//     return (
//       <Container>
//         <h1>Categorías</h1>
//         <SubContainer>
//           {categories.map((category) => {
//             return (
//               <SmallCard 
//                 key={category.id} 
//                 to={{
//                   pathname: generatePath(CATEGORIES_ID, {id: category.id}),
//                   state: { categoryName: category.name },
//                 }}
//                 >
//                 <h3>{category.name}</h3>
//               </SmallCard>
//             );
//           })}
//         </SubContainer>
//       </Container>
//     );
//   } else if (isFailed) {
//     console.log("Error!", error);
//   }
// };

// export default Categories;