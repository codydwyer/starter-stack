import { useState } from 'react';
import DefaultLayout from '~/layouts/DefaultLayout';
import { useNavigate } from 'react-router-dom';
import { createUser } from '~/api/graphql/queries';

import './style.scss';

const CreateUserTemplate = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event?.preventDefault();
    const user = await createUser({ username });
    console.log(user);
    navigate(`/users/${user.id}`);
  };

  return (
    <DefaultLayout>
      <div className="create-user-page">
        <h1>Create User</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default CreateUserTemplate;
