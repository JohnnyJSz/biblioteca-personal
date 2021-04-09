import React from "react";
import { BackEndUrl } from "../../../config/access/backEnd";
import useFetch from "../../../hooks/useFetch";
import CategoriesDetailView from "./CategoriesDetailView";

const CategoriesDetail = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  const { location } = props;
  

  let categoryName;
  if (location?.state) {
    categoryName = location.state.categoryName;
  } 
  

  const { isLoading, isSuccess, data: books } = useFetch(
    `${BackEndUrl}/books`,
    "GET"
  );


  if (!isLoading && isSuccess && books) {
    let booksWithCategory = [];
    for (const book of books) {
      book.categories.map((category) => {
        if (category.id.includes(id)) {
          categoryName = category.name;
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
  } else {
    return <h2>Loading...</h2>;
  }
};

export default CategoriesDetail;
