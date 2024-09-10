import React from 'react';
import Slider from 'react-slick'; 
import './Service.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Service() {
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section id="services" className="service-section">
      <div className="service-container">
        <h2>Cental Services</h2>
        <div className="services-grid">
          {}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Phone Reservation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-percent"></i>
            </div>
            <h3>Special Rates</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          {}
        </div>

        {}
        <div className="client-reviews">
          <h2>Client Reviews</h2>
          <Slider {...sliderSettings}>
            <div className="review">
              <p>"Great service! The car was clean and the booking process was seamless."</p>
              <h4>– John Doe</h4>
            </div>
            <div className="review">
              <p>"Excellent rates and the customer support was very helpful throughout."</p>
              <h4>– Jane Smith</h4>
            </div>
            <div className="review">
              <p>"Would recommend to anyone! Very smooth experience."</p>
              <h4>– Mark Wilson</h4>
            </div>
            <div className="review">
              <p>"Had a great experience with the one-way rental option."</p>
              <h4>– Lisa Johnson</h4>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Service;
