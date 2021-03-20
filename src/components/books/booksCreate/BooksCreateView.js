/* eslint-disable react/prop-types */
import FormContainer from "../../form";
const BooksCreateView = (props) => {
  const {
    initialValues,  
    enableReinitialize,
    validationSchema,
    onSubmit,
    categoriesFetched,
    authorsFetched,
    scoreOptions,
  } = props;

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
};

export default BooksCreateView;
