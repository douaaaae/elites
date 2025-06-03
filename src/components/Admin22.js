import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {BarChart2,Users,Car,Calendar,LayoutDashboard,ClipboardList,Settings,} from "lucide-react";
import { Link } from 'react-router-dom';
import "./CarRentalDashboard.css"; 
import "./Member.css";
  

  
  const menuItems = [
    { label: "Dashboard", icon: <BarChart2 size={20} />, href: "/dashbord" },
    { label: "Manage Cars", icon: <Car size={20} />, href: "/manage" },
    { label: "Log Out", icon: <Settings size={20} />, href: "/" },
  ];
  

export default function Admin22() {
   const [isToggled, setIsToggled] = useState(false);
          const [showForm, setShowForm] = useState(false);
          const [cars, setCars] = useState([]);
          const [formData, setFormData] = useState({
            marque: '',
            modele: '',
            carburant: '',
            boite_vitesse: '',
            climatisation: '',
            prix_par_jour: '',
            image: '',
            disponible: true,
          });
      
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
      
      const fetchCars = async () => {
        const res = await axios.get('https://backend-location-rosy.vercel.app/api/cars');
        setCars(res.data);
      };
    
      useEffect(() => {
        fetchCars();
      }, []);
        
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleAddCar = async () => {
        try {
          const token = localStorage.getItem('token'); // Récupère le token JWT
          await axios.post('https://backend-location-rosy.vercel.app/api/cars', formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          fetchCars();
          setShowForm(false);
        } catch (error) {
          console.error("Erreur lors de l'ajout de la voiture :", error);
          alert("Ajout impossible. Vérifiez votre connexion ou votre authentification.");
        }
      };

      const handleDeleteCar = async (id) => {
        try {
          const token = localStorage.getItem('token'); 
          await axios.delete(`https://backend-location-rosy.vercel.app/api/cars/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          fetchCars();
          closePopup();
        } catch (error) {
          console.error("Erreur lors de la suppression :", error);
          alert("Suppression impossible. Vérifiez vos autorisations.");
        }
      };
      
      const handleUpdateCar = async () => {
        try {
          if (!selectedCar) return;
          const token = localStorage.getItem('token'); 
          await axios.put(`https://backend-location-rosy.vercel.app/api/cars/${selectedCar._id}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          fetchCars();
          closePopup();
        } catch (error) {
          console.error("Erreur lors de la mise à jour :", error);
          alert("Mise à jour impossible. Vérifiez vos autorisations.");
        }
      };
      
      
      const openPopup = (car, type) => {
        setSelectedCar(car);
        setPopupType(type);
        setFormData(car);
      };
      
      const closePopup = () => {
        setSelectedCar(null);
        setPopupType(null);
        setShowForm(null);
        setFormData({
          marque: '', modele: '', carburant: '', boite_vitesse: '', climatisation: '', prix_par_jour: '', image: '', disponible: true
        });
      };


  return (
    <div className='body18'>
      <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
      <p className='h22'>Welcome Back, Sir!</p>
        <p className='p22'>You can manage The cars.</p><br /><br />
        <nav>
  {menuItems.map((item, index) => (
    <Link to={item.href} key={index} className="menu-link">
      {item.icon}
      <span>{item.label}</span>
    </Link>
  ))}
</nav>

<div className='btn'>
        <button onClick={toggleButton} style={{backgroundColor : isToggled ? ' rgba(255, 255, 255, 0.861)': 'maroon', color: isToggled ? 'maroon' :'rgba(255, 255, 255, 0.861)', border : isToggled ? '1px solid maroon' : 'none' }}>+ Add a car</button>
</div>
    
    {showForm && (
     <div  style={{ position: "fixed", top: "30%", left: "50%", transform: "translate(-50%, -30%)", backgroundColor: "#fff", padding: "20px", zIndex: 100, borderRadius: "20px",display:"flex", gap:"15px",boxShadow: '0 0 20px rgba(0,0,0,0.2)', 
         
     }}>
             
             <div>
                <h1 style={{marginBottom: '15px', color: 'maroon', textAlign: 'center' }}>Add a Car</h1>
             <form style={{ display: "flex", flexDirection: "column",  }} className='form'>
               
             <p>Brand : <input type="text" name='marque' placeholder='Marque' value={formData.marque} onChange={handleChange} className='in22 in23' style={inputStyle}/> </p>
              <p>Model : <input type="text" name='modele' placeholder='Modele' value={formData.modele} onChange={handleChange} className='in22 in23' style={inputStyle}/> </p>
              <p>Carburant : <input type="text" name='carburant' placeholder='Carburant' value={formData.carburant} onChange={handleChange} className=' in22 in24' style={inputStyle}/> </p>
              <p>Speed : <input name='boite_vitesse' placeholder='Boite de vitesse' value={formData.boite_vitesse} onChange={handleChange} className=' in22 in23' style={inputStyle}/> </p>
              <p>Air conditioning : <input type="text" name='climatisation' placeholder='Climatisation' value={formData.climatisation} onChange={handleChange} className=' in22' style={inputStyle}/></p>
              <p>Price : <input name='prix_par_jour' placeholder='Prix par jour' type='number' value={formData.prix_par_jour} onChange={handleChange} className='prix in22' style={inputStyle}/> </p>
              <p>Image : <input name='image' placeholder='Lien de l\image' value={formData.image} onChange={handleChange} className='in22 porte' style={inputStyle}/> </p>
     </form>
             <button onClick={handleAddCar} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}} className='saveclose'>Save</button>
             <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}} className='saveclose'>Close</button>
             </div>
       
           </div>
    )}



      </aside>
{/*je veux code ici */}

          <div className="div88">
      {cars.map((car) => (
        <div className="card" key={car.id}>
          <img src={car.image} alt={car.marque} className='card-img' />
          <div style={{ marginTop: "-40px" }}>
            <p className='nunito price'>{car.marque}</p>
            <p className="card-text">
              <span className="price">{car.prix_par_jour} DH</span> 
            </p>
            <div style={{ borderRadius: "20px", height: "40px", paddingTop: "10px", display: "flex", justifyContent: "space-evenly", backgroundColor: "#d3d2d2" }}>
              <a style={{ color: "brown", textDecoration: "none" }} onClick={()=> openPopup(car, "details")}>Delete &gt;</a>
              <span className="line"></span>
              <a  style={{ color: "black", textDecoration: "none" }} onClick={()=> openPopup(car, "reservation")} > Edit &gt;</a>
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
                    <button  style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}  className='saveclose' onClick={() => handleDeleteCar(selectedCar._id)}>Confirm</button>
                    <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}  className='saveclose'>Cancel</button>
      
          </div>
        )}
    
    
    {popupType === 'reservation' && (
          <div id="detailsPopup" style={{ position: "fixed", top: "30%", left: "50%", transform: "translate(-50%, -30%)", backgroundColor: "#fff", padding: "20px", zIndex: 20, borderRadius: "20px",display:"flex", gap:"15px",  
    }}>
            
            
            <div className='popup-form'>
            <form style={{ display: "flex", flexDirection: "column",  }} className='form'>
              
              <p>Brand : <input type="text" name='marque' placeholder='Marque' value={formData.marque} onChange={handleChange} className='in22 in23' style={inputStyle}/> </p>
              <p>Model : <input type="text" name='modele' placeholder='Modele' value={formData.modele} onChange={handleChange} className='in22 in23' style={inputStyle}/> </p>
              <p>Carburant : <input type="text" name='carburant' placeholder='Carburant' value={formData.carburant} onChange={handleChange} className=' in22 in24' style={inputStyle}/> </p>
              <p>Speed : <input name='boite_vitesse' placeholder='Boite de vitesse' value={formData.boite_vitesse} onChange={handleChange} className=' in22 in23' style={inputStyle}/> </p>
              <p>AirConditioning : <input type="text" name='climatisation' placeholder='Climatisation' value={formData.climatisation} onChange={handleChange} className=' in22' style={inputStyle}/></p>
              <p>Price : <input name='prix_par_jour' placeholder='Prix par jour' type='number' value={formData.prix_par_jour} onChange={handleChange} className='prix in22' style={inputStyle}/> </p>
              <p>Image : <input name='image' placeholder='Lien de l\image' value={formData.image} onChange={handleChange} className='in22 porte' style={inputStyle}/> </p>
    </form>
            <button onClick={handleUpdateCar} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}  className='saveclose'>Save</button>
            <button onClick={closePopup} style={{marginLeft:"16px", width:"90px",height:"30px",backgroundColor:"maroon",color:"white", border:"none", borderRadius:"5px"}}  className='saveclose'>Close</button>
            </div>
      
          </div>
        )}
    
        {popupType === 'reserver' && (
          <div id="reserver" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", padding: "20px", zIndex: 20 }}>
            <h2>Book Details</h2>
            <button onClick={closePopup}>Close</button>
          </div>
        )}
      </>
    )}
    
    
    </div>


    
    </div>

   
    
          
    
  )
}
