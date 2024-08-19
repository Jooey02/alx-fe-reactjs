// src/components/UserProfile.jsx
import React from 'react';
import { useUser } from './UserContext'; // Import the useUser hook

const UserProfile = () => {
  const userData = useUser(); // Use the hook to get user data

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
