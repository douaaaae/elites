 import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import logo1 from "../images/P18_0435-removebg-preview.png"
import Navbar from './MemberNav'
import Footer from './Footer1'
import "./Member.css";

export default function MemberClient() {
   const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [popupType, setPopupType] = useState(null);
    const [userToken, setUserToken] = useState(localStorage.getItem('token'));
    const [filterMarque, setFilterMarque] = useState('');
    const [filterBoite, setFilterBoite] = useState('');
    const [age, setAge] = useState('');
    const [permis, setPermis] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    const fetchCars = async () => {
      let url = 'https://backend-location-rosy.vercel.app/api/cars';
  
      const params = new URLSearchParams();
      if (filterMarque) params.append('marque', filterMarque);
      if (filterBoite) params.append('boite_vitesse', filterBoite);
      if ([...params].length) url += `?${params.toString()}`;
  
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("Données reçues:", data);
  
        if (Array.isArray(data)) {
          setCars(data);
        } else {
          console.error("Les données reçues ne sont pas un tableau :", data);
          setCars([]);
        }
      } catch (err) {
        console.error("Erreur lors du chargement des voitures:", err);
        setCars([]);
      }
    };
  
    useEffect(() => {
      fetchCars();
    }, [filterMarque, filterBoite]);
  
    const handlePopup = (car, type) => {
      setSelectedCar(car);
      setPopupType(type);
    };
  
    const closePopup = () => {
      setSelectedCar(null);
      setPopupType(null);
    };
     const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    color: "black"
  };
  
    const taglines = ["FEELING THE RUSH", "UNLEASH THE POWER", "DRIVE THE LEGEND"];
    const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
      }, 1500);
      return () => clearInterval(interval);
    }, []);
  
    const currentTagline = taglines[currentTaglineIndex];
  
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialAge = queryParams.get('age');
    const initialLicense = queryParams.get('license');
    const initialPickupDate = queryParams.get('pickupDate');
    const initialReturnDate = queryParams.get('returnDate');
  
    const [agee, setAgee] = useState(initialAge || '');
    const [license, setLicense] = useState(initialLicense || '');
    const [pickupDate, setPickupDate] = useState(initialPickupDate || '');
    const [returnDate, setReturnDate] = useState(initialReturnDate || '');
  
    useEffect(() => {
      setAgee(initialAge || '');
      setLicense(initialLicense || '');
      setPickupDate(initialPickupDate || '');
      setReturnDate(initialReturnDate || '');
    }, [location.search]);
  
    const handleReservation = async (e) => {
      e.preventDefault();
  
      if (!selectedCar || !selectedCar._id) {
        alert("Erreur : aucune voiture sélectionnée !");
        return;
      }
  
      const reservationData = {
        carId: selectedCar._id,
        age,
        permis,
        startDate,
        endDate,
      };
  
      try {
        const res = await fetch("https://backend-location-rosy.vercel.app/api/reservations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${userToken}`,
          },
          body: JSON.stringify(reservationData),
        });
  
        if (res.ok) {
          alert("Réservation réussie !");
          closePopup();
          setAge(""); setPermis(""); setStartDate(""); setEndDate("");
        } else {
          const error = await res.json();
          alert("Erreur lors de la réservation : " + error.message);
        }
      } catch (error) {
        alert("Erreur réseau.");
      }
    };

  return (
    <div>
      <Navbar />
      
      <div className="idk">
        <div className="idk2">
          <div className="hero-text">
            <h1 className="main-title">PUSHING THE LIMITS</h1>
            <h3 className="rotating-tagline">{currentTagline}</h3>
          </div>
        </div>

        <div className="ima">
          <img src={logo1} alt="logo" />
        </div>

        <div className="divm">
          <div>
            <h5>Age</h5>
            <input className='input55' type="text" value={agee} placeholder="Enter your Age" onChange={(e) => setAgee(e.target.value)} />
          </div>
          <div>
            <h5>Permis</h5>
            <input className='input55' type="text" value={license} placeholder="Enter your permis" onChange={(e) => setLicense(e.target.value)} />
          </div>
          <div>
            <h5>Pick Up Date</h5>
            <input className='input55' value={pickupDate} type="datetime-local" onChange={(e) => setPickupDate(e.target.value)} />
          </div>
          <div>
            <h5>Return Date</h5>
            <input className='input55' value={returnDate} type="datetime-local" onChange={(e) => setReturnDate(e.target.value)} />
          </div>
          <div className="container">
            <button style={{ color: "white", backgroundColor: "rgb(221, 29, 29)", width: "90px", marginTop: "30px" }}>Search Car</button>
          </div>
        </div>
      </div>

      <div className="divn">
        <div>
        
          <select value={filterMarque} onChange={(e) => setFilterMarque(e.target.value)}>
            <option value="">Brand</option>
            <option value="Citroën">Citroën</option>
            <option value="Renault">Renault</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Peugeot">Peugeot</option>
            <option value="BMW">BMW</option>
          </select>
        </div>
        <div>
          
          <select value={filterBoite} onChange={(e) => setFilterBoite(e.target.value)}>
            <option value="">Speed</option>
            <option value="Automatique">Automatique</option>
            <option value="Manuelle">Manuelle</option>
          </select>
        </div>
      </div>

      <div className="div77">
        {Array.isArray(cars) && cars.map((car) => (
          <div className="card" key={car._id}>
            {car.image && <img src={car.image} alt={car.marque} className='card-img' />}
            <div style={{ marginTop: "-40px" }}>
              <p className='marque22'>{car.marque}</p>
              <p className="card-text">
                <span className="price">{car.prix_par_jour} dh</span>
              </p>
              <div style={{ borderRadius: "20px", height: "40px", paddingTop: "10px", display: "flex", justifyContent: "space-evenly", backgroundColor: "#d3d2d2" }}>
                <a style={{ color: "brown", textDecoration: "none", cursor: "pointer" }} onClick={() => handlePopup(car, 'reservation')}>Résérver &gt;</a>
                <span className="line"></span>
                <a style={{ color: "black", textDecoration: "none", cursor: "pointer" }} onClick={() => handlePopup(car, 'details')}>Détails &gt;</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedCar && (
        <>
          <div id="overlay" style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 10 }} onClick={closePopup}></div>

          {popupType === 'details' && (
            <div id="detailsPopup" style={{ position: "fixed", top: "30%", left: "50%", transform: "translate(-50%, -30%)", backgroundColor: "#fff", padding: "20px", zIndex: 20, borderRadius: "20px", display: "flex", gap: "15px" }}>
              <img src={selectedCar.image} alt="" style={{ height: "200px", width: "200px" }} className='image2' />
              <div>
                <p><strong style={{ color: "maroon" }}>Brand:</strong> {selectedCar.marque}</p>
                <p><strong style={{ color: "maroon" }}>Model:</strong> {selectedCar.modele}</p>
                <p><strong style={{ color: "maroon" }}>Price/day:</strong> {selectedCar.prix_par_jour} dh</p>
                <p><strong style={{ color: "maroon" }}>Carburant:</strong> {selectedCar.carburant}</p>
                <p><strong style={{ color: "maroon" }}>Speed:</strong> {selectedCar.boite_vitesse}</p>
                <p><strong style={{ color: "maroon" }}>Climatisation:</strong> {selectedCar.climatisation}</p>
                <button onClick={closePopup} style={{ marginLeft: "16px", width: "90px", height: "30px", backgroundColor: "maroon", color: "white", border: "none", borderRadius: "5px" }}>Close</button>
              </div>
            </div>
          )}
          {popupType === 'reservation' && (
            <div id="reservationPopup" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", padding: "30px", zIndex: 20, borderRadius: "12px", width: "480px", boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}>
              <h2 style={{ color: "maroon", textAlign: "center" }}>Reservation</h2>
              <form onSubmit={(e) => handleReservation(e)}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
                  <div>
                    <label>Age</label><br />
                    <input className="input55" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Your âge" required style={inputStyle} />
                  </div>
                  <div>
                    <label>Permis Number</label><br />
                    <input className="input55" type="text" value={permis} onChange={(e) => setPermis(e.target.value)} placeholder=" permis number" required style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
                  <div>
                    <label>Pick Up Date</label><br />
                    <input className="input55 dt" type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} required style={inputStyle} />
                  </div>
                  <div>
                    <label>Return Date</label><br />
                    <input className="input55 dt" type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} required style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
                  <button type="submit" style={{ backgroundColor: "maroon", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Reserver</button>
                  <button type="button" onClick={closePopup} style={{ backgroundColor: "gray", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Cancel</button>
                </div>
              </form>
            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  )
}