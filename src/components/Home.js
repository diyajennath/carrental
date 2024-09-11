import React from 'react';
import Slider from 'react-slick';
import './Home.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,          
    infinite: true,      
    speed: 500,          
    slidesToShow: 1,     
    slidesToScroll: 1,   
    autoplay: true,      
    autoplaySpeed: 3000,
  };

  return (
    <>
      {/* Navbar Section */}
      <header>
        <div className="navbar">
          <div className="logo">
            <img src="/images/logo.png" alt="Car Rental Logo" />
          </div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="get-started">Get Started</button>
        </div>
      </header>

      {}
      <section id="home" className="main-header">
      <div className="header-content">
          <h2>Get 15% off your rental!</h2>
          <h2>Choose Your Model </h2>
        </div>
        <Slider {...settings}>
          <div>
            <img src="https://themewagon.github.io/Cental/img/carousel-1.jpg" alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src="https://themewagon.github.io/Cental/img/carousel-2.jpg" alt="Slide 2" className="slider-image" />
          </div>
        </Slider>

        {/* Registration Form */}
        <div className="reservation-container">
          <div className="reservation-form">
            <h2>Continue Car Reservation</h2>
            <form>
              <label>Select Your Car Type</label>
              <select>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
              </select>              
              <input type="text" placeholder="Enter a City or Airport" />
              <label>Need a different Drop Off Location ?</label>
              <input type="text" placeholder="Enter a City or Airport" />              
              <input type="date" />              
              <input type="date" />
              <button type="submit">Book Now</button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
      <h2>Cental <span>Features</span></h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>        
      <div className="features-container">
    <div>
      {/* First two feature items on the left */}
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
    </div>

    {/* Centered car image */}
    <div className="car-image">
      <img src="https://themewagon.github.io/Cental/img/features-img.png" alt="Car" />
    </div>

    <div>
      {/* Last two feature items on the right */}
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
  </div>
      </section>
    </>
  );
};

export default Home;
