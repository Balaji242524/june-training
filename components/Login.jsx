import React from 'react';
import './CSS/Login.css';
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className='form'>
          <label htmlFor="Email">Email:</label>
          <input type="text" id="Email" name="Email" required />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className = "login-button" type="submit">Login</button>
      </form>
      <div className='register-link'>
        <p>Don't have an account? <Link className='register-link1' to={'/Register'}>Sign Up</Link></p>
      </div>
    </div>
  );
}
export default Login;