import React, { useState } from 'react'
import "./Footes.css";
import { FaMoon, FaLightbulb } from 'react-icons/fa';
import logo from "../images/elites__1_-removebg-preview.png"
import { FaPhone, FaRegEnvelope, FaGlobe } from 'react-icons/fa'
export default function Footer( {Language, setLanguage, darkMode, setDarkMode}) {
  return (
    <div>
      <div className='diviv'>
        <div className='divid1'>
            <div className="divid2">
              <img src={logo} alt="" />
              <p>Renting the best cars</p>
              <p className='paragraph'>&copy; Copyright @2025</p>
            </div>
            <div className="divid3">
               <h1>Sign up for our newsletter</h1>
               <div className='inputs'>
                <input type="text" readOnly placeholder='Enter your email address...' />
                <button>Start a project</button>
               </div>
               <hr />
            <div className='diviid'>
                <div className="divid4">
                 <p >Our story</p>
                 <p >Trems of service</p>
                 <p >Refund policy</p>
                 <p>Help Center</p>
               </div>
               <div className="divid4">
                <p>FAQS</p>
                <p>Contact</p>
                <p>Services</p>
                <p>About the project</p>
               </div>
               <div className="divid4">
                <p><FaPhone/> +212 645890329</p>
                <p><FaRegEnvelope/> hajardouae@gmail.com</p>
                <p><FaGlobe/></p>
               </div>
            </div>
            <div className='wid23'>
          <select className='select' name="" id="" value={Language} onChange={(e) => { setLanguage(e.target.value) }}>
            <option value="en">English</option>
            <option value="sp">Español</option>
            <option value="fr">Français</option>
          </select>
          <p className='pat' value={darkMode} onClick={() => setDarkMode(!darkMode)}> {darkMode ? <FaMoon /> : <FaLightbulb />} </p>
        </div>
            </div>
        </div>

      </div>
    </div>
  )
}
