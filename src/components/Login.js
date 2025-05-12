
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./login.css";
import axios from 'axios';
import Navbar from './Navbar';
export default function Login() {

  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://backend-location-rosy.vercel.app/api/auth/login', formData);
      const { token, user } = res.data;

      // Sauvegarder dans le localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirection selon le rôle
      if (user.role === 'admin') {
        navigate('/dashbord');
      } else {
        navigate('/member');
      }
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.message || err.message));
    }
  };


  return (
    <div className='bodyyy'>
      <Navbar/>
      <div className="wrapper">

      <div className="form-box">
        <form onSubmit={handleSubmit} className="login-container" id="login">
          <div className="top">
            <span>Don't have an account? <Link to="/signup"><a href="#">Sign Up</a></Link></span>
            <header>Login</header>
          </div>

          <div className="input-box">
  <input
    type="text"
    name="email" // <-- AJOUTÉ
    className="input-field2"
    onChange={handleChange}
    placeholder="Username or Email"
  />
  <i className="bx bx-user"></i>
</div>

<div className="input-box">
  <input
    type="password"
    name="password" // <-- AJOUTÉ
    className="input-field2"
    onChange={handleChange}
    placeholder="Password"
  />
  <i className="bx bx-lock-alt"></i>
</div>

          <div className="input-box">
            <input type="submit" className="submit" value="Sign In" />
          </div>

          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className="two">
              <label><a href="#">Forgot password?</a></label>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
