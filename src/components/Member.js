import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo1 from "../images/P18_0435-removebg-preview.png";
import Navbar from './Navbar';
import Footer from './Footer';
import "./Member.css";

export default function Member() {
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

      <div className="divm">
        <div>
          <label>Brand</label><br />
          <select value={filterMarque} onChange={(e) => setFilterMarque(e.target.value)}>
            <option value="">Toutes</option>
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
          <label>Speed</label><br />
          <select value={filterBoite} onChange={(e) => setFilterBoite(e.target.value)}>
            <option value="">Toutes</option>
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
              <div style={{ borderRadius: "20px", height: "40px", paddingTop: "10px", display: "flex", justifyContent: "space-evenly", backgroundColor: "#e6e4e4" }}>
                <Link to="/signin"><a style={{ color: "brown", textDecoration: "none", cursor: "pointer" }} onClick={() => handlePopup(car, 'reservation')}>Reserver &gt;</a></Link>
                <span className="line"></span>
                <a style={{ color: "black", textDecoration: "none", cursor: "pointer" }} onClick={() => handlePopup(car, 'details')}>Details &gt;</a>
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
              {selectedCar.image && (
                <img src={selectedCar.image} alt="" style={{ height: "200px", width: "200px" }} />
              )}
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
        </>
      )}

      <Footer />
    </div>
  );
}
