import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/elites__1_-removebg-preview.png";
import './Navbar.css';
export default function Navbar() {
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="" className='img2' />
        <ul>
            <Link to="/"><li>Home</li></Link>
        
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            
        </ul>
        <div className='log'>
        <Link to="/signin"><button className='sign'>Sign in</button></Link>
            <Link to="/signup"><button className='sign'>Sign up</button></Link>
            
        </div>
      </div>
    </div>
  )
}
