import React from 'react'
import logo from "../images/elites__1_-removebg-preview.png";
import './AdminNav.css';
import { Link } from 'react-router-dom';
export default function AdminNav() {
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="" className='img2' />
        <div>
            <Link to="/dashbord"><button className='sign'>Dasboard</button></Link>
            <button className='sign'>Logout</button>
        </div>
      </div>
    </div>
  )
}
