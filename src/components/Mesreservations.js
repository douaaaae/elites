import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mesreservation.css';
import Navbar from './MemberNav';
import Footer from './Footer';

const MesReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [age, setAge] = useState('');
  const [permis, setPermis] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [editingReservation, setEditingReservation] = useState(false);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://backend-location-rosy.vercel.app/api/reservations/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setReservations(response.data);
      } catch (err) {
        console.error('Erreur de récupération des réservations:', err);
        setError('Impossible de récupérer les réservations');
      } finally {
        setLoading(false);
      }
    };
    fetchReservations();
  }, []);

  const handleEditReservation = (reservation) => {
    setEditingReservation(true);
    setSelectedReservation(reservation);
    setStartDate(reservation.startDate.slice(0, 10));
    setEndDate(reservation.endDate.slice(0, 10));
    setAge(reservation.age);
    setPermis(reservation.permis);
  };

  const handleUpdateReservation = async () => {
    if (!startDate || !endDate || !age || !permis) {
      setError('Tous les champs doivent être remplis');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `https://backend-location-rosy.vercel.app/api/reservations/${selectedReservation._id}`,
        {
          startDate,
          endDate,
          age: Number(age),
          permis,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updatedReservation = response.data.reservation;
      setReservations((prev) =>
        prev.map((res) =>
          res._id === updatedReservation._id ? updatedReservation : res
        )
      );

      setEditingReservation(false);
      setError('');
      setSuccessMessage('Réservation mise à jour avec succès ✅');

      setTimeout(() => {
        setSuccessMessage('');
      }, 4000);
    } catch (err) {
      console.error('Erreur lors de la mise à jour de la réservation:', err);
      setError(err.response?.data?.message || 'Erreur lors de la mise à jour');
    }
  };

  const handleCancelReservation = async (reservationId) => {
    try {
      await axios.put(`https://backend-location-rosy.vercel.app/api/reservations/cancel/${reservationId}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setReservations(reservations.map(res =>
        res._id === reservationId ? { ...res, status: 'annulée' } : res
      ));
    } catch (err) {
      setError("Erreur lors de l'annulation de la réservation.");
    }
  };

  if (loading) return <div>Loading reservations...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <Navbar />
      <div className="reservations-container">
        <h1 className="reservations-title">My Reservations</h1>

        {successMessage && (
          <div className="success-message" style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</div>
        )}

        {editingReservation && selectedReservation && (
          <div className="overlay">
            <h3>Modify the reservation</h3>
            <div className="edit-form">
              <label>Pick Up Date :</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} /><br />
              <label>Return date :</label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} /><br />
              <button onClick={handleUpdateReservation}>Enregistrer</button>
              <button onClick={() => setEditingReservation(false)} style={{ marginLeft: '10px' }}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {reservations.length === 0 ? (
          <p>No reservations found.</p>
        ) : (
          <table className="reservations-table">
            <thead>
              <tr>
                <th>Car</th>
                <th>Dates</th>
                <th>Statut</th>
                <th>Price total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => {
                const start = new Date(reservation.startDate);
                const end = new Date(reservation.endDate);
                return (
                  <tr key={reservation._id}>
                    <td>{reservation.car.modele} ({reservation.car.marque})</td>
                    <td>{start.toLocaleDateString()} - {end.toLocaleDateString()}</td>
                    <td>{reservation.status}</td>
                    <td>{reservation.prixTotal} dh</td>
                    <td>
                      {reservation.status === 'acceptee' && (
                        <>
                          <button className="action-btn modify-btn" onClick={() => handleEditReservation(reservation)}>Edit</button>
                          {reservation.paye ? (
                            <span style={{ marginLeft: '10px', color: 'green', fontWeight: 'bold' }}>
                              ✅ Already paid
                            </span>
                          ) : (
                            <button
                              className="action-btn pay-btn"
                              onClick={() => window.location.href = `/paiement/${reservation._id}`}
                              style={{ marginLeft: '10px', backgroundColor: '#4CAF50', color: 'white' }}
                            >
                              Pay
                            </button>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MesReservations;
