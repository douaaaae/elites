import React from 'react'
import logo from "../images/elites__1_-removebg-preview.png";
import './AdminNav.css';
export default function AdminNav() {
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="" className='img2' />
        <div>
            <button className='sign'>Dasboard</button>
            <button className='sign'>Logout</button>
        </div>
      </div>
    </div>
  )
}
