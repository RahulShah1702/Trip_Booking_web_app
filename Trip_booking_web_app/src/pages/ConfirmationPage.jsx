import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ConfirmationPage.css';

function ConfirmationPage() {
  const location = useLocation();
  const { trip, formData } = location.state || {};

  if (!trip) {
    return (
      <div className="confirmation-page">
        <h1>Something went wrong!</h1>
        <p>We couldn't find your booking details.</p>
        <Link to="/" className="home-link">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="confirmation-page">
      <div className="confirmation-box">
        <div className="checkmark">✓</div>
        <h1>Booking Confirmed!</h1>
        <p>Thank you, {formData.fullName}. Your trip to <strong>{trip.destination}</strong> is booked.</p>
        <p>A confirmation email has been sent to {formData.email}.</p>
        <hr />
        <h3>Booking Receipt</h3>
        <p><strong>Destination:</strong> {trip.destination}</p>
        <p><strong>Duration:</strong> {trip.duration}</p>
        <p><strong>Total Paid:</strong> Rs{(trip.price * 1.18).toFixed(2)}</p>
        <Link to="/" className="home-link">Explore More Trips</Link>
      </div>
    </div>
  );
}

export default ConfirmationPage;