import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import "./login.css";
import styles from './SignUp.module.css';
import Navbar from './Navbar';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://backend-location-rosy.vercel.app/api/auth/register', formData);
      const { token, user } = res.data;

      // Sauvegarde dans le localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirection vers la page membre
      navigate('/member');
    } catch (err) {
      alert('Error registering: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className={`${styles.localPage} bodyyy`}>
      <Navbar/>
      <div className="wrapper">
        <div className="form-box">
          <form onSubmit={handleSubmit} className="register-container" id="register">
            <div className="top">
              <span>Have an account? <Link to="/signin">Login</Link></span>
              <header>Sign Up</header>
            </div>

            <div className="two-forms">
              <div className="input-box">
                <input type="text" className="input-field" name="firstname" placeholder="Firstname" onChange={handleChange} required />
              </div>
              <div className="input-box">
                <input type="text" className="input-field" name="lastname" placeholder="Lastname" onChange={handleChange} required />
              </div>
            </div>

            <div className="input-box">
              <input type="email" className="input-field" name="email" placeholder="Email" onChange={handleChange} required />
            </div>

            <div className="input-box">
              <input type="password" className="input-field" name="password" placeholder="Password" onChange={handleChange} required />
            </div>

            <div className="input-box">
              <input type="submit" className="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
