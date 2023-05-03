import React, { useState } from 'react';
import './LoginForm.css';

// LoginForm component to handle user login
const LoginForm = () => {
  // State for email and password input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email, 'Password:', password);
  };

  // Render the login form with email and password input fields and a submit button
  return (
    <form onSubmit={onSubmit} className="login-form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
