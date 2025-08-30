import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [registered, setRegistered] = useState(false);

  

  const handleSubmit = (e) => {
  e.preventDefault();
  setRegistered(true);
};

  return (
    <div>
      <video autoPlay muted loop playsInline id="bg-video">
        <source src="/vid121.mp4" type="video/mp4" />
      </video>

      <div className="container-wrapper">
        <div className="form-container">
          <div className="banner">
            <img src="newban.png" alt="Event Banner" className="event-banner" />
          </div>

          {registered ? (
            <div className="success-page">
              <h2>✅ You have successfully registered!</h2>
              <p>Thank you for registering. See you at the event! 🎉</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="input-grid">
                <div className="input-group">
                  <label htmlFor="full-name">Full Name* </label>
                  <input
                    type="text"
                    id="full-name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email Address* </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="contact-no">Contact Number* </label>
                  <input
                    type="tel"
                    id="contact-no"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="input-group-row">
                  <div className="input-group">
                    <label htmlFor="year">Current Year *</label>
                    <select id="year" required>
                      <option value="">Select year</option>
                      <option value="first">First Year</option>
                      <option value="second">Second Year</option>
                      <option value="third">Third Year</option>
                      <option value="fourth">Fourth Year</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label htmlFor="branch">Branch*</label>
                    <select id="branch" required>
                      <option value="">Select branch</option>
                      <option value="cs">COMPS</option>
                      <option value="csbs">CSBS</option>
                      <option value="ai">AIDS</option>
                      <option value="it">IT</option>
                      <option value="ce">CCE</option>
                      <option value="excp">EXTC</option>
                      <option value="vlsi">VLSI</option>
                      <option value="mech">MECH</option>
                      <option value="excp">EXCP</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit">Register for the Event</button>
            </form>
          )}

          <div className="contact-section">
            <p>If you have any doubts, please contact:</p>

            <div className="contact-persons">
              <div>
                <strong>Sanjeevani</strong>
                <br />
                <a href="tel:+917977249924">+91 79 7724 9924</a>
              </div>
              <div>
                <strong>Janice</strong>
                <br />
                <a href="tel:+919820532319">+91 98205 32319</a>
              </div>
            </div>

            <div className="connect">
              <p>Connect With Us</p>
              <div className="social-icons">
                <a href="https://www.instagram.com/alumnicell_kjsce/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/alumnicellkjsce/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:alumni.engg@somaiya.edu">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
