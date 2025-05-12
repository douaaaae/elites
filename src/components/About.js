import React from 'react';
import { Link } from 'react-router-dom';
import "./about.css";
import Footer from './Footer';
import Navbar from './Navbar';


export default function About() {
  return (
    <div>
        <Navbar/>
      <div className="hero">
        <section className="hero1">
          <div className="hero-text">
            <h2>About-Us ?</h2>
            <p><Link to="/"><a href="#">Home</a></Link> / About-Us ?</p>
          </div>
        </section>
      </div>

      <div className="body">
        <section className="about-us">
          <div className="left">
            <h1>
              We value you and want <br /> you to have the very <br /> best experience
            </h1>
          </div>
          <div className="right">
  <p>
    At <strong>Elites</strong>, we are redefining the car rental experience. Whether you need a vehicle for a weekend getaway,
    a business trip, or daily commuting, our platform makes renting a car simple, fast, and secure.
  </p>
  <br />
  <p>
    Our wide fleet includes everything from compact city cars to luxury vehicles, all available at competitive prices. 
    With powerful filters and real-time availability, finding the right car has never been easier.
  </p>
  <br />
  <p>
    For vehicle owners, our platform offers a smart way to manage listings and reservations efficiently. 
    At Elites, we’re not just offering cars—we’re delivering comfort, flexibility, and trust to every journey.
  </p>
</div>
        </section>

        <br />

        <section className="stats-section">
          <div className="stats-grid">
            {/* Colonne 1 */}
            <div className="column">
              <div className="stats-card">
                <h2>20+</h2><br />
                <p>Years in <br /> Business</p>
              </div>
              <div className="image-box small">
                <img src="img3.jpg" alt="Car in desert" />
              </div>
            </div>

            {/* Image principale au centre */}
            <div className="image-box large">
              <img src="img1.jpg" alt="Car Deal" />
            </div>

            {/* Colonne 3 */}
            <div className="column">
              <div className="image-box medium">
                <img src="img2.jpg" alt="Luxury car" />
              </div>

              <div className="image-row">
                <div className="stats-card2">
                  <h2>500+</h2><br />
                  <p>Happy <br /> Customers</p>
                </div>
                <div className="image-box small">
                  <img src="car.jpg" alt="Car in desert" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <br /><br />

        <section className="services">
  <h3 className="section-subtitle">Why Choose Us</h3>
  <h2 className="section-title">Our Services</h2>
  <p className="section-description">
    We provide a wide range of services to make your car rental experience easy, fast, and reliable.
  </p>

  <div className="services-grid">
    <div className="service-item">
      <div className="service-icon">
        <img src="icon-support.png" alt="Support Icon" />
      </div>
      <h4>24/7 Customer Support</h4>
      <p>Our team is available around the clock to assist you with any questions or emergencies.</p>
    </div>

    <div className="service-item">
      <div className="service-icon">
        <img src="icon-delivery.jpg" alt="Delivery Icon" />
      </div>
      <h4>Vehicle Delivery</h4>
      <p>We deliver the car to your desired location to make your rental experience even more convenient.</p>
    </div>

    <div className="service-item">
      <div className="service-icon">
        <img src="icon-management.png" alt="Booking Icon" />
      </div>
      <h4>Online Booking</h4>
      <p>Book your car in just a few clicks using our secure and user-friendly online platform.</p>
    </div>
  </div>
</section>


        <br /><br />

        <section className="section__container">
  <h1>What Our Customers Say</h1>
  <div className="section__grid">
    <div className="section__card">
      <span><i className="ri-double-quotes-l"></i></span>
      <h4>Fast and Easy Booking</h4>
      <p>
        Booking a car was so simple and quick. The process was smooth, and the car was in excellent condition. Great experience!
      </p>
      <img src="user-1.jpg" alt="user" />
      <h5>Allan Collins</h5>
      <h6>Frequent Traveler</h6>
    </div>

    <div className="section__card">
      <span><i className="ri-double-quotes-l"></i></span>
      <h4>Excellent Customer Service</h4>
      <p>
        The support team was very helpful and available 24/7. They made sure everything went perfectly with my rental.
      </p>
      <img src="user-2.jpg" alt="user" />
      <h5>Tanya Grant</h5>
      <h6>Business Consultant</h6>
    </div>

    <div className="section__card">
      <span><i className="ri-double-quotes-l"></i></span>
      <h4>Reliable and Affordable</h4>
      <p>
        The car was clean, affordable, and ready on time. I’ll definitely rent from them again. Totally hassle-free!
      </p>
      <img src="user-3.jpg" alt="user" />
      <h5>Clay Washington</h5>
      <h6>Designer</h6>
    </div>
  </div>
</section>

      </div>
      <Footer/>
    </div>
  );
}
