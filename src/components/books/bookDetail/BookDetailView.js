/* eslint-disable react/prop-types */
import React from 'react';
import BookItem from '../bookItem';

const BooksDetailView = ({isLoading, data}) => {
    if (isLoading) {
        return <h2>Cargando...</h2>;
    } else {
        return (
            <div>
                <BookItem id={data.id} title={data.title} image={data.image} categories={data.categories}/>
            </div>
        );
    }
};

export default BooksDetailView;