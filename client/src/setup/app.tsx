import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '~/context';
import { RootPage, ErrorPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
]);

import StoreProvider from './store';

const App = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
