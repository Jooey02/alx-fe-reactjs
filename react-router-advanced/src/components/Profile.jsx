// components/Profile.jsx
import React from 'react';
import { Outlet, Link, Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => (
  <div>
    <h1>Profile</h1>
    <nav>
      <Link to="">Details</Link> | <Link to="settings">Settings</Link>
    </nav>
    <Routes>
      <Route index element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Routes>
    <Outlet />
  </div>
);

export default Profile;