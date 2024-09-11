import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientReviews.css"; // Add custom CSS for the layout

const ClientReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,  // Shows two slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  // Shows one slide on smaller screens
        },
      },
    ],
  };

  return (
    <section id="services" className="client-reviews-section">
      <h2 className="section-title">
        Our Clients <span className="highlight">Reviews</span>
      </h2>
      <p className="section-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores
       commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
      </p>

      <div className="review-carousel">
        <Slider {...settings}>
          <div className="review-card">
            <div className="review-content">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Person Name"
                className="client-image"
              />
              <h3>Person Name</h3>
              <p>Profession</p>
              <div className="review-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                soluta neque ab repellendus impedit.
              </p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-content">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Person Name"
                className="client-image"
              />
              <h3>Person Name</h3>
              <p>Profession</p>
              <div className="review-rating">
                <span>⭐⭐⭐</span>
              </div>
              <p className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                soluta neque ab repellendus impedit.
              </p>
            </div>
          </div>

          {}
          <div className="review-card">
            <div className="review-content">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Person Name"
                className="client-image"
              />
              <h3>Person Name</h3>
              <p>Profession</p>
              <div className="review-rating">
                <span>⭐⭐⭐</span>
              </div>
              <p className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                soluta neque ab repellendus impedit.
              </p>
            </div>
          </div>

        </Slider>
      </div>
    </section>
  );
};

export default ClientReviews;
