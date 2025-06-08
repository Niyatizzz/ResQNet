import { Link } from "react-router-dom";
import "./home.css"; // import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          🦄 <span>ResQNet</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="hero-section">
        <h1 className="hero-title">
          Connecting you to <span className="gradient-text">help</span> <br />
          in times of <span className="gradient-text">crisis</span>
          <span className="dot">.</span>
        </h1>
        <p className="subtext">
          A platform to connect disaster victims with volunteers and
          organizations for timely aid.
        </p>
        <div className="cta-buttons">
          <Link to="/request-help" className="cta-button ask-help">
            Ask Help <span className="arrow">➤</span>
          </Link>
          <Link to="/signup" className="cta-button volunteer">
            Volunteer <span className="arrow">➤</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
