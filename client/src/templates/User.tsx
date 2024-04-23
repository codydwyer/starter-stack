import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';

import ThemeContext from '~/context/theme';
import DefaultLayout from '~/layouts/DefaultLayout';
import { getUser } from '~/api/graphql/queries';

import './style.scss';

const UserTemplate = () => {
  const { theme } = useContext(ThemeContext);
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const navHandler = () => navigate('/');

  useEffect(() => {
    getUser(userId).then(setUser);
  }, []);

  const classes = clsx(theme, 'main');

  return (
    <DefaultLayout>
      <div className={classes}>
        <h1>User</h1>
        {JSON.stringify(user)}
        <button onClick={navHandler}>Back to users</button>
      </div>
    </DefaultLayout>
  );
};

export default UserTemplate;
