import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../../styles/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`header ${
        isScrolled ? "header-scrolled" : "header-transparent"
      }`}
    >
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo-container">
            <div className="header-logo">RN</div>
            <span className="header-logo-text">ResQNet</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name} className="nav-item">
                  <Link
                    to={link.href}
                    className={`nav-link ${
                      location.pathname === link.href ? "active" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="auth-buttons">
              <Link to="/login">
                <button className="btn btn-outline btn-rounded">Login</button>
              </Link>
              <Link to="/login?signup=true">
                <button className="btn btn-primary btn-rounded">Sign Up</button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-inner">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.name} className="mobile-nav-item">
                    <Link
                      to={link.href}
                      className={`mobile-nav-link ${
                        location.pathname === link.href ? "active" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mobile-auth-buttons">
                <Link to="/login" className="w-full">
                  <button className="btn btn-outline w-full">Login</button>
                </Link>
                <Link to="/login?signup=true" className="w-full">
                  <button className="btn btn-primary w-full">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
