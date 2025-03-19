import { ArrowRight, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background decorative element */}
      <div className="hero-bg"></div>
      <div className="hero-circle"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="hero-badge-dot">•</span> Connecting People in
            Crisis
          </div>

          <h1 className="hero-title">
            <span className="title-primary">ResQ</span>Net: Help in Times of
            Crisis
          </h1>

          <p className="hero-description">
            A platform that bridges victims with volunteers and organizations
            during emergencies, ensuring help reaches those who need it most,
            when they need it most.
          </p>

          <div className="hero-buttons">
            <Link to="/login?role=victim" className="hero-btn hero-btn-primary">
              Get Help
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/login?role=volunteer"
              className="hero-btn hero-btn-outline"
            >
              Become a Volunteer
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon-container">
                <HeartHandshake className="feature-icon" size={24} />
              </div>
              <h3 className="feature-title">Immediate Response</h3>
              <p className="feature-description">
                Connect with nearby volunteers who can provide immediate
                assistance.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <ShieldCheck className="feature-icon" size={24} />
              </div>
              <h3 className="feature-title">Verified Helpers</h3>
              <p className="feature-description">
                All volunteers and organizations are verified for your safety.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <Users className="feature-icon" size={24} />
              </div>
              <h3 className="feature-title">Community Support</h3>
              <p className="feature-description">
                Join a network of dedicated individuals committed to helping
                others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
