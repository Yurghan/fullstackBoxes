import UserList from '../components/UsersList';

const Users = () => {
  const USERS = [
    { id: 'u1', name: 'Lukasz', counter: 25 },
    { id: 'u2', name: 'Jan', counter: 15 },
    { id: 'u3', name: 'Andrzej', counter: 31 },
  ];
  return <UserList users={USERS} />;
};

export default Users;
