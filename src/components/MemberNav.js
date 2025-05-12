import React from 'react'
import logo from "../images/elites__1_-removebg-preview.png";
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="" className='img2' />
        <ul>
            <Link to="/member"><li>Home</li></Link>
            <Link to="/reservation"><li>me reservations</li></Link>
            <Link to="/about2"><li>About Us</li></Link>
            <Link to="/contact2"><li>Contact Us</li></Link>
            
        </ul>
        <div className='log'>
            <Link to="/"><button className='sign'>Logout</button></Link>
            
        </div>
      </div>
    </div>
  )
}
