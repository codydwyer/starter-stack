import { useContext, useEffect, useState } from 'react';
import { clsx } from 'clsx';

import ThemeContext from '~/context/theme';
import DefaultLayout from '~/layouts/DefaultLayout';
import { getUsers } from '~/api/graphql/queries';

import './style.scss';

const Default = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState();

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const classes = clsx(theme, 'main');

  return (
    <DefaultLayout>
      <div className={classes}>
        <h1>Users</h1>
        {JSON.stringify(users)}
      </div>
    </DefaultLayout>
  );
};

export default Default;
