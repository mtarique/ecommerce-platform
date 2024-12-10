// components/Signup.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // To navigate after successful signup

const Signup = () => {
  // State to store username and password
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const history = useHistory(); // Hook for navigation

  // Handle the signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4001/api/auth/signup', { name, email, password });
      alert('Signup successful!');
      // Redirect to login or another page
      // history.push('/login'); // Redirect to login page after successful signup
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
      <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">Sign up</button>
        Already have an account? <Link to="/signin">Sign in</Link>
      </form>
    </div>
  );
};

export default Signup;
