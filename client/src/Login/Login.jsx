import React from 'react';
import { useLocation } from 'react-router-dom';

function Login() {
  const search = useLocation().search;
  const role = new URLSearchParams(search).get('role');

  return (
    <div className="login-container">
      <h2>{role === 'employer' ? 'Employer' : 'Job Seeker'} Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
