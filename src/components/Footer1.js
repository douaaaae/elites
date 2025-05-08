import React from 'react'
import './Foote.css';
import logo from '../images/elites__1_-removebg-preview.png';
import {FaArrowRight, FaPhone, FaGlobe, FaRegEnvelope} from 'react-icons/fa';
export default function Footer1() {

  return (
<div className='vidid'>
    <div className='vid1'>
        <img src={logo} alt="" className='image14'/>
        <p className='paragraph'>Posting the brilliant announces</p>
        <p className='paragraph1'>&copy;Copyright 2025</p>
    </div><hr />
    <div className='vid2'>
         <h3 className='head'>Sign up for our newsletter</h3>
         <div>
           <input type="text" placeholder='Enter your email address...' className='input90' readOnly/>
           <button className='btn78'>Start a project <span className='FaArrow'><FaArrowRight/> </span>  </button>
         </div>
         <hr />
         <div className="div3">
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
         
    </div>
</div>


  )
}

