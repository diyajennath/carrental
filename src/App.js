// src/App.js
import React from 'react';
import Home from './components/Home'; 
import Service from './components/Service';
import About from './components/About';
import ClientReviews from './components/ClientReviews';
import Contact from './components/Contact';
import CustomerSupport from './components/CustomerSupport';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <ClientReviews />
      <CustomerSupport />
      <Contact />
      
      
        
            
       

    </div>
  );
}

export default App;