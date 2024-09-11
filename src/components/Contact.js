import React from "react";
import './Contact.css'; // Assuming custom styles

const Contact = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit consectetur adipiscing
            elit.
          </p>
          <div className="subscribe-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="#about">About</a></li>
            <li><a href="#cars">Cars</a></li>
            <li><a href="#types">Car Types</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact us</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Business Hours</h3>
          <p>Mon - Friday: <br /> 09.00 am to 07.00 pm</p>
          <p>Saturday: <br /> 10.00 am to 05.00 pm</p>
          <p>Vacation: <br /> All Sunday is our vacation</p>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <p><i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA</p>
          <p><i className="fas fa-envelope"></i> info@example.com</p>
          <p><i className="fas fa-phone-alt"></i> +012 345 67890</p>
          <p><i className="fas fa-fax"></i> +012 345 67890</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
