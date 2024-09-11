import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about"  className="about">
            <div className="about-text">
                <h2>Cental <span>About</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                <div className="info-boxes">
                    <div className="info-box">
                        <img src="	https://themewagon.github.io/Cental/img/about-icon-1.png" alt="Our Vision" />
                        <h3>Our Vision</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>
                    <div className="info-box">
                        <img src="https://themewagon.github.io/Cental/img/about-icon-2.png" alt="Our Mission" />
                        <h3>Our Mission</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="content">
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquam ipsum. Sed suscipit dolorem libero sequi aut natus debitis reprehenderit facilis quaerat similique, est at in eum. Quo, obcaecati in!</p>
                </div>
                
                <div className="experience-checklist-container">
                  <div className="experience">
                    <h1>17</h1>
                    <p>Years Of Experience</p>                                  
                    
                  </div>
                  <ul className="checklist">
                  <li><span className="check-icon">✔</span> Morbi tristique senectus</li>
                  <li><span className="check-icon">✔</span> A scelerisque purus</li>
                  <li><span className="check-icon">✔</span> Dictumst vestibulum</li>
                  <li><span className="check-icon">✔</span> Dio aenean sed adipiscing</li>
                 </ul>
                </div>
                <div className="experiences">
                <button>More About Us</button>                
                </div>
            </div>              
                       
            
            <div className="images">
                <div className="top-image">
                    <img src="https://themewagon.github.io/Cental/img/about-img.jpg" alt="Hand holding car key" />
                </div>
                <div className="bottom-image">
                    <img src="https://themewagon.github.io/Cental/img/about-img-1.jpg" alt="Woman with car" />
                </div>
            </div>
        </section>
    );
}

export default About;
