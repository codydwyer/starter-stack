import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '~/context';
import { CreateUserPage, ErrorPage, LoginPage, RootPage, UserPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/users/:userId',
    element: <UserPage />,
  },
  {
    path: '/users/new/',
    element: <CreateUserPage />,
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
