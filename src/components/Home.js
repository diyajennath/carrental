import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <>
      {}
      <header>
        <div className="navbar">
          <div className="logo">
            <img src="/images/logo.png" alt="Car Rental Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="get-started">Get Started</button>
        </div>
      </header>

      {}
      <section id="home" className="main-header">
        <div className="header-content">
          <h1>Get 15% off your rental</h1>
          <p>Plan your trip now</p>
        </div>
      </section>

      {}
      <section className="reservation-container">
        <div className="reservation-form">
          <h2>Continue Car Reservation</h2>
          <form>
            <label>Select Your Car Type</label>
            <select>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
            </select>

            <label>Pick Up Location</label>
            <input type="text" placeholder="Enter a City or Airport" />

            <label>Drop Off Location</label>
            <input type="text" placeholder="Enter a City or Airport" />

            <label>Pick Up Date</label>
            <input type="date" />

            <label>Drop Off Date</label>
            <input type="date" />

            <button type="submit">Book Now</button>
          </form>
        </div>
      </section>

      {}
      <section id="features" className="features-section">
        <h2>Cental Features</h2>
        <div className="features-container">
          <div className="feature-item">
            <div className="icon">🏆</div>
            <h3>First Class Services</h3>
            <p>Enjoy top-notch services for an unforgettable experience.</p>
          </div>
          <div className="feature-item">
            <div className="icon">🛠️</div>
            <h3>24/7 Road Assistance</h3>
            <p>We are here to assist you anytime, anywhere.</p>
          </div>
          <div className="feature-item">
            <div className="icon">🏷️</div>
            <h3>Quality at Minimum</h3>
            <p>Get the best quality service at the most affordable rates.</p>
          </div>
          <div className="feature-item">
            <div className="icon">🗝️</div>
            <h3>Free Pick-Up & Drop-Off</h3>
            <p>We provide convenient free pick-up and drop-off services.</p>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
