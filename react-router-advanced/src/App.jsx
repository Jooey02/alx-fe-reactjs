import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/blog/1">Blog Post 1</Link></li>
        <li><Link to="/blog/2">Blog Post 2</Link></li>
        {isAuthenticated ? (
          <li><button onClick={logout}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }>
              <Route index element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;