import { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';

import ThemeContext from '~/context/theme';
import DefaultLayout from '~/layouts/DefaultLayout';
import { getUsers } from '~/api/graphql/queries';

import './style.scss';
import UserList from '~/components/UserList';

const DefaultTemplate = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState();

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const navHandler = () => navigate('/users/new/');

  const classes = clsx(theme, 'main');

  return (
    <DefaultLayout>
      <div className={classes}>
        <h1>Users</h1>
        <button onClick={navHandler}>New user</button>
        {users && <UserList users={users} />}
      </div>
    </DefaultLayout>
  );
};

export default DefaultTemplate;
