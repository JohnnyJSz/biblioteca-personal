import React from "react";
import { useParams } from "react-router-dom";
import { BackEndUrl } from "../../../config/access/backEnd";
import useFetch from "../../../hooks/useFetch";
import CategoriesDetailView from "./CategoriesDetailView";

const CategoriesDetail = () => {
  const { id } = useParams();
  console.log('id',id);
  // const { match } = props;
  // const { params } = match;
  // const { location } = props;

  const {
    // isLoading: isLoadingCategory,
    isFailed: isFailedCategory,
    isSuccess: isSuccessCategory,
    error: errorCategory,
    data: category,
  } = useFetch(`${BackEndUrl}/categories/${id}`, "GET");
  const {
    // isLoading: isLoadingBooks,
    isFailed: isFailedBooks,
    isSuccess: isSuccessBooks,
    error: errorBooks,
    data: books,
  } = useFetch(`${BackEndUrl}/books`, "GET");

  // let categoryName = category.name;
  let categoryName;

  if (isSuccessBooks && isSuccessCategory && category && books){
    categoryName = category.name;
    let booksWithCategory = [];
    for (const book of books) {
      book.categories.map((category) => {
        if (category.id.includes(id)) {
          // categoryName = category.name;
          booksWithCategory.push(book);
        }
      });
    }

    return (
      <CategoriesDetailView
        booksWithCategory={booksWithCategory}
        categoryId={id}
        categoryName={categoryName}
      />
    );
  } else if (isFailedCategory || isFailedBooks){
    console.log("Error!", errorBooks, errorCategory);
    return (
      <div>
        <h2>Ha ocurrido un error inesperado. Intentalo más adelante 😢</h2>;
        <p>{errorCategory}</p>
        <p>{errorBooks}</p>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default CategoriesDetail;
