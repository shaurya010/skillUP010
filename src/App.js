import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar" id="educational">
        <div className="logo">EduTech</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Course</li>
          <li>Mentor</li>
          <li>
            <button className="login-button">Login</button>
          </li>
        </ul>
      </nav>

      {/* Tagline Section */}
      <div className="tagline" id="educational">
        <div className="tagline-content">
          <h1 className="tagline-title">
            <span className="tagline-red">Empower</span> Your Learning <span className="tagline-red">Journey</span>
          </h1>
          <p className="tagline-subtitle">Unlock your potential with our expertly crafted courses</p>
          <button className="explore-button">Explore Courses</button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="card-container" id="educational">
        <div className="card" id="educational">
          <img src="/images/system.gif" alt="System Design" className="card-img" />
          <h3>System Design</h3>
          <p>Learn how to design scalable systems.</p>
          <button className="exp">Explore</button>
        </div>
        <div className="card" id="educational">
          <img src="/images/dsa.gif" alt="DSA" className="card-img" />
          <h3>Data Structures & Algorithms</h3>
          <p>Master the fundamentals of DSA.</p>
          <button className="exp">Explore</button>
        </div>
        <div className="card" id="educational">
          <img src="/images/playlist.gif" alt="Playlist" className="card-img" />
          <h3>Playlist</h3>
          <p>Your curated list of learning resources.</p>
          <button className="exp">Explore</button>
        </div>
        <div className="card" id="educational">
          <img src="/images/oops.gif" alt="OOP" className="card-img" />
          <h3>Object-Oriented Programming</h3>
          <p>Explore the principles of OOP.</p>
          <button className="exp">Explore</button>
        </div>
        <div className="card" id="educational">
          <img src="/images/sheet.gif" alt="Cheat Sheet" className="card-img" />
          <h3>Cheat Sheet</h3>
          <p>Quick reference for key concepts.</p>
          <button className="exp">Explore</button>
        </div>
        <div className="card" id="educational">
          <img src="/images/os.gif" alt="Operating Systems" className="card-img" />
          <h3>Operating Systems</h3>
          <p>Understand the core concepts of OS.</p>
          <button className="exp">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default App;
