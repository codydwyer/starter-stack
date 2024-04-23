import { useNavigate } from 'react-router-dom';
import { deleteUser } from '~/api/graphql/queries';
import './style.scss';

export interface IUserItemProps {
  id: string;
  username: string;
}

const UserItem = ({ id, username }: IUserItemProps) => {
  const navigate = useNavigate();
  const handleDelete = () => deleteUser({ id });

  const viewHandler = () => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="user-item">
      {username}
      <button className="user-view-button" onClick={viewHandler}>
        view
      </button>
      <button className="user-delete-button" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

export default UserItem;
