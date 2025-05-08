import React from 'react'
import logo from "../images/elites__1_-removebg-preview.png";
import './Navbar.css';
export default function Navbar() {
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="" className='img2' />
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <div>
            <button className='sign'>Sign up</button>
            <button className='sign'>Sign in</button>
        </div>
      </div>
    </div>
  )
}
