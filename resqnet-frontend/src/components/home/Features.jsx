import {
  MapPin,
  MessageCircle,
  Clock,
  Shield,
  Award,
  ArrowUpRight,
} from "lucide-react";
import "../../styles/Features.css";

const Features = () => {
  const features = [
    {
      icon: <MapPin />,
      title: "Real-time Location Tracking",
      description:
        "See nearby volunteers and request help based on your exact location.",
    },
    {
      icon: <MessageCircle />,
      title: "Secure In-app Chat",
      description:
        "Communicate directly with volunteers or organizations through our encrypted messaging.",
    },
    {
      icon: <Clock />,
      title: "Quick Response Time",
      description:
        "Our platform prioritizes speedy connections, with most requests matched within minutes.",
    },
    {
      icon: <Shield />,
      title: "Verified Volunteers",
      description:
        "All helpers undergo a verification process to ensure safety and reliability.",
    },
    {
      icon: <Award />,
      title: "Recognition System",
      description:
        "Acknowledge helpful volunteers through our rating and feedback system.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="container features-container">
        <div className="features-header">
          <h2 className="features-title">
            Powerful Features for Crisis Response
          </h2>
          <p className="features-description">
            Our platform provides tools designed to make crisis response more
            efficient, transparent, and accessible to everyone.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card-icon">{feature.icon}</div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-text">{feature.description}</p>

              <div className="feature-card-link">
                <span>Learn more</span>
                <ArrowUpRight className="feature-card-link-icon" size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="call-to-action">
          <div className="cta-card">
            <div className="cta-content">
              <div className="cta-text">
                <h3 className="cta-title">Ready to make a difference?</h3>
                <p className="cta-description">
                  Join our community of volunteers or get the help you need
                  today.
                </p>
              </div>
              <div className="cta-buttons">
                <a href="/login?role=victim" className="btn btn-primary">
                  Get Help
                </a>
                <a href="/login?role=volunteer" className="btn btn-outline">
                  Volunteer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
