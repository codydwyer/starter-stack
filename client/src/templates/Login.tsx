import { useState } from 'react';
import DefaultLayout from '~/layouts/DefaultLayout';
import { useNavigate } from 'react-router-dom';

import { login } from '~/api/auth';

import './style.scss';

const LoginTemplate = () => {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await login(id);
    navigate(`/users/${user.id}`);
  };

  return (
    <DefaultLayout>
      <div className="login-page">
        <h1>Login</h1>
        <form>
          <label htmlFor="id">User ID</label>
          <input name="id" type="text" value={id} onChange={(event) => setId(event.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default LoginTemplate;
