import './App.css';

function App() {
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
