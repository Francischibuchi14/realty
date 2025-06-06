import { useState } from 'react';
import './style.css';
import image from './image/capture.png';
import logo from './image/bctdg.png';

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="logo" ><img style={{height:'40px'}} src={logo} alt="" /></div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Online Tutor</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className='hero-image'>
            <img src={image} alt="" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Take student <br /> experience to the <br />next level</h1>
            <p className="hero-subtitle">
              Completely create client-focused growth strategies rather <br /> inexpensive imperatives for <br /> long-term high-impact users.
            </p>
            <button className="hero-cta">Get Started</button>
            <div className="divider"></div>
          </div>
        </section>

        {/* Stats and Chart Section */}
        <div className="content-section">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number">4.8/5</div>
              <div className="stat-label">on Trustpink</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">+10,000</div>
              <div className="stat-label">Students helped</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50,000</div>
              <div className="stat-label">Hours taught</div>
            </div>
          </div>
        </div>

        {/* What We Provide Section */}
        <div className="what-we-provide">
          <h2 className="section-title">What We Provide</h2>
          <p className="section-description">
            This Privacy Policy becomes effective upon your first use of the service, understood the and agree to be bound thereby.
          </p>
          <div className="features-container">
            <div className="feature-card">
              <h3 className="feature-title">Communicate with students, their way</h3>
              <ul className="feature-list">
                <li>Compatently morph resource</li>
                <li className="sub-item">existing ideas without accurate innovation.</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Track student involvement, at scale</h3>
              <ul className="feature-list">
                <li>Compatently morph resource</li>
                <li className="sub-item">existing ideas without accurate innovation.</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Drive student outcomes with all</h3>
              <ul className="feature-list">
                <li>Compatently morph resource</li>
                <li className="sub-item">existing ideas without accurate innovation.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Student Experience Section */}
        <div className="student-experience-container">
          <div className="navigation-arrows">
            <button className="nav-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="nav-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="content-wrapper">
            <div className="left-content">
              <div className="header-section">
                <h1 className="main-title">Build personalized<br />student experiences</h1>
                <p className="subtitle">
                  This Privacy Policy becomes effective upon your first use of the
                  <br />service. You acknowledge that you have read and understood this
                  <br />Privacy Policy.
                </p>
              </div>

              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon lightning">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="feature-title">Campuskit</h3>
                  <p className="feature-description">
                    A student campus to guide
                    <br />the student journey
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon document">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                      <line x1="9" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2"/>
                      <line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="feature-title">Effective Methods</h3>
                  <p className="feature-description">
                    A student campus to guide
                    <br />the student journey
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon percentage">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="6.5" cy="6.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="17.5" cy="17.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="feature-title">Expert Tutoring</h3>
                  <p className="feature-description">
                    A student campus to guide
                    <br />the student journey
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon atom">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M20.2 20.2C21.4 19 20.9 16.9 19.4 15.4C17.9 13.9 15.8 13.4 14.6 14.6C13.4 15.8 13.9 17.9 15.4 19.4C16.9 20.9 19 21.4 20.2 20.2Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3.8 3.8C2.6 5 3.1 7.1 4.6 8.6C6.1 10.1 8.2 10.6 9.4 9.4C10.6 8.2 10.1 6.1 8.6 4.6C7.1 3.1 5 2.6 3.8 3.8Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M20.2 3.8C21.4 5 20.9 7.1 19.4 8.6C17.9 10.1 15.8 10.6 14.6 9.4C13.4 8.2 13.9 6.1 15.4 4.6C16.9 3.1 19 2.6 20.2 3.8Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3.8 20.2C2.6 19 3.1 16.9 4.6 15.4C6.1 13.9 8.2 13.4 9.4 14.6C10.6 15.8 10.1 17.9 8.6 19.4C7.1 20.9 5 21.4 3.8 20.2Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="feature-title">Online Course</h3>
                  <p className="feature-description">
                    A student campus to guide
                    <br />the student journey
                  </p>
                </div>
              </div>
            </div>

            <div className="right-content">
              <div className="image-container">
                <div className="background-pattern"></div>
                <img src="/student-image.png" alt="Professional student giving thumbs up" className="student-image" />
                <div className="dashboard-widget">
                  <div className="chart-container">
                    <div className="chart-segment orange"></div>
                    <div className="chart-segment green"></div>
                    <div className="chart-segment gray"></div>
                  </div>
                  <div className="widget-info">
                    <div className="widget-title">The Best Online Platform</div>
                    <div className="widget-subtitle">during a pandemic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Students at a Glance Section */}
        <div className="students-glance">
          <div className="glance-content">
            <h2 className="glance-title">Students at a Glance</h2>
            <p className="glance-description">
              The teaching demo is a common step in the hiring process at many colleges. Giving a successful
            </p>
            <div className="divider"></div>
            <div className="stats-grid">
              <div className="stat-item">
                <h3 className="stat-title">Drive Students</h3>
                <div className="stat-value">1200+</div>
              </div>
              <div className="stat-item">
                <h3 className="stat-title">Students</h3>
                <div className="stat-value">1000+</div>
              </div>
              <div className="stat-item">
                <h3 className="stat-title">E-Learning Courses</h3>
                <div className="stat-value">9000+</div>
              </div>
              <div className="stat-item">
                <h3 className="stat-title">Materials</h3>
                <div className="stat-value">1100+</div>
              </div>
            </div>
          </div>
        </div>

         <div className="testimonial-container">
      <div className="testimonial-section">
        <div className="testimonial-left">
          <div className="img-box">
            <img
              src="https://i.ibb.co/fGF8VSM/business-man.png"
              alt="man"
              className="profile-img"
            />
            <div className="play-button">▶</div>
          </div>
        </div>

        <div className="testimonial-right">
          <div className="quote-icon">❝❞</div>
          <p className="testimonial-text">
            Our specialized team of designers, developers, illustrators and
            project managers work with streamlined processes to break through
            organizational roadblocks. We translate research into solutions,
            crafting thoughtful and unified brands, apps, websites, interfaces
            and systems.
          </p>
          <p className="testimonial-author">
            <strong>Emran Emon</strong>
            <br /> CEO Cafe
          </p>
          <div className="arrow-buttons">
            <span className="arrow">⬅</span>
            <span className="arrow">➡</span>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-col logo-col">
          <h3>Realty</h3>
          <p>
            We design professional looking yet simple App. Our designs are
            search engine and user friendly.
          </p>
          <div className="social-icons">
            <i>F</i>
            <i>T</i>
            <i>G</i>
            <i>in</i>
          </div>
        </div>
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li>Company</li>
            <li>Teams</li>
            <li>Profile</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Contact</li>
            <li>Application</li>
            <li>FAQ</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legals</h4>
          <ul>
            <li>Copyright</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Terms</li>
          </ul>
        </div>
      </footer>

      <div className="footer-bottom">
        <p>2020 copyright all right reserved</p>
        <p>Terms & Condition · Privacy Policy</p>
      </div>
    </div>
      </main>
    </div>
  );
}

export default App;