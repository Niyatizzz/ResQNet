import { useState } from "react";
import { PlusCircle, Clock, CheckCircle, XCircle, Map } from "lucide-react";
import RequestForm from "@/components/forms/RequestForm";
import "../styles/VictimDashboard.css";

// Sample data for request history
const sampleRequests = [
  {
    id: 1,
    type: "Food",
    status: "pending",
    date: "2023-05-12T08:30:00",
    location: "1234 Park Ave",
  },
  {
    id: 2,
    type: "Medical Aid",
    status: "accepted",
    date: "2023-05-10T14:15:00",
    location: "5678 Main St",
    volunteer: "John Smith",
  },
  {
    id: 3,
    type: "Shelter",
    status: "completed",
    date: "2023-05-05T10:00:00",
    location: "910 Oak Dr",
    volunteer: "Maria Garcia",
  },
  {
    id: 4,
    type: "Medical Aid",
    status: "declined",
    date: "2023-05-01T16:45:00",
    location: "321 Pine Rd",
  },
];

const VictimDashboard = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [activeTab, setActiveTab] = useState("history");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="status-badge status-pending">Pending</span>;
      case "accepted":
        return <span className="status-badge status-accepted">Accepted</span>;
      case "completed":
        return <span className="status-badge status-completed">Completed</span>;
      case "declined":
        return <span className="status-badge status-declined">Declined</span>;
      default:
        return <span className="status-badge">Unknown</span>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Clock
            className="status-icon"
            size={16}
            color="var(--color-warning)"
          />
        );
      case "accepted":
        return (
          <CheckCircle
            className="status-icon"
            size={16}
            color="var(--color-info)"
          />
        );
      case "completed":
        return (
          <CheckCircle
            className="status-icon"
            size={16}
            color="var(--color-success)"
          />
        );
      case "declined":
        return (
          <XCircle
            className="status-icon"
            size={16}
            color="var(--color-error)"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="victim-dashboard">
      {showRequestForm ? (
        <div className="request-form-card card">
          <RequestForm onCancel={() => setShowRequestForm(false)} />
        </div>
      ) : (
        <div className="help-card">
          <div className="help-card-content">
            <div className="help-card-text">
              <h2>Need Assistance?</h2>
              <p>Request help from our network of volunteers</p>
            </div>
            <button
              onClick={() => setShowRequestForm(true)}
              className="btn btn-primary"
            >
              <PlusCircle size={16} className="mr-2" />
              Request Help
            </button>
          </div>
        </div>
      )}

      <div className="dashboard-tabs">
        <div className="tab-list">
          <button
            className={`tab-button ${activeTab === "history" ? "active" : ""}`}
            onClick={() => setActiveTab("history")}
          >
            Request History
          </button>
          <button
            className={`tab-button ${activeTab === "map" ? "active" : ""}`}
            onClick={() => setActiveTab("map")}
          >
            Map View
          </button>
        </div>

        <div
          className={`tab-content ${activeTab === "history" ? "active" : ""}`}
        >
          <div className="card">
            <div className="card-body">
              <h3 className="card-title mb-4">Your Request History</h3>

              {sampleRequests.length > 0 ? (
                <div className="request-history-list">
                  {sampleRequests.map((request) => (
                    <div key={request.id} className="request-item">
                      <div className="request-header">
                        <div>
                          <div className="request-type">
                            {getStatusIcon(request.status)}
                            <h4>{request.type} Request</h4>
                          </div>
                          <p className="request-date">
                            {new Date(request.date).toLocaleDateString()} at{" "}
                            {new Date(request.date).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                          <p className="request-location">
                            Location: {request.location}
                          </p>
                          {request.volunteer && (
                            <p className="request-volunteer">
                              Volunteer: {request.volunteer}
                            </p>
                          )}
                        </div>
                        <div>{getStatusBadge(request.status)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p className="empty-text">
                    You haven't made any requests yet.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => setShowRequestForm(true)}
                  >
                    Make Your First Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === "map" ? "active" : ""}`}>
          <div className="card map-view-card">
            <div className="map-header">
              <h3 className="map-title">Nearby Resources</h3>
              <div className="volunteers-badge">
                <div className="badge-dot"></div>3 Volunteers Nearby
              </div>
            </div>

            <div className="map-placeholder">
              <div className="map-placeholder-content">
                <Map className="map-icon" size={64} />
                <p className="map-text">Map coming soon</p>
              </div>
            </div>

            <button className="btn btn-primary w-full">
              Use My Current Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VictimDashboard;
