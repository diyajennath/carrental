import React from 'react';
import './CustomerSupport.css';

const CustomerSupport = () => {
  const customerData = [
    {
      id: 1,
      name: 'Martin Doe',
      image: 'https://themewagon.github.io/Cental/img/team-1.jpg', 
      profession: 'Profession',
    },
    {
      id: 2,
      name: 'Martin Doe',
      image: 'https://themewagon.github.io/Cental/img/team-2.jpg', 
      profession: 'Profession',
    },
    {
      id: 3,
      name: 'Martin Doe',
      image: 'https://themewagon.github.io/Cental/img/team-3.jpg', 
      profession: 'Profession',
    },
    {
      id: 4,
      name: 'Martin Doe',
      image: 'https://themewagon.github.io/Cental/img/team-4.jpg',
      profession: 'Profession',
    },
  ];

  return (
    <section className="customer-support">
      <h1>Customer <span>Support</span> Center</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores
         commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
      <div className="customer-grid">
        {customerData.map((customer) => (
          <div key={customer.id} className="customer-card">
            <img src={customer.image} alt={customer.name} />
            <h2>{customer.name}</h2>
            <p>{customer.profession}</p>
            <div className="social-icons">
              <a href="#facebook"><i className="fa fa-facebook"></i></a>
              <a href="#twitter"><i className="fa fa-twitter"></i></a>
              <a href="#instagram"><i className="fa fa-instagram"></i></a>
              <a href="#linkedin"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerSupport;
