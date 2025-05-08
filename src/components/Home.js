import React from 'react'
import Navbar from './Navbar'
import Footer1 from './Footer1'
import image from "../images/ic_baseline-apple.png"
import logo from "../images/img.png"
import logo3 from "../images/ic_baseline-apple.png"
import "../App.css";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="divt">
        <div className="div23">
        <h1 style={{color: "white;"}} className="nunito">Drive your dreams today</h1>
        <p style={{color : "white"}}>ELITES — <br /> where luxury meets performance. <br/> We offer top-tier cars and personalized services to ensure <br/> you drive the best. Discover a new standard of excellence today</p>
        <div className="btns" style={{paddingBottom: "10px", display: "flex", gap: "20px", marginTop: "50px;"}}>
                <div style={{backgroundColor: "brown", textAlign: "start", color: "white", border: "none", display: "flex", justifyContent: "space-around", alignItems: "center", width: "160px", borderRadius: "10px", height: "60px,"}}>
                    <img src={image} alt="" style={{height: "50px", width:"50px"}} />

                    <h4>Get it on <br /> <strong>Google Play</strong></h4>
                </div>
                <div style={{backgroundColor: "white",textAlign: "start" ,color: "black" , border: "none", display: "flex", gap: "20px" , justifyContent: "space-around", alignItems: "center", height: "60px",  borderRadius: "10px", width: "210px"}}>
                    <img src={image} alt="" style={{height: "50px", width:"50px"}} />
                    <h4>Download on the <br /> <strong>App Store</strong> </h4>
                </div>
              </div>
        </div>
        <div class="div24">
            <img src={logo} alt="" />
        </div> 
       
      </div>
      <Footer1 />
    </div>
  )
}
