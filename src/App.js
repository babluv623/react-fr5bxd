import React from 'react';
import './style.css';
import Register from './Register.js';
import Profile from './Profile.js';
import { Link, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Home  page</h1>
      <Link to="/register">register</Link>
      <br />
      <Link to="/profile">profile</Link>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </div>
  );
}
