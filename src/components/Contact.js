import React from 'react';
import "./contact.css";
import Footer from './Footer1';
import Navbar from './Navbar';
export default function Contact() {
  return (
    <div>
        <Navbar/>
      <div className="bodyy">
        <p>Find us at our address:</p>

        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.353991739872!2d-5.803789999999999!3d35.75946500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b876c62f97b27%3A0xfedf2735f6fd8b34!2sAmine%20Car!5e0!3m2!1sfr!2sma!4v1711634638765!5m2!1sfr!2sma"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0, width: "100%", height: "400px" }}
          ></iframe>
        </div>
      </div>

      <section className="contact-us2">
        <div className="container2">
          <h1 className="heading2">Or</h1>
          <div className="contact-container2">
            <div className="contact-info2">
              <h3>Contact Us</h3>
              <p>
                We'd love to hear from you. Whether you have questions about our cars or tech
                products, feel free to reach out!
              </p>
              <div className='iconss2'>
              <div className="info-item2">
                <i className="fas fa-phone"></i>
                <p>(+212)05.39.94.40.50</p>
              </div>
              <div className="info-item2">
                <i className="fas fa-envelope"></i>
                <p>Amine@aminecar.pro.ma</p>
              </div>
              <div className="info-item2">
                <i className="fas fa-map-marker-alt"></i>
                <p>1er étage، 43, boulevard Mohamed V، n13 Tangier 90000</p>
              </div>
              </div>
            </div>

            <div className="contact-form2">
              <h3>Send Us a Message</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name" className='label2'>Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Full Name" className='input2' required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className='label2'>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email Address"
                    required
                    className='input2'
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className='label2'>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    rows="5"
                    required
                    className='textarea2'
                  ></textarea>
                </div>
                <button type="submit" className="btn2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
