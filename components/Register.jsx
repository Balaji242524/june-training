import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Register.css';

const Register = () => {
  return (
    <div className="register">
      <h2>Register</h2>
      <form>
        <div className="form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className="register-button" type="submit">Register</button>
      </form>
      <div className="login-link">
        <p>
          Already have an account? <Link className='login-link1' to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
