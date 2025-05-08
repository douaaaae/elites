import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import  {motion ,AnimatePresence} from 'framer-motion';
import AdminNav from './AdminNav'
import cars1 from "../images/cars1.jpeg"
import cars2 from "../images/cars2.jpeg"
import logo1 from "../images/P18_0435-removebg-preview.png"
import cars3 from "../images/cars13-removebg-preview.png"
import logos from "../images/poisonivy.png"
import Footer from './Footer'
import "./Admin.css"
export default function Admin() {
        const [isToggled, setIsToggled] = useState(false);
        const [showForm, setShowForm] = useState(false);

    
        const toggleButton = () => {
          setIsToggled((prev) => !prev);
          setShowForm(prev => !prev);

        };
    const inputStyle = {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "14px",
        color:"black",
        marginTop:"-22px"
      };
      const [selectedCar, setSelectedCar] = useState(null);
    const [popupType, setPopupType] = useState(null); // 'details' | 'reservation' | 'reserver'
    
    const handlePopup = (car, type) => {
      setSelectedCar(car);
      setPopupType(type);
      if (type === 'reservation') {
        setFormData({
          marque: car.marque || '',
          modele: car.modele || '',
          places: car.places || '',
          portes: car.portes || '',
          prix: car.prix || ''
        });
      }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      
    
    const closePopup = () => {
      setSelectedCar(null);
      setPopupType(null);
      setShowForm(null)
    };
    const [formData, setFormData] = useState({
        marque: '',
        modele: '',
        places: '',
        portes: '',
        prix: ''
      });
           const all=[
                {id: 1, pics : logos, marque:"Mercedes", modele: "2022", places:"5", portes: "5", prix :"600 dh"},
                {id: 2, pics : cars1, marque:"Mercedes", modele: "2022", places:"5", portes: "5", prix :"600 dh"},
                {id: 3, pics : cars2, marque:"Mercedes", modele: "2022", places:"5", portes: "5", prix :"600 dh"},
                {id: 4, pics : cars3, marque:"Mercedes", modele: "2022", places:"5", portes: "5", prix :"600 dh"},
                {id: 5, pics : logos, marque:"Mercedes", modele: "2022", places:"5", portes: "5", prix :"600 dh"},
              ]
  return (
    <div>
      <AdminNav/>
      <h2 className='h22'>Welcome Back, Sir!</h2>
      <p className='p22'>You can manage The cars.</p>
      <div className="div88">
  {all.map((car) => (
    <div className="card" key={car.id}>
      <img src={car.pics} alt="" className='card-img' />
      <div style={{ marginTop: "-40px" }}>
        <p className='nunito price'>{car.marque}</p>
        <p className="card-text">
          <span className="price">{car.prix}</span> <span className="line1"> </span> Starting MSRP<br />
          Petrol <span className="big-dot">&#8226;</span> Automatic
        </p>
        <div style={{ borderRadius: "20px", height: "40px", paddingTop: "10px", display: "flex", justifyContent: "space-evenly", backgroundColor: "#e6e4e4" }}>
          <a style={{ color: "brown", textDecoration: "none" }} onClick={()=> handlePopup(car, "details")}>Supprimer &gt;</a>
          <span className="line"></span>
          <a  style={{ color: "black", textDecoration: "none" }} onClick={()=> handlePopup(car, "reservation")} > Modifier &gt;</a>
        </div>
      </div>
    </div>
  ))}
</div>
{selectedCar && (
  <>
    <div id="overlay" style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 10 }} onClick={closePopup}></div>

    {popupType === 'details' && (
      <div id="detailsPopup" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -30%)", backgroundColor: "#fff", padding: "20px", zIndex: 20, borderRadius: "20px", gap:"15px" }}>
        <h2>Do you want to delete this car ?</h2>
                <button  style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}>Confirm</button>
                <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}>Cancel</button>
  
      </div>
    )}


{popupType === 'reservation' && (
      <div id="detailsPopup" style={{ position: "fixed", top: "30%", left: "50%", transform: "translate(-50%, -30%)", backgroundColor: "#fff", padding: "20px", zIndex: 20, borderRadius: "20px",display:"flex", gap:"15px",  
}}>
        
        <img src={selectedCar.pics} alt="" style={{ height: "200px", width: "200px" , alignSelf:"center"}} />
        <div>
        <form style={{ display: "flex", flexDirection: "column",  }} className='form'>
          
          <p>Marque : <input type="text" name="marque"  value={formData.marque}onChange={handleChange}style={inputStyle}/> </p>
          <p>Modele : <input type="text" name="modele"  value={formData.modele}onChange={handleChange}style={inputStyle}/> </p>
          <p>Portes : <input type="text" name="portes"  value={formData.portes}onChange={handleChange}style={inputStyle} className='porte'/> </p>
          <p>Places : <input type="text" name="places"  value={formData.places}onChange={handleChange}style={inputStyle} className='porte'/> </p>
          <p>Prix : <input type="text" name='prix' value={formData.prix} onChange={handleChange} style={inputStyle} className='prix'/></p>
</form>
        <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}>Save</button>
        <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}>Close</button>
        </div>
  
      </div>
    )}

    {popupType === 'reserver' && (
      <div id="reserver" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", padding: "20px", zIndex: 20 }}>
        <h2>Reserver Details</h2>
        <button onClick={closePopup}>Close</button>
      </div>
    )}
  </>
)}
<div className='btn'>
    <button onClick={toggleButton} style={{backgroundColor : isToggled ? ' rgba(255, 255, 255, 0.861)': 'maroon', color: isToggled ? 'maroon' :'rgba(255, 255, 255, 0.861)', border : isToggled ? '1px solid maroon' : 'none' }}>+ Add a car</button>
</div>

{showForm && (
 <div  style={{ position: "fixed", top: "30%", left: "50%", transform: "translate(-50%, -30%)", backgroundColor: "#fff", padding: "20px", zIndex: 100, borderRadius: "20px",display:"flex", gap:"15px",boxShadow: '0 0 20px rgba(0,0,0,0.2)', 
     
 }}>
         
         <div>
            <h1 style={{marginBottom: '15px', color: 'maroon', textAlign: 'center' }}>Ajouter une voiture</h1>
         <form style={{ display: "flex", flexDirection: "column",  }} className='form'>
           
           <p>Marque : <input type="text" name="marque"  style={inputStyle}/> </p>
           <p>Modele : <input type="text" name="modele"  style={inputStyle}/> </p>
           <p>Portes : <input type="text" name="portes"  style={inputStyle} className='porte'/> </p>
           <p>Places : <input type="text" name="places"  style={inputStyle} className='porte'/> </p>
           <p>Prix : <input type="text" name='prix' style={inputStyle} className='prix'/></p>
 </form>
         <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}>Save</button>
         <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}>Close</button>
         </div>
   
       </div>
)}

<Footer/>
    </div>
  )
}
