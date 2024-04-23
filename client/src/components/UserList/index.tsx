import UserItem, { IUserItemProps } from './Item';
import './style.scss';

export interface IUserListProps {
  users: IUserItemProps[];
}

const UserList = ({ users }: IUserListProps) => {
  return (
    <div className="user-list">
      {users.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default UserList;
