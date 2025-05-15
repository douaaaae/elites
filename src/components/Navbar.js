import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/elites__1_-removebg-preview.png";
import './Navbar.css';
export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };  
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="" className='img2' />
         <div className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
          <span class= "bar"></span>
          <span class= "bar"></span>
          <span class= "bar"></span>
        </div>
        <div className='navbar-menu'>
         <ul className={`${isMobileMenuOpen ? "active" : ""}`}>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            
        </ul>
        <div className={`log ${isMobileMenuOpen ? "active" : ""}`}>
            <Link to="/signin"><button className='sign'>Sign in</button></Link>
            <Link to="/signup"><button className='sign'>Sign up</button></Link>
            
        </div>
        </div>
       
     
      </div>
    </div>
  )
}
