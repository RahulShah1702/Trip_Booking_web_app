import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tripData from '../data/trips.json';
import './CheckoutPage.css';

function CheckoutPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = tripData.find(t => t.id === parseInt(id));

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    // if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (!formData.cvv) newErrors.cvv = 'CVV is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // On successful validation, navigate to the confirmation page
      navigate('/confirmation', { state: { trip, formData } });
    }
  };

  if (!trip) {
    return <h2>Trip not found!</h2>;
  }

  return (
    <div className="checkout-page">
      <div className="trip-summary">
        <h2>Booking Summary</h2>
        <img src={trip.images[0]} alt={trip.destination} className="summary-image" />
        <h3>{trip.destination}</h3>
        <p><strong>Duration:</strong> {trip.duration}</p>
        <p className="summary-price"><strong>Total Price:</strong> Rs{(trip.price * 1.1).toFixed(2)}</p>
      </div>
      <form onSubmit={handleSubmit} className="checkout-form" noValidate>
        <h2>Your Details</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
         <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="Phone" name="Phone" value={formData.phone} onChange={handleInputChange} />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>
        
        <h2>Payment Information</h2>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} />
          {errors.cardNumber && <p className="error-text">{errors.cardNumber}</p>}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
            <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} />
            {errors.expiryDate && <p className="error-text">{errors.expiryDate}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} />
            {errors.cvv && <p className="error-text">{errors.cvv}</p>}
          </div>
        </div>
        <button type="submit" className="submit-booking-button">Confirm & Pay</button>
      </form>
    </div>
  );
}

export default CheckoutPage;