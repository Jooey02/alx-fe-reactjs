import React from 'react';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <h1>My React App</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;