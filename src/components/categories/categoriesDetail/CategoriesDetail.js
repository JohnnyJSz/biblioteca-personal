import React from "react";
import { useParams, generatePath } from "react-router";
import { BackEndUrl } from "../../../config/access/backEnd";
import { BOOKS_ID } from "../../../config/routes/Paths";
import useFetch from "../../../hooks/useFetch";
import MediumCard from "../../UI/mediumCard";
//import CategoriesDetailView from "./CategoriesDetailView";

const CategoriesDetail = () => {
  const { id } = useParams();

  const { isLoading, isSuccess, data: books } = useFetch(
    `${BackEndUrl}/books`,
    "GET"
  );

  if (!isLoading && isSuccess && books) {

    let booksWithCategory = [];
    let categoryName;
    for (const book of books) {
      book.categories.map((category) => {
        if (category.id.includes(id)) {
          categoryName = category.name;
          booksWithCategory.push(book);
        }
      });
    };

    return (
      <div>
        <h1>{categoryName}</h1>
        {categoryName ? <h3>Libros con la categoría {categoryName}</h3> : null}
        <div>
          {booksWithCategory.length ? 
            booksWithCategory.map((book) => {
              return (
                <MediumCard
                  key={book.id}
                  to={generatePath(BOOKS_ID, { id: book.id })}
                  id={book.id}
                  title={book.title}
                  image={book.image}
                  categories={book.categories}
                  score={book.score}
                  authors={book.authors}
                  description={book.description}
                />
              );
            })
           : (
            <p>
              No hay libros para mostrar con esta categoría <strong>{categoryName}</strong>
            </p>
          )}
        </div>
        {/* <CategoriesDetailView /> */}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default CategoriesDetail;
