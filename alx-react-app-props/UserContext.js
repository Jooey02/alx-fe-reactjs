// src/UserContext.js
import React, { createContext, useContext } from 'react';

// Create a Context
const UserContext = createContext();

// Create a custom hook to use the UserContext
export function useUser() {
  return useContext(UserContext);
}

export default UserContext;
