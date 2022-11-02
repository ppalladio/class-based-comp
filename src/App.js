import UsersFinder from './components/Users';

import UsersConctext from './components/store/users-context';
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }
  return (
    <UsersConctext.Provider value = {usersContext}>
      <UsersFinder />
    </UsersConctext.Provider>
  );
}

export default App;
