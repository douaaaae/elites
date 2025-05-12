import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { reservationId } = useParams(); // 🔁 On récupère l'ID de la réservation

  const [error, setError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (error) {
        setError(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        // ✅ Paiement Stripe OK — on confirme dans la BDD maintenant
        const token = localStorage.getItem('token');

        const res = await fetch('https://backend-location-rosy.vercel.app/api/stripe/confirm-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Si tu protèges la route
          },
          body: JSON.stringify({ reservationId }),
        });

        const data = await res.json();

        if (res.ok) {
          setPaymentSuccess(true);
          setTimeout(() => navigate('/member'), 4000); // Redirection après succès
        } else {
          setError(data.error || 'Erreur lors de la confirmation backend');
        }
      }
    } catch (err) {
      setError('Erreur lors du paiement.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  style={{
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  }}
>
  <h3 style={{ fontSize: '22px', textAlign: 'center', margin: 0 }}>
    Enter Your Card Details
  </h3>

  <CardElement
    options={{
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }}
  />

  <button
    type="submit"
    disabled={!stripe || processing || paymentSuccess}
    style={{
      padding: '12px',
      backgroundColor: paymentSuccess ? '#ccc' : '#5469d4',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: paymentSuccess ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.3s ease',
    }}
  >
    {processing
      ? 'Processing...'
      : paymentSuccess
      ? '✅ Payment Completed'
      : 'Pay Now'}
  </button>

  {error && (
    <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
  )}
  {paymentSuccess && (
    <div style={{ color: 'green', textAlign: 'center' }}>
      ✅ Payment successful! Redirecting...
    </div>
  )}
</form>
  );
};

export default CheckoutForm;
