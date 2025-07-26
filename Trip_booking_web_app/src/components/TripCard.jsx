import { Link } from 'react-router-dom';
import './TripCard.css';

function TripCard({ trip }) {
  return (
    <div className="trip-card">
      <img src={trip.images[0]} alt={trip.destination} className="trip-card-image" />
      <div className="trip-card-content">
        <h3 className="trip-card-destination">{trip.destination}</h3>
        <div className="trip-card-details">
          <span>{trip.duration}</span>
          <span>Rs{trip.price}</span>
          <span>⭐ {trip.rating}</span>
        </div>
        <Link to={`/trip/${trip.id}`} className="trip-card-button">View Details</Link>
      </div>
    </div>
  );
}

export default TripCard;  



