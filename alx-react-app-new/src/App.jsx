// src/App.jsx

import React from 'react';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
    </div>
  );
};

export default App;
