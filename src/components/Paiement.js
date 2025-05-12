// src/pages/Paiement.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm'; // Assure-toi du bon chemin

const stripePromise = loadStripe('pk_test_51RNgG8ROllIbNFHBzRbbfQiI85JlhFULEfFBhFuLOjkb0SVes3LWTIofgelKErLpc8GitT2eMQ7SDZCOhtm9J0j900k6fv7R7w');

const Paiement = () => {
  const { reservationId } = useParams();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('https://backend-location-rosy.vercel.app/api/stripe/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ reservationId }),
        });

        if (!res.ok) {
          throw new Error('Échec de la création du paiement');
        }

        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.error(err);
        setError('Erreur lors de la récupération des informations de paiement.');
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [reservationId]);

  const appearance = { theme: 'stripe' };
  const options = { clientSecret, appearance };

  if (loading) return <div>Loading payment...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      flexDirection: 'column',
      padding: '20px',
      backgroundColor: '#f5f7fa',
    }}
  >
    <h2 style={{ marginBottom: '20px', fontSize: '28px', color: '#333' }}>
      💳 Secure Payment for Your Reservation
    </h2>

    {clientSecret ? (
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm clientSecret={clientSecret} />
      </Elements>
    ) : (
      <div>Unable to load payment information.</div>
    )}
  </div>
  );
};

export default Paiement;
