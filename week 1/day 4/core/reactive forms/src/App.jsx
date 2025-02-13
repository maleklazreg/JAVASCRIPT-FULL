import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [header, setHeader] = useState('Ninja Forms');

  const addUser = (user) => {
    setUsers([...users, user]);
    setHeader('User Added');
  };

  return (
    <>
      <h1>{header}</h1>
      <Form addUser={addUser} />
      <UserList users={users} />
    </>
  );
}

export default App;