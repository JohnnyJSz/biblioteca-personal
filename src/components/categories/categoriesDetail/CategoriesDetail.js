import React from "react";
import { useParams } from "react-router";
import { BackEndUrl } from "../../../config/access/backEnd";
import useFetch from "../../../hooks/useFetch";
import CategoriesDetailView from "./CategoriesDetailView";

const CategoriesDetail = (props) => {
  const { location } = props;
  const { state } = location;
  const { categoryName } = state;
  const { id } = useParams();

  const { isLoading, isSuccess, data: books } = useFetch(
    `${BackEndUrl}/books`,
    "GET"
  );

  if (!isLoading && isSuccess && books) {
    let booksWithCategory = [];
    for (const book of books) {
      book.categories.map((category) => {
        if (category.id.includes(id)) {
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
