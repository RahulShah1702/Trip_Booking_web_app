import React from 'react';
import { Link } from 'react-router-dom';
import tripData from '../data/trips.json';
import TripCard from '../components/TripCard';
import './HomePage.css';

function HomePage() {
  
  const featuredTrips = tripData.slice(0, 3);

  return (
    <div className="home-page">
      <header className="home-hero">
        <img src="images/bg.jpg" alt="" srcset="" />
        <h1>Find Your Dream Vacation</h1>
        <p>Explore the world with XYZ Travel Agency</p>
        {/* You can add a SearchBar component here */}
      </header>
      
      <section className="featured-destinations">
        <h2>Featured Destinations</h2>
        <div className="trip-grid">
          {featuredTrips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;