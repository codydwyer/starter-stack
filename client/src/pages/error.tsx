import { useRouteError } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <DefaultLayout>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </DefaultLayout>
  );
};

export default ErrorPage;
