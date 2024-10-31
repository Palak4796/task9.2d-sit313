import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentPage.css'

const stripePromise = loadStripe('pk_test_51QFw5tLZj8lyCJJAwt2e8AendtywzAnxfGKHm2rfAbk9Q6kszxDXmcwToUMx1jTTmqndTGsPJgymNxmzBGifVLZj00g95T7Wob');

const CheckoutForm = () => {
   const stripe = useStripe();
   const elements = useElements();
   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(null);

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
         return; 
      }

      const cardElement = elements.getElement(CardElement);
      const response = await fetch('http://localhost:3000/create-payment-intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 5000 }),
    });

      const { clientSecret } = await response.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: cardElement,
         },
      });

      if (error) {
         setError(error.message);
         setSuccess(null);
      } else if (paymentIntent.status === 'succeeded') {
         setSuccess('Payment successful!');
         setError(null);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <CardElement />
         <button type="submit" disabled={!stripe}>
            Pay
         </button>
         {error && <p style={{ color: 'red' }}>{error}</p>}
         {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
   );
};

const PaymentPage = () => {
   return (
      <Elements stripe={stripePromise}>
         <div className="payment-container">
            <h1>Payment Page</h1>
            <p>Select your payment method to proceed.</p>
            <CheckoutForm />
         </div>
      </Elements>
   );
};

export default PaymentPage;
