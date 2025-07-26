import React, { useState, useEffect } from 'react';
import tripData from '../data/trips.json';
import TripCard from '../components/TripCard';
import './SearchResultsPage.css';

function SearchResultsPage() {
  const [trips, setTrips] = useState(tripData);
  const [filters, setFilters] = useState({
    location: '',
    price: '',
    duration: '',
  });

  useEffect(() => {
    let filteredData = tripData;

    if (filters.location) {
      filteredData = filteredData.filter(trip =>
        trip.destination.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.price) {
      filteredData = filteredData.filter(
        trip => parseInt(trip.price) <= parseInt(filters.price)
      );
    }
    setTrips(filteredData);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="search-results-page">
      <aside className="filter-panel">
        <h3>Filter Trips</h3>
        <div className="filter-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" onChange={handleFilterChange} placeholder="e.g., Bali" />
        </div>
        <div className="filter-group">
          <label htmlFor="price">Max Price: {filters.price || 50000}</label>
          <input type="range" id="price" name="price" min="50000"  max="300000" step="10000" onChange={handleFilterChange} />
        </div>
      </aside>
      <div className="results-grid">
        {trips.length > 0 ? (
          trips.map(trip => <TripCard key={trip.id} trip={trip} />)
        ) : (
          <p>No trips match your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;