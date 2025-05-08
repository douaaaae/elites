import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import logos from "../images/poisonivy.png"
import logo1 from "../images/P18_0435-removebg-preview.png"
import Navbar from './MemberNav'
import Footer from './Footer'
import cars1 from "../images/cars1.jpeg"
import cars2 from "../images/cars2.jpeg"

import cars3 from "../images/cars13-removebg-preview.png"

import "./Member.css"
export default function Member() {
  const [selectedCar, setSelectedCar] = useState(null);
const [popupType, setPopupType] = useState(null); // 'details' | 'reservation' | 'reserver'

const handlePopup = (car, type) => {
  setSelectedCar(car);
  setPopupType(type);
};

const closePopup = () => {
  setSelectedCar(null);
  setPopupType(null);
};

    const taglines = [
            "FEELING THE RUSH",
            "UNLEASH THE POWER",
            "DRIVE THE LEGEND"
          ];
          
          const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
        
          useEffect(() => {
            const interval = setInterval(() => {
              setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
            }, 1500); // Change tagline every 3 seconds
            return () => clearInterval(interval);
          }, []);
        
          const currentTagline = taglines[currentTaglineIndex];
 
          const all=[
            {id: 1, pics : logos, marque:"Mercedes", modele: "2022", places:"5", portes: "5", prix :"600 dh"},
            {id: 2, pics : cars1, marque:"Mercedes", modele: "2022", places:"5", portes: "5", prix :"600 dh"},
            {id: 3, pics : cars2, marque:"Mercedes", modele: "2022", places:"5", portes: "5", prix :"600 dh"},
            {id: 4, pics : cars3, marque:"Mercedes", modele: "2022", places:"5", portes: "5", prix :"600 dh"},
            {id: 5, pics : logos, marque:"Mercedes", modele: "2022", places:"5", portes: "5", prix :"600 dh"},
          ]
         
          const inputStyle = {
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
            color:"black"
          };
    
  return (
    
    <div>
       <Navbar />
      <div className="idk">
       {/* <div className="idk2">
          <h1>PUSHING THE LIMITS <br /> FEELING THE RUSH</h1>
       </div> */}
       <div className="idk2">
         <div className="hero-text">
            <h1 className="main-title">PUSHING THE LIMITS</h1>
            <h3 className="rotating-tagline" >{currentTagline}</h3>
         </div>
       </div>
       

     {/*    <div className="txt1">
         <p style={{color : "white"}}>ELITES — <br /> where luxury meets performance. <br/> We offer top-tier cars and personalized <br /> services to ensure  you drive the best. <br /> Discover a new standard of excellence today</p>
 *      </div> */}
        <div className="ima">
            <img src={logo1} alt="" />
        </div>
   {/*      <div className="txt2">
             <p>ELITES — <br /> where luxury meets performance. <br/></p>
         </div> */}
       
        <div class="divm">
            <div>
                <h5>Pick Up Location</h5>
                <input type="text" placeholder="Where to pick it up from" />
            </div>
            <div>
                <h5>Return Location</h5>
                <input type="text" placeholder="Where to return it to" />
            </div>
            <div>
                <h5>Pick Up Date</h5>
                <input type="datetime-local"  />
            </div>
            <div>
                <h5>Return Date</h5>
                <input type="datetime-local"  />
            </div>
            <div class="container">
                <button style={{color: "white", backgroundColor: "rgb(221, 29, 29)"}}>Search Car</button>
            </div>
           </div>
      </div>

<div className="div">
  {all.map((car) => (
    <div className="card" key={car.id}>
      <img src={car.pics} alt="" className='card-img' />
      <div style={{ marginTop: "-40px" }}>
        <p>{car.marque}</p>
        <p className="card-text">
          <span className="price">{car.prix}</span> <span className="line1"> </span> Starting MSRP<br />
          Petrol <span className="big-dot">&#8226;</span> Automatic
        </p>
        <div style={{ borderRadius: "20px", height: "40px", paddingTop: "10px", display: "flex", justifyContent: "space-evenly", backgroundColor: "#e6e4e4" }}>
          <a style={{ color: "brown", textDecoration: "none" }} onClick={() => handlePopup(car, 'reservation')}>Résérver &gt;</a>
          <span className="line"></span>
          <a onClick={() => handlePopup(car, 'details')} style={{ color: "black", textDecoration: "none" }}> Détails &gt;</a>
        </div>
      </div>
    </div>
  ))}
</div>
{selectedCar && (
  <>
    <div id="overlay" style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 10 }} onClick={closePopup}></div>

    {popupType === 'details' && (
      <div id="detailsPopup" style={{ position: "fixed", top: "30%", left: "50%", transform: "translate(-50%, -30%)", backgroundColor: "#fff", padding: "20px", zIndex: 20, borderRadius: "20px",display:"flex", gap:"15px" }}>
        <img src={selectedCar.pics} alt="" style={{ height: "200px", width: "200px" }} />
        <div>
        <p><strong style={{color:"maroon"}}>Marque:</strong> {selectedCar.marque}</p>
        <p><strong>Modèle:</strong> {selectedCar.modele}</p>
        <p><strong>Places:</strong> {selectedCar.places}</p>
        <p><strong>Portes:</strong> {selectedCar.portes}</p>
        <p><strong>Prix:</strong> {selectedCar.prix}</p>
        <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}>Close</button>
        </div>
  
      </div>
    )}

    {popupType === 'reservation' && (
      <div id="reservationPopup"   style={{position: "fixed",top: "50%",left: "50%",transform: "translate(-50%, -50%)",backgroundColor: "#fff",padding: "30px",zIndex: 20,borderRadius: "12px",width: "480px",boxShadow: "0 0 10px rgba(0,0,0,0.3)",}}>
        <h2 style={{color:"maroon", textAlign:"center"}}>Reservation Form</h2>
        <form style={{ }}>
          <div style={{display:"flex"}}>
              <div>
            <label htmlFor="F">Full name</label> <br /> 
            <input type="text" placeholder="Nom complet" required style={inputStyle} />
          </div>
          <div>
            <label htmlFor="email">Email</label> <br /> 
            <input type="email" placeholder="email" required style={inputStyle} />
          </div>
          </div>
        <div style={{display:"flex"}}>
          <div>
          <label htmlFor="F">CNE</label> <br /> 
          <input type="text" placeholder="Nom complet" required style={inputStyle} />
          </div>
          <div>
          <label htmlFor="F">Numéro du permis</label> <br /> 
          <input type="text" placeholder="Nom complet" required style={inputStyle} />
          </div>
        </div>
        <div style={{display:"flex"}}>
          <div>
            <label htmlFor="">Date de la résérvation</label>
            <input type="datetime-local" name="" id="" style={inputStyle} className='dt'/>
          </div>
          <div>
            <label htmlFor="">Date du retour</label>
            <input type="datetime-local" name="" id="" style={inputStyle} className='dt'/>
          </div>
        </div>
          
      
</form>
        <Link to="/"><button onClick={() => setPopupType('reserver')} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}>Reserver</button></Link>
        <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}>Close</button>
      </div>
    )}

    {popupType === 'reserver' && (
      <div id="reserver" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", padding: "20px", zIndex: 20 }}>
        <h2>Reserver Details</h2>
        <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}>Close</button>
      </div>
    )}
  </>
)}

<Footer />
    </div>
  )
}

