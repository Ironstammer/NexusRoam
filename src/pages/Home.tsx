
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import '../components/styles/Home.css';
import { cities } from '../data/cityData';

const Home = () => {
  const featuredCities = cities.slice(0, 3);

  return (
    <>
      <Navbar />
      
      <div className="hero">
        <h1 className="hero-title">Discover Your Next Adventure</h1>
        <p className="hero-text">
          Explore cities around the world with detailed guides, local tips, and personalized recommendations.
        </p>
        <Link to="/explore">
          <button className="hero-button">Start Exploring</button>
        </Link>
      </div>
      
      <section className="features">
        <h2 className="features-title">Why Choose CityVoyage?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🏨</div>
            <h3 className="feature-title">Best Accommodations</h3>
            <p className="feature-text">
              Find perfect places to stay from luxury hotels to cozy apartments based on your preferences.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3 className="feature-title">Local Cuisine</h3>
            <p className="feature-text">
              Discover authentic local restaurants and cafes recommended by residents and food critics.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🚆</div>
            <h3 className="feature-title">Transportation Tips</h3>
            <p className="feature-text">
              Navigate like a local with our comprehensive transportation guides and recommendations.
            </p>
          </div>
        </div>
      </section>
      
      <section className="popular-cities">
        <h2 className="popular-cities-title">Popular Destinations</h2>
        <div className="cities-grid">
          {featuredCities.map(city => (
            <Card
              key={city.id}
              title={city.name}
              description={city.country}
              image={city.image}
              rating={city.rating}
              buttonText="Explore"
              onClick={() => {}}
            />
          ))}
        </div>
      </section>
      
      <section className="testimonials">
        <h2 className="testimonials-title">What Travelers Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p className="testimonial-text">
              "CityVoyage made planning my trip to Tokyo so much easier. The restaurant recommendations were fantastic!"
            </p>
            <p className="testimonial-author">- Sarah J.</p>
          </div>
          
          <div className="testimonial">
            <p className="testimonial-text">
              "The detailed transportation guides saved us a lot of time and confusion in Paris. Highly recommended!"
            </p>
            <p className="testimonial-author">- Michael T.</p>
          </div>
          
          <div className="testimonial">
            <p className="testimonial-text">
              "I discovered hidden gems in New York that I wouldn't have found otherwise. This is my go-to travel companion now."
            </p>
            <p className="testimonial-author">- Anna K.</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Home;
