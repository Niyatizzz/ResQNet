import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import "../../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      name: "Facebook",
      href: "#",
    },
    {
      icon: <Twitter size={18} />,
      name: "Twitter",
      href: "#",
    },
    {
      icon: <Instagram size={18} />,
      name: "Instagram",
      href: "#",
    },
    {
      icon: <Github size={18} />,
      name: "Github",
      href: "#",
    },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" },
        { name: "Documentation", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo and socials */}
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <div className="logo">RN</div>
              <span className="logo-text">ResQNet</span>
            </Link>
            <p className="description">
              ResQNet is a platform connecting those in need with volunteers and
              organizations during crisis situations.
            </p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="links-grid">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="link-group-title">{group.title}</h4>
                <ul className="link-list">
                  {group.links.map((link) => (
                    <li key={link.name} className="link-item">
                      <Link to={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} ResQNet. All rights reserved.
          </p>
          <p className="tagline">Designed with care for those in need</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
