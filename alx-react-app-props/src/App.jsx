// src/App.jsx
import React from 'react';
import UserProfile from './components/UserProfile';
import { UserProvider } from './components/UserContext';

function App() {
  const userData = { name: "Jane Doe", age: 25, bio: "Loves hiking and photography" };

  return (
    <UserProvider value={userData}>
      <UserProfile />
    </UserProvider>
  );
}

export default App;
