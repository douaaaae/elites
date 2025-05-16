import React,{useState} from 'react'
import logo from "../images/elites__1_-removebg-preview.png";
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [color, setColor] = useState("white");
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
      setColor("red");
    };
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="" className='img2' />
         <div className={`navbar-toggle`} onClick={toggleMobileMenu} >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>

        <ul>
            <Link to="/member"><li>Home</li></Link>
            <Link to="/reservation"><li>My reservations</li></Link>
            <Link to="/about2"><li>About Us</li></Link>
            <Link to="/contact2"><li>Contact Us</li></Link>
            
        </ul>
        <div className='log'>
            <Link to="/"><button className='sign'>Logout</button></Link>
            
        </div>
      </div>
      </div>
    </div>
  )
}
