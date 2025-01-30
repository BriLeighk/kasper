import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('Please enter a valid email address');
      return;
    }

    const scriptUrl = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error('Google Script URL not found');
      setSubmitStatus('Configuration error. Please try again later.');
      return;
    }

    try {
      setSubmitStatus('Submitting...');
      
      // Create form data
      const formData = new FormData();
      formData.append('email', email.trim());

      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ email: email.trim() })
      });

      setSubmitStatus('Thanks for subscribing!');
      setEmail('');
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="App">
      <nav className="nav-bar">
        <img src="/logo.png" alt="KDC Logo" className="nav-logo" />
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#performances">PERFORMANCES</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>
      
      <section id="home" className="hero-section">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </section>

      <section id="about" className="about-section">
        <div className="section-line"></div>
        <h2>ABOUT KDC</h2>
        <div className="about-content">
          <p>KASPER Dance Crew is an all-inclusive student organization at the University of Wisconsin-Madison, specializing in K-pop and hip-hop dance. Our passionate community brings together dancers of all backgrounds, creating dynamic performances and fostering a supportive environment for everyone. From covering the latest K-pop choreos to competing in regional competitions, we're dedicated to sharing our love for dance with the campus community.</p>
        </div>
      </section>

      <section id="performances" className="performances-section">
        <div className="section-line"></div>
        <h2>UPCOMING EVENTS</h2>
        <div className="performance-grid">
          <div className="performance-card">
            <div className="card-glow"></div>
            <h3>PERFORMANCES</h3>
            <ul className="event-list">
              <li>CHASA Performance<br/><span className="event-date">February 8th</span></li>
              <li>VSA Performance<br/><span className="event-date">February 16th</span></li>
            </ul>
          </div>
          <div className="performance-card">
            <div className="card-glow"></div>
            <h3>SPRING 2024 AUDITIONS</h3>
            <ul className="event-list">
              <li>Pre-audition Social<br/>
                <span className="event-date">January 31st • 7:00-9:00 PM CST</span><br/>
                <span className="event-location">Capital View Room, Memorial Union 4th Floor</span>
              </li>
              <li>Day 1<br/>
                <span className="event-date">February 1st • 11:00 AM-1:00 PM CST</span><br/>
                <span className="event-location">SAC Multipurpose Room, 333 East Campus Mall 4th Floor</span>
              </li>
              <li>Day 2<br/>
                <span className="event-date">February 2nd • 11:00 AM-12:15 PM CST</span><br/>
                <span className="event-location">Festival Room, Memorial Union</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="newsletter" className="newsletter-section">
        <div className="section-line"></div>
        <h2>JOIN OUR NEWSLETTER</h2>
        <div className="newsletter-content">
          <p>Stay updated with our latest performances and events!</p>
          <div className="email-signup">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="email-input"
            />
            <button onClick={handleEmailSubmit} className="submit-btn">
              Subscribe
            </button>
          </div>
          {submitStatus && <p className="submit-status">{submitStatus}</p>}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-line"></div>
        <h2>JOIN THE MOVEMENT</h2>
        <div className="contact-content">
          <p>Connect with us if you have any questions</p>
          <div className="social-links">
            <a 
              href="https://www.youtube.com/@KASPERDanceCrew/featured" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a 
              href="https://www.instagram.com/kasperdancecrew/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <a 
            href="mailto:kasper.dancecrew@gmail.com" 
            className="contact-btn"
          >
            CONTACT US
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
