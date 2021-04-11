/* eslint-disable react/prop-types */
import FormContainer from '../form/FormContainer';
const BooksCreateEditForm = (props) => {
  const {
    initialValues,  
    enableReinitialize,
    validationSchema,
    onSubmit,
    categoriesFetched,
    authorsFetched,
    scoreOptions,
  } = props;

  if(initialValues){
    return (
      <div>
        <FormContainer
          initialValues={initialValues}
          enableReinitialize={enableReinitialize}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          categoriesFetched={categoriesFetched}
          authorsFetched={authorsFetched}
          scoreOptions={scoreOptions}
        />
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default BooksCreateEditForm;