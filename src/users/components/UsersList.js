import './UsersList.css';
import UserItem from './UserItem';

const UsersList = (props) => {
  if (props.users.length === 0) {
    return <h2>Add some users</h2>;
  }

  return (
    <div>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} id={user.id} name={user.name} boxCounter={user.counter} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
