import React from 'react';
import { useParams } from 'react-router-dom';
import tripData from '../data/trips.json';
import './TripDetailsPage.css';
import { Link } from 'react-router-dom';

function TripDetailsPage() {
  const { id } = useParams();
  const trip = tripData.find(t => t.id === parseInt(id));

  if (!trip) {
    return <div className="loading">Trip not found!</div>;
  }

  return (
    <div className="trip-details-page">
      <div className="details-header">
        <h1>{trip.destination}</h1>
        <div className="quick-info">
          <span>{trip.duration}</span> • <span>Rs{trip.price}</span> • <span>⭐ {trip.rating}</span>
        </div>
      </div>
      
      <div className="image-gallery">
        {trip.images.map((image, index) => (
          <img key={index} src={image} alt={`Rs{trip.destination} view ${index + 1}`} />
        ))}
      </div>

      <div className="details-content">
        <div className="itinerary">
          <h3>Itinerary</h3>
          <ul>
            {trip.itinerary.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
        </div>
        <div className="pricing-box">
            <h3>Pricing Breakdown</h3>
            <p><strong>Base Price:</strong> Rs{trip.price}</p>
            <p><strong>Taxes & Fees:</strong> Rs{(trip.price * 0.18).toFixed(2)}</p>
            <hr/>
            <p><strong>Total:</strong> Rs{(trip.price * 1.18).toFixed(2)}</p>
            
            <Link to={`/checkout/${trip.id}`} className="book-now-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default TripDetailsPage;