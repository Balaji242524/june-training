import React from 'react';
import './CSS/Login.css';
const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className='form'>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className = "login-button" type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;